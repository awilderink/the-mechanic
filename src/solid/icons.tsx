import type { JSX } from 'solid-js';

type IconProps = { class?: string };

/** Mirrors the matching entries in components/Icon.astro. */
export function ArrowLeft(props: IconProps): JSX.Element {
	return (
		<svg class={props.class} viewBox="0 0 40 40" fill="none" aria-hidden="true">
			<rect
				x="39.5"
				y="39.5"
				width="39"
				height="39"
				rx="19.5"
				transform="rotate(-180 39.5 39.5)"
				stroke="currentColor"
			/>
			<path
				d="M26 19.9999L14 19.9999"
				stroke="currentColor"
				stroke-linecap="round"
			/>
			<path
				d="M18 16L14 20L18 24"
				stroke="currentColor"
				stroke-linecap="round"
			/>
		</svg>
	);
}

export function ArrowRight(props: IconProps): JSX.Element {
	return (
		<svg class={props.class} viewBox="0 0 40 40" fill="none" aria-hidden="true">
			<rect
				x="0.5"
				y="0.5"
				width="39"
				height="39"
				rx="19.5"
				stroke="currentColor"
			/>
			<path
				d="M14 20.0001L26 20.0001"
				stroke="currentColor"
				stroke-linecap="round"
			/>
			<path
				d="M22 24L26 20L22 16"
				stroke="currentColor"
				stroke-linecap="round"
			/>
		</svg>
	);
}

export function Chevron(props: IconProps): JSX.Element {
	return (
		<svg
			class={props.class}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			aria-hidden="true"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
		</svg>
	);
}
