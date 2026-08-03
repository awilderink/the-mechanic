import type { EmblaCarouselType } from 'embla-carousel';
import { type Accessor, createSignal, type Setter } from 'solid-js';

export type GalleryState = {
	mainApi: Accessor<EmblaCarouselType | undefined>;
	setMainApi: Setter<EmblaCarouselType | undefined>;
	thumbApi: Accessor<EmblaCarouselType | undefined>;
	setThumbApi: Setter<EmblaCarouselType | undefined>;
	current: Accessor<number>;
	setCurrent: Setter<number>;
};

/**
 * The main image and the thumbnail strip are separate islands so that each sits
 * in its own Astro element — `transition:name` needs a real box, and an
 * `<astro-island>` wrapper is `display: contents`. They share carousel state
 * through this module-scoped registry, keyed by the `galleryId` both receive.
 */
const galleries = new Map<string, GalleryState>();

export function galleryState(id: string): GalleryState {
	const existing = galleries.get(id);
	if (existing) return existing;

	const [mainApi, setMainApi] = createSignal<EmblaCarouselType | undefined>();
	const [thumbApi, setThumbApi] = createSignal<EmblaCarouselType | undefined>();
	const [current, setCurrent] = createSignal(0);
	const state: GalleryState = {
		mainApi,
		setMainApi,
		thumbApi,
		setThumbApi,
		current,
		setCurrent,
	};
	galleries.set(id, state);
	return state;
}
