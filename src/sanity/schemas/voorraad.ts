import { defineField, defineType } from 'sanity';

export const voorraad = defineType({
	name: 'voorraad',
	title: 'Voorraad',
	type: 'document',
	fields: [
		defineField({
			name: 'titel',
			title: 'Titel',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'merk',
			title: 'Merk',
			type: 'reference',
			to: [{ type: 'merk' }],
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'titel',
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'prijs',
			title: 'Prijs',
			type: 'number',
		}),
		defineField({
			name: 'bouwjaar',
			title: 'Bouwjaar',
			type: 'number',
		}),
		defineField({
			name: 'kilometerstand',
			title: 'Kilometerstand',
			type: 'number',
		}),
		defineField({
			name: 'brandstof',
			title: 'Brandstof',
			type: 'string',
			options: {
				list: [
					{ title: 'Benzine', value: 'benzine' },
					{ title: 'Diesel', value: 'diesel' },
					{ title: 'Elektrisch', value: 'elektrisch' },
					{ title: 'Hybride', value: 'hybride' },
				],
			},
		}),
		defineField({
			name: 'transmissie',
			title: 'Transmissie',
			type: 'string',
			options: {
				list: [
					{ title: 'Handgeschakeld', value: 'handgeschakeld' },
					{ title: 'Automaat', value: 'automaat' },
				],
			},
		}),
		defineField({
			name: 'verkocht',
			title: 'Verkocht',
			type: 'boolean',
			initialValue: false,
		}),
		defineField({
			name: 'uitgelicht',
			title: 'Uitgelicht',
			type: 'boolean',
			initialValue: false,
		}),
		defineField({
			name: 'fotos',
			title: "Foto's",
			type: 'array',
			of: [
				{
					type: 'image',
					options: {
						hotspot: true,
					},
				},
			],
		}),
		defineField({
			name: 'beschrijving',
			title: 'Beschrijving',
			type: 'blockContent',
		}),
		defineField({
			name: 'specificaties',
			title: 'Specificaties',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						defineField({
							name: 'label',
							title: 'Label',
							type: 'string',
						}),
						defineField({
							name: 'waarde',
							title: 'Waarde',
							type: 'string',
						}),
					],
				},
			],
		}),
	],
	preview: {
		select: {
			title: 'titel',
			subtitle: 'merk.naam',
			media: 'fotos.0',
		},
		prepare(selection) {
			const { title, subtitle, media } = selection;
			return {
				title,
				subtitle: subtitle || 'Geen merk',
				media,
			};
		},
	},
});
