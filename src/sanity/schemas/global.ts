import { defineField, defineType } from 'sanity';

export const global = defineType({
	name: 'global',
	title: 'Global Settings',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Site Title',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'description',
			title: 'Site Description',
			type: 'text',
		}),
	],
	preview: {
		select: {
			title: 'title',
			subtitle: 'description',
		},
	},
});
