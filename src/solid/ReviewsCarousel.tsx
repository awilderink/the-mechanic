import Autoplay from 'embla-carousel-autoplay';
import createEmblaCarousel from 'embla-carousel-solid';
import { For, type JSX } from 'solid-js';
import { ArrowLeft, ArrowRight } from './icons';

export type Review = {
	naam: string;
	body: string;
};

export type ReviewsCarouselProps = {
	reviews: Review[];
};

/** Autoplaying testimonial quotes. Sits inside the panel's flex column. */
export default function ReviewsCarousel(
	props: ReviewsCarouselProps,
): JSX.Element {
	const [emblaRef, emblaApi] = createEmblaCarousel(
		() => ({ slidesToScroll: 'auto', loop: true }),
		() => [Autoplay({ delay: 3000 })],
	);

	// Manual navigation restarts the timer so the slide is not yanked away.
	const scroll = (next: boolean) => {
		const api = emblaApi();
		if (!api) return;
		if (next) api.scrollNext();
		else api.scrollPrev();
		api.plugins().autoplay?.reset();
	};

	return (
		<>
			<div class="flex grow items-center overflow-hidden">
				<div ref={emblaRef} class="flex grow items-center overflow-hidden">
					<div class="-ml-4 flex items-center">
						<For each={props.reviews}>
							{(review) => (
								<div class="min-w-0 shrink-0 grow-0 basis-full pl-4">
									<div class="mt-4 font-light text-2xl italic">
										&ldquo;{review.body}&rdquo;
									</div>
								</div>
							)}
						</For>
					</div>
				</div>
			</div>
			<div class="flex gap-2">
				<button
					type="button"
					onClick={() => scroll(false)}
					aria-label="Vorige review"
					class="cursor-pointer"
				>
					<ArrowLeft class="size-10" />
				</button>
				<button
					type="button"
					onClick={() => scroll(true)}
					aria-label="Volgende review"
					class="cursor-pointer"
				>
					<ArrowRight class="size-10" />
				</button>
			</div>
		</>
	);
}
