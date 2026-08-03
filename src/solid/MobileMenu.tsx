import {
	createEffect,
	createSignal,
	For,
	type JSX,
	onCleanup,
	onMount,
	Show,
} from 'solid-js';
import { Chevron } from './icons';

export type MenuLink = { title: string; href: string };
export type MenuGroup = { title: string; href?: string; children: MenuLink[] };
export type MobileMenuProps = { items: MenuGroup[] };

/** Full-screen mobile nav: single-open accordion over a scrollable link list. */
export default function MobileMenu(props: MobileMenuProps): JSX.Element {
	const [open, setOpen] = createSignal(false);
	const [expanded, setExpanded] = createSignal<number | null>(null);
	const close = () => setOpen(false);
	let panel!: HTMLDivElement;

	// The collapsed panel still has focusable links inside it, so take it out of
	// the tab order rather than relying on the height clip alone.
	createEffect(() => {
		panel.inert = !open();
	});

	// Lock the page behind the panel. `documentElement` keeps the scroll
	// position, which `body.style.position = 'fixed'` did not.
	createEffect(() => {
		if (!open()) return;
		const root = document.documentElement;
		const previous = root.style.overflow;
		root.style.overflow = 'hidden';
		onCleanup(() => {
			root.style.overflow = previous;
		});
	});

	// onMount, not render scope: the island is server-rendered too.
	onMount(() => {
		const onResize = () => {
			if (window.innerWidth >= 768) setOpen(false);
		};
		window.addEventListener('resize', onResize);
		onCleanup(() => window.removeEventListener('resize', onResize));
	});

	return (
		<div>
			<button
				type="button"
				aria-expanded={open()}
				aria-label="Menu"
				onClick={() => setOpen(!open())}
				class="relative z-20 flex size-12 cursor-pointer items-center justify-center rounded-full bg-tertiary text-white"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="size-8 transition-transform"
					classList={{ 'rotate-45': open() }}
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					aria-hidden="true"
				>
					<Show when={!open()}>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1"
							d="M4 9h16M4 15h16"
						/>
					</Show>
					<Show when={open()}>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1"
							d="M12 4v16M4 12h16"
						/>
					</Show>
				</svg>
			</button>
			{/* Height collapse, matching the duration/easing Alpine's x-collapse used.
			    The inner column keeps its full h-dvh so the panel unrolls over static
			    content instead of the text sliding down with the edge. */}
			<div
				class="fixed top-0 right-0 z-10 w-full overflow-hidden bg-tertiary transition-[height] duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none"
				style={{ height: open() ? '100dvh' : '0px' }}
				aria-hidden={!open()}
				ref={panel}
			>
				<div class="flex h-dvh flex-col px-6 pt-20 pb-6 text-white">
					<div class="flex grow flex-col space-y-4 overflow-y-auto overscroll-contain text-2xl [&_a]:block">
						<For each={props.items}>
							{(item, i) => (
								<div>
									<Show
										when={item.children.length > 0}
										fallback={
											<a href={item.href || '#'} onClick={close}>
												{item.title}
											</a>
										}
									>
										<button
											type="button"
											aria-expanded={expanded() === i()}
											onClick={() =>
												setExpanded((prev) => (prev === i() ? null : i()))
											}
											class="flex w-full cursor-pointer items-center justify-between gap-2 text-left"
										>
											{item.title}
											<Chevron
												class={`size-5 shrink-0 transition-transform ${expanded() === i() ? 'rotate-180' : ''}`}
											/>
										</button>
										{/* 0fr -> 1fr animates to auto height without measuring. */}
										<div
											class="grid transition-[grid-template-rows] duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none"
											style={{
												'grid-template-rows':
													expanded() === i() ? '1fr' : '0fr',
											}}
										>
											{/* min-h-0 stops the padding from flooring the 0fr track. */}
											<div class="min-h-0 space-y-3 overflow-hidden pt-3 pl-4 text-lg text-white/90">
												{/* Only surface the group's own page when no child already links to it. */}
												<Show
													when={
														item.href &&
														!item.children.some((c) => c.href === item.href)
													}
												>
													<a href={item.href} onClick={close}>
														{item.title}
													</a>
												</Show>
												<For each={item.children}>
													{(child) => (
														<a href={child.href} onClick={close}>
															{child.title}
														</a>
													)}
												</For>
											</div>
										</div>
									</Show>
								</div>
							)}
						</For>
					</div>
					<div class="shrink-0 pt-6 text-2xl text-white/50">
						Passie voor auto's
					</div>
				</div>
			</div>
		</div>
	);
}
