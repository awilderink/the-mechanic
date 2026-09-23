import { INSTAGRAM_ACCESS_TOKEN, SANITY_WRITE_TOKEN } from 'astro:env/server';
import { createClient } from '@sanity/client';

export type InstagramPost = {
	id: string;
	permalink: string;
	image: string;
	caption: string;
	isVideo: boolean;
};

type RawMedia = {
	id: string;
	caption?: string;
	media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
	media_url?: string;
	thumbnail_url?: string;
	permalink: string;
};

type StoredToken = {
	token: string;
	seed?: string;
	refreshedAt: string;
};

const GRAPH = 'https://graph.instagram.com';
const SECRET_ID = 'secrets.instagram';
const MAX_POSTS = 12;
const CACHE_MS = 60 * 60 * 1000;
const FAILURE_CACHE_MS = 5 * 60 * 1000;
const REFRESH_AFTER_MS = 7 * 24 * 60 * 60 * 1000;
const TIMEOUT_MS = 5000;

const secrets = SANITY_WRITE_TOKEN
	? createClient({
			projectId: 'bwy8myjl',
			dataset: 'production',
			apiVersion: '2024-01-01',
			useCdn: false,
			token: SANITY_WRITE_TOKEN,
		})
	: null;

let cache: { posts: InstagramPost[]; expires: number } | null = null;
let pending: Promise<void> | null = null;

export async function getInstagramPosts(
	limit: number,
): Promise<InstagramPost[]> {
	if (!cache || cache.expires < Date.now()) {
		pending ??= load().finally(() => {
			pending = null;
		});
		await pending;
	}
	return cache?.posts.slice(0, limit) ?? [];
}

async function load(): Promise<void> {
	try {
		const token = await currentToken();
		const posts = token ? await fetchPosts(token) : [];
		cache = { posts, expires: Date.now() + CACHE_MS };
	} catch (error) {
		console.error('Instagram feed unavailable:', error);
		cache = {
			posts: cache?.posts ?? [],
			expires: Date.now() + FAILURE_CACHE_MS,
		};
	}
}

async function currentToken(): Promise<string | null> {
	const stored = await readStoredToken();
	const seed = INSTAGRAM_ACCESS_TOKEN;

	if (stored && (!seed || stored.seed === seed)) {
		const age = Date.now() - Date.parse(stored.refreshedAt);
		if (age < REFRESH_AFTER_MS) return stored.token;
		return (await refresh(stored.token, stored.seed)) ?? stored.token;
	}

	if (!seed) return null;
	return (await refresh(seed, seed)) ?? seed;
}

async function readStoredToken(): Promise<StoredToken | null> {
	if (!secrets) return null;
	try {
		return (await secrets.getDocument<StoredToken>(SECRET_ID)) ?? null;
	} catch (error) {
		console.error('Could not read the stored Instagram token:', error);
		return null;
	}
}

async function refresh(
	token: string,
	seed: string | undefined,
): Promise<string | null> {
	if (!secrets) return null;
	const url = new URL(`${GRAPH}/refresh_access_token`);
	url.searchParams.set('grant_type', 'ig_refresh_token');
	url.searchParams.set('access_token', token);

	try {
		const res = await fetch(url, { signal: AbortSignal.timeout(TIMEOUT_MS) });
		if (!res.ok) return null;
		const { access_token } = (await res.json()) as { access_token?: string };
		if (!access_token) return null;
		await secrets.createOrReplace({
			_id: SECRET_ID,
			_type: 'secret',
			token: access_token,
			seed,
			refreshedAt: new Date().toISOString(),
		});
		return access_token;
	} catch (error) {
		console.error('Could not refresh the Instagram token:', error);
		return null;
	}
}

async function fetchPosts(token: string): Promise<InstagramPost[]> {
	const url = new URL(`${GRAPH}/me/media`);
	url.searchParams.set(
		'fields',
		'id,caption,media_type,media_url,thumbnail_url,permalink',
	);
	url.searchParams.set('limit', String(MAX_POSTS));
	url.searchParams.set('access_token', token);

	const res = await fetch(url, { signal: AbortSignal.timeout(TIMEOUT_MS) });
	if (!res.ok) {
		throw new Error(`Instagram responded ${res.status}: ${await res.text()}`);
	}
	const { data } = (await res.json()) as { data: RawMedia[] };

	return data.flatMap((media) => {
		const isVideo = media.media_type === 'VIDEO';
		const image = isVideo ? media.thumbnail_url : media.media_url;
		if (!image) return [];
		return [
			{
				id: media.id,
				permalink: media.permalink,
				image,
				caption: media.caption ?? '',
				isVideo,
			},
		];
	});
}
