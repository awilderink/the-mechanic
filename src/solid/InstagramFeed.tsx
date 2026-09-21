import {
	createSignal,
	For,
	type JSX,
	onCleanup,
	onMount,
	Show,
} from 'solid-js';
import {
	COOKIE_CONSENT_CHANGED,
	readCookieConsent,
	writeCookieConsent,
} from './CookieBanner';

export type InstagramFeedProps = {
	posts: string[];
	profileUrl: string;
};

const EMBED_SCRIPT = 'https://www.instagram.com/embed.js';

declare global {
	interface Window {
		instgrm?: { Embeds: { process: () => void } };
	}
}

function loadEmbeds(): void {
	if (window.instgrm) {
		window.instgrm.Embeds.process();
		return;
	}
	if (document.querySelector(`script[src="${EMBED_SCRIPT}"]`)) return;
	const script = document.createElement('script');
	script.src = EMBED_SCRIPT;
	script.async = true;
	document.body.appendChild(script);
}

/** Official Instagram embeds, only loaded once the visitor accepted all cookies. */
export default function InstagramFeed(props: InstagramFeedProps): JSX.Element {
	const [allowed, setAllowed] = createSignal(false);

	onMount(() => {
		const sync = () => setAllowed(readCookieConsent() === 'all');
		sync();
		document.addEventListener(COOKIE_CONSENT_CHANGED, sync);
		onCleanup(() => document.removeEventListener(COOKIE_CONSENT_CHANGED, sync));
	});

	const embed = (el: HTMLElement) => {
		queueMicrotask(loadEmbeds);
		onCleanup(() => el.replaceChildren());
	};

	return (
		<Show
			when={allowed()}
			fallback={
				<div class="flex flex-col items-start gap-4 rounded-xl bg-white p-8">
					<p class="font-light">
						Instagram-berichten worden pas geladen als je alle cookies
						accepteert. Je kunt onze berichten ook direct op Instagram bekijken.
					</p>
					<div class="flex flex-wrap gap-2">
						<button
							type="button"
							onClick={() => writeCookieConsent('all')}
							class="cursor-pointer rounded-full bg-tertiary px-8 py-4 font-neutral text-sm text-white transition-transform duration-200 hover:translate-y-[-1px] hover:bg-tertiary/90 active:translate-y-0"
						>
							Cookies accepteren
						</button>
						<a
							href={props.profileUrl}
							target="_blank"
							rel="noopener noreferrer"
							class="rounded-full border border-primary px-8 py-4 font-neutral text-primary text-sm transition-colors hover:bg-primary/5"
						>
							Bekijk op Instagram
						</a>
					</div>
				</div>
			}
		>
			<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				<For each={props.posts}>
					{(url) => (
						<blockquote
							ref={embed}
							class="instagram-media !m-0 !min-w-0 !w-full !max-w-none !rounded-xl !border-0 !shadow-none"
							data-instgrm-permalink={url}
							data-instgrm-version="14"
						>
							<a href={url} target="_blank" rel="noopener noreferrer">
								Bekijk dit bericht op Instagram
							</a>
						</blockquote>
					)}
				</For>
			</div>
		</Show>
	);
}
