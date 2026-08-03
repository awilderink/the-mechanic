import { createSignal, For, type JSX, Show } from 'solid-js';
import { Chevron } from './icons';

export type AccordionEntry = {
	title: string;
	/** Pre-rendered HTML body, straight from Sanity. */
	html: string;
};

export type AccordionProps = {
	items: AccordionEntry[];
	/** Open the first entry on mount. */
	openFirst?: boolean;
	class?: string;
};

/** Single-open accordion. */
export default function Accordion(props: AccordionProps): JSX.Element {
	const [open, setOpen] = createSignal(props.openFirst ? 0 : -1);

	return (
		<div
			class={`relative mx-auto w-full divide-y divide-gray-200 overflow-hidden border-gray-200 border-t border-b bg-white font-normal text-sm ${props.class ?? ''}`}
		>
			<For each={props.items}>
				{(item, i) => (
					<div class="group cursor-pointer">
						<button
							type="button"
							onClick={() => setOpen((prev) => (prev === i() ? -1 : i()))}
							aria-expanded={open() === i()}
							class="flex w-full select-none items-center justify-between p-4 text-left group-hover:underline"
						>
							<span>{item.title}</span>
							<Chevron
								class={`h-4 w-4 duration-200 ease-out ${open() === i() ? 'rotate-180' : ''}`}
							/>
						</button>
						<Show when={open() === i()}>
							<div class="px-8 pb-8" innerHTML={item.html} />
						</Show>
					</div>
				)}
			</For>
		</div>
	);
}
