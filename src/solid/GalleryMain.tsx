import Autoplay from 'embla-carousel-autoplay';
import createEmblaCarousel from 'embla-carousel-solid';
import { createEffect, For, type JSX, onCleanup, Show } from 'solid-js';
import { galleryState } from './galleryStore';
import { ArrowLeft, ArrowRight } from './icons';
import type { Img } from './types';

export type GalleryMainProps = {
	/** Must match the `galleryId` given to the matching GalleryThumbs. */
	galleryId: string;
	images: Img[];
	autoplay?: boolean;
	/** Classes for the prev/next buttons, e.g. colour. */
	arrowClass?: string;
};

/**
 * The main image carousel. Rendered inside an Astro element so the page can put
 * `transition:name` on a real box for the shared-element flight.
 */
export default function GalleryMain(props: GalleryMainProps): JSX.Element {
	const state = galleryState(props.galleryId);

	const [mainRef, mainApi] = createEmblaCarousel(
		() => ({ loop: true }),
		() =>
			props.autoplay === false
				? []
				: [Autoplay({ delay: 4000, stopOnInteraction: false })],
	);

	// The api accessor only resolves once the ref is attached.
	createEffect(() => {
		const api = mainApi();
		if (!api) return;
		state.setMainApi(api);
		const onSelect = () => {
			const i = api.selectedScrollSnap();
			state.setCurrent(i);
			state.thumbApi()?.scrollTo(i);
		};
		api.on('select', onSelect);
		onCleanup(() => {
			api.off('select', onSelect);
			state.setMainApi(undefined);
		});
	});

	return (
		<div ref={mainRef} class="h-full overflow-hidden">
			<div class="flex h-full">
				<For each={props.images}>
					{(img) => (
						<div class="min-w-0 flex-none basis-full">
							<img
								src={img.src}
								alt={img.alt}
								width={img.width}
								height={img.height}
								class="h-full w-full object-cover"
							/>
						</div>
					)}
				</For>
			</div>

			<Show when={props.images.length > 1}>
				<div
					class={`absolute right-6 bottom-6 flex gap-2 ${props.arrowClass ?? 'text-white'}`}
				>
					<button
						type="button"
						onClick={() => mainApi()?.scrollPrev()}
						aria-label="Vorige foto"
						class="cursor-pointer transition-colors hover:text-sand"
					>
						<ArrowLeft class="size-10" />
					</button>
					<button
						type="button"
						onClick={() => mainApi()?.scrollNext()}
						aria-label="Volgende foto"
						class="cursor-pointer transition-colors hover:text-sand"
					>
						<ArrowRight class="size-10" />
					</button>
				</div>
			</Show>
		</div>
	);
}
