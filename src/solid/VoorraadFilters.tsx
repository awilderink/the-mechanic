import { navigate } from 'astro:transitions/client';
import { For, type JSX } from 'solid-js';

export type FilterOption = { value: string; label: string };

export type VoorraadFiltersProps = {
	merken: FilterOption[];
	/** Currently applied `?merk=`, empty when unfiltered. */
	merk: string;
	/** Currently applied `?verkocht=`, empty when unfiltered. */
	verkocht: string;
};

/** Merk/verkocht dropdowns that push the filter state into the URL. */
export default function VoorraadFilters(
	props: VoorraadFiltersProps,
): JSX.Element {
	let merkEl!: HTMLSelectElement;
	let verkochtEl!: HTMLSelectElement;

	const apply = () => {
		const params = new URLSearchParams();
		if (merkEl.value) params.set('merk', merkEl.value);
		if (verkochtEl.value) params.set('verkocht', verkochtEl.value);
		const query = params.toString();
		const url = query ? `/voorraad?${query}` : '/voorraad';

		// The client router is mounted in BaseLayout, but a hard navigation is a
		// perfectly good fallback if it is ever unavailable.
		try {
			navigate(url);
		} catch {
			window.location.assign(url);
		}
	};

	return (
		<div class="mb-8 flex flex-col gap-4 md:flex-row">
			<select ref={merkEl} name="merk" class="px-12" onChange={apply}>
				<option value="">Alle merken</option>
				<For each={props.merken}>
					{(option) => (
						<option value={option.value} selected={props.merk === option.value}>
							{option.label}
						</option>
					)}
				</For>
			</select>
			<select ref={verkochtEl} name="verkocht" class="px-12" onChange={apply}>
				<option value="false" selected={props.verkocht === 'false'}>
					Beschikbaar
				</option>
				<option value="true" selected={props.verkocht === 'true'}>
					Verkocht
				</option>
			</select>
		</div>
	);
}
