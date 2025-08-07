import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'contentSection',
	title: 'Content Section',
	type: 'object',
	fields: [
		defineField({
			name: 'sectionTitle',
			title: 'Section Title',
			type: 'string',
		}),
		defineField({
			name: 'mainTitle',
			title: 'Main Title',
			type: 'text',
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'text',
		}),
		defineField({
			name: 'buttonText',
			title: 'Button Text',
			type: 'string',
		}),
		defineField({
			name: 'buttonUrl',
			title: 'Button URL',
			type: 'string',
		}),
	],
	preview: {
		select: {
			title: 'sectionTitle',
			subtitle: 'mainTitle',
		},
		prepare({ title, subtitle }) {
			return {
				title: `Content Section: ${title || 'Untitled'}`,
				subtitle: subtitle || 'No main title',
			};
		},
	},
});