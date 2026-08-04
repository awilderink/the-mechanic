import { defineField, defineType } from 'sanity';

// Reusable per-document SEO + GEO settings. Anything left empty falls back to
// the defaults in Global Settings (see global.defaultSeo).
export const seo = defineType({
	name: 'seo',
	title: 'SEO & GEO',
	type: 'object',
	options: { collapsible: true, collapsed: true },
	fieldsets: [
		{
			name: 'geo',
			title: 'GEO (locatie & AI-zoekmachines)',
			options: { collapsible: true, collapsed: true },
		},
	],
	fields: [
		defineField({
			name: 'metaTitle',
			title: 'Meta Title',
			type: 'string',
			description: 'Titel in Google en de browsertab. ~60 tekens.',
			validation: (Rule) => Rule.max(70).warning('Langer dan 70 tekens wordt afgekapt.'),
		}),
		defineField({
			name: 'metaDescription',
			title: 'Meta Description',
			type: 'text',
			rows: 3,
			description: 'Samenvatting in de zoekresultaten. ~155 tekens.',
			validation: (Rule) => Rule.max(180).warning('Langer dan 180 tekens wordt afgekapt.'),
		}),
		defineField({
			name: 'ogImage',
			title: 'Social share afbeelding',
			type: 'image',
			description: 'Afbeelding voor Facebook, LinkedIn, WhatsApp en X. 1200x630.',
		}),
		defineField({
			name: 'canonicalUrl',
			title: 'Canonical URL',
			type: 'url',
			description: 'Alleen invullen als deze pagina moet verwijzen naar een andere URL.',
		}),
		defineField({
			name: 'noIndex',
			title: 'Uitsluiten van zoekmachines',
			type: 'boolean',
			initialValue: false,
		}),
		defineField({
			name: 'aiSummary',
			title: 'AI-samenvatting',
			type: 'text',
			rows: 3,
			fieldset: 'geo',
			description:
				'Kort, feitelijk antwoord dat AI-zoekmachines (ChatGPT, AI Overviews, Perplexity) kunnen citeren.',
		}),
		defineField({
			name: 'geoPlacename',
			title: 'Plaatsnaam',
			type: 'string',
			fieldset: 'geo',
			description: 'Bijv. "Voorburg".',
		}),
		defineField({
			name: 'geoRegion',
			title: 'Regiocode',
			type: 'string',
			fieldset: 'geo',
			description: 'ISO-code, bijv. "NL-ZH".',
		}),
		defineField({
			name: 'geoPosition',
			title: 'Coördinaten',
			type: 'geopoint',
			fieldset: 'geo',
		}),
		defineField({
			name: 'serviceAreas',
			title: 'Verzorgingsgebied',
			type: 'array',
			of: [{ type: 'string' }],
			options: { layout: 'tags' },
			fieldset: 'geo',
			description: 'Plaatsen/regio\'s die je bedient, bijv. "Voorburg", "Den Haag".',
		}),
	],
});
