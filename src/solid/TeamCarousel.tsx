import createEmblaCarousel from 'embla-carousel-solid';
import { createEffect, createSignal, For, type JSX, onCleanup } from 'solid-js';
import { ArrowLeft, ArrowRight } from './icons';
import type { Img } from './types';

export type TeamMemberCard = {
	naam: string;
	functie: string;
	bio: string;
	image: Img;
};

export type TeamCarouselProps = {
	members: TeamMemberCard[];
};

/** Photo carousel on the left, the selected member's bio on the right. */
export default function TeamCarousel(props: TeamCarouselProps): JSX.Element {
	const [current, setCurrent] = createSignal(0);

	const [emblaRef, emblaApi] = createEmblaCarousel(() => ({ loop: true }));

	// The api accessor only resolves once the ref is attached, so subscribe
	// from an effect instead of at setup time.
	createEffect(() => {
		const api = emblaApi();
		if (!api) return;
		const onSelect = () => setCurrent(api.selectedScrollSnap());
		api.on('select', onSelect);
		onCleanup(() => void api.off('select', onSelect));
	});

	// Rendered directly rather than patched in after hydration, so the first
	// member's name, role and bio ship in the server-rendered HTML.
	const selected = () => props.members[current()];

	return (
		<div class="mt-6">
			<div class="flex flex-col gap-4 md:flex-row md:gap-8">
				<div class="relative flex-1/2">
					<div ref={emblaRef} class="overflow-hidden">
						<div class="flex">
							<For each={props.members}>
								{(member) => (
									<div class="w-full min-w-0 flex-none">
										<img
											src={member.image.src}
											alt={member.image.alt}
											width={member.image.width}
											height={member.image.height}
											class="h-full w-full rounded-lg object-cover"
										/>
									</div>
								)}
							</For>
						</div>
					</div>
				</div>
				<div class="flex min-h-80 flex-1/2 flex-col-reverse gap-4 md:flex-col md:justify-between">
					<div class="transition-opacity duration-300 ease-in-out">
						<h3 class="mb-2 font-regular text-gray-900 text-xl">
							{selected()?.naam}
						</h3>
						<p class="mb-4 font-thin text-gray-600 text-sm">
							{selected()?.functie}
						</p>
						<p class="font-thin text-gray-700 text-sm leading-relaxed">
							{selected()?.bio}
						</p>
					</div>

					<div class="flex gap-4 self-end md:self-start">
						<button
							type="button"
							onClick={() => emblaApi()?.scrollPrev()}
							aria-label="Vorig teamlid"
							class="size-10 cursor-pointer"
						>
							<ArrowLeft />
						</button>
						<button
							type="button"
							onClick={() => emblaApi()?.scrollNext()}
							aria-label="Volgend teamlid"
							class="size-10 cursor-pointer"
						>
							<ArrowRight />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
