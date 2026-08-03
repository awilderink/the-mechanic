import createEmblaCarousel from 'embla-carousel-solid';
import { createEffect, For, type JSX, onCleanup, Show } from 'solid-js';
import { galleryState } from './galleryStore';
import type { Img } from './types';

export type GalleryThumbsProps = {
	/** Must match the `galleryId` given to the matching GalleryMain. */
	galleryId: string;
	images: Img[];
	/** Flex basis utility for a thumbnail, e.g. "basis-20" or "basis-1/8". */
	thumbBasis?: string;
};

/** Thumbnail strip, driving and following the main carousel. */
export default function GalleryThumbs(props: GalleryThumbsProps): JSX.Element {
	const state = galleryState(props.galleryId);

	const [thumbRef, thumbApi] = createEmblaCarousel(() => ({
		dragFree: true,
		containScroll: 'keepSnaps',
	}));

	createEffect(() => {
		const api = thumbApi();
		if (!api) return;
		state.setThumbApi(api);
		onCleanup(() => state.setThumbApi(undefined));
	});

	return (
		<Show when={props.images.length > 1}>
			<div ref={thumbRef} class="overflow-hidden">
				<div class="flex flex-row gap-1">
					<For each={props.images}>
						{(img, i) => (
							<button
								type="button"
								onClick={() => state.mainApi()?.scrollTo(i())}
								aria-label={`Ga naar foto ${i() + 1}`}
								class={`group relative min-w-0 shrink-0 grow-0 cursor-pointer overflow-hidden rounded-md ${props.thumbBasis ?? 'basis-20'}`}
							>
								<div
									class="absolute inset-0 transition-colors duration-75 hover:bg-neutral-200/0"
									classList={{ 'bg-neutral-200/50': state.current() !== i() }}
								/>
								<img
									src={img.src}
									alt=""
									width={160}
									height={120}
									class="w-full object-cover"
								/>
							</button>
						)}
					</For>
				</div>
			</div>
		</Show>
	);
}
