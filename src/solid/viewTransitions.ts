/**
 * Reproduces the `view-transition-name` Astro's `transition:name` directive
 * emits for a given name.
 *
 * The desktop voorraad cards and the detail-page gallery both use the Astro
 * directive, but the mobile cards live inside a Solid island where directives
 * are not available. Matching Astro's output here keeps the shared-element
 * flight working at every breakpoint.
 *
 * Astro replaces characters that are invalid in a CSS custom-ident and prefixes
 * an underscore when the result would start with a digit or hyphen — a Sanity
 * `_key` such as "6216a93de4a2" becomes "_6216a93de4a2".
 */
export function astroTransitionName(key?: string | null): string | undefined {
	if (!key) return undefined;
	const safe = key.replace(/[^a-zA-Z0-9_-]/g, '_');
	return /^[0-9-]/.test(safe) ? `_${safe}` : safe;
}
