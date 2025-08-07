import { defineField, defineType } from 'sanity';

export const merk = defineType({
	name: 'merk',
	title: 'Merk',
	type: 'document',
	fields: [
		defineField({
			name: 'naam',
			title: 'Naam',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'logo',
			title: 'Logo',
			type: 'image',
			options: {
				hotspot: true,
			},
		}),
	],
	preview: {
		select: {
			title: 'naam',
			media: 'logo',
		},
	},
});
