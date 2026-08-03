import createEmblaCarousel from 'embla-carousel-solid';
import { createEffect, createSignal, For, type JSX, onCleanup } from 'solid-js';
import { ArrowRight } from './icons';
import type { Img } from './types';

export type FeaturedCard = {
	href: string;
	titel: string;
	image: Img;
	/** Pairs this card image with the detail-page gallery it links to. */
	viewTransitionName?: string;
	/** Brand name, rendered above the title. */
	merk?: string;
	/** Amount in EUR, formatted for nl-NL on render. */
	prijs?: number;
};

export type FeaturedCarouselProps = {
	items: FeaturedCard[];
};

const euro = new Intl.NumberFormat('nl-NL', {
	style: 'currency',
	currency: 'EUR',
});

/** Mobile-only carousel for the featured stock cards. */
export default function FeaturedCarousel(
	props: FeaturedCarouselProps,
): JSX.Element {
	const [current, setCurrent] = createSignal(0);

	const [emblaRef, emblaApi] = createEmblaCarousel(() => ({
		loop: true,
		align: 'start',
	}));

	// The api accessor only resolves once the ref is attached, so subscribe
	// from an effect instead of at setup time.
	createEffect(() => {
		const api = emblaApi();
		if (!api) return;
		const onSelect = () => setCurrent(api.selectedScrollSnap());
		onSelect();
		api.on('select', onSelect);
		onCleanup(() => void api.off('select', onSelect));
	});

	return (
		<>
			<div ref={emblaRef} class="overflow-hidden">
				<div class="flex">
					<For each={props.items}>
						{(item) => (
							<div class="min-w-0 shrink-0 grow-0 basis-full">
								<a href={item.href}>
									<div class="flex flex-col overflow-hidden rounded-xl bg-white p-6">
										<div
											class="-mx-6 -mt-8 mb-4"
											style={
												item.viewTransitionName
													? { 'view-transition-name': item.viewTransitionName }
													: undefined
											}
										>
											<img
												src={item.image.src}
												alt={item.image.alt}
												width={item.image.width}
												height={item.image.height}
												class="w-full"
												loading="lazy"
											/>
										</div>
										<div>{item.merk}</div>
										<div class="text-neutral-400 leading-loose">
											{item.titel}
										</div>
										<div class="mt-8 flex items-end justify-between text-sm">
											<span>{item.prijs ? euro.format(item.prijs) : ''}</span>
											<div class="h-10 transition-transform hover:translate-x-1">
												<ArrowRight class="size-full" />
											</div>
										</div>
									</div>
								</a>
							</div>
						)}
					</For>
				</div>
			</div>
			<div class="mt-4 flex items-center justify-between gap-2">
				<div class="flex justify-start gap-2">
					<For each={props.items}>
						{(_, i) => (
							<button
								type="button"
								onClick={() => emblaApi()?.scrollTo(i())}
								aria-label={`Go to slide ${i() + 1}`}
								class="size-3 rounded-full border border-neutral-400 transition-colors duration-200"
								classList={{
									'bg-neutral-800': current() === i(),
									'bg-neutral-300': current() !== i(),
								}}
							/>
						)}
					</For>
				</div>
				<a href="/voorraad">
					<button
						type="button"
						class="cursor-pointer rounded-full bg-primary px-8 py-4 font-neutral text-sm text-white transition-transform duration-200 hover:translate-y-[-1px] hover:bg-primary/90 active:translate-y-0"
					>
						Bekijk alles
					</button>
				</a>
			</div>
		</>
	);
}
