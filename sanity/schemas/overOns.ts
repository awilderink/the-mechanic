import { defineType } from 'sanity';

export const overOns = defineType({
	name: 'overOns',
	title: 'Over Ons',
	type: 'document',
	fields: [
		{
			name: 'titel',
			title: 'Titel',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'hero_afbeelding',
			title: 'Hero Afbeelding',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			name: 'verhaal_tekst',
			title: 'Verhaal Tekst',
			type: 'blockContent',
		},
		{
			name: 'tweede_afbeelding',
			title: 'Tweede Afbeelding',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			name: 'team',
			title: 'Team',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{ type: 'teamMember' }],
				},
			],
		},
	],
	preview: {
		select: {
			title: 'titel',
			media: 'hero_afbeelding',
		},
	},
});
