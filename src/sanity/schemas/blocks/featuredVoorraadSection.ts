import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'featuredVoorraadSection',
	title: 'Featured Inventory Section',
	type: 'object',
	fields: [
		defineField({
			name: 'title',
			title: 'Section Title',
			type: 'string',
		}),
	],
	preview: {
		select: {
			title: 'title',
		},
		prepare({ title }) {
			return {
				title: `Featured Inventory: ${title || 'Untitled'}`,
			};
		},
	},
});