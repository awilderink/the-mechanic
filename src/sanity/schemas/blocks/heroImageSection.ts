import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'heroImageSection',
	title: 'Hero Image Section',
	type: 'object',
	fields: [
		defineField({
			name: 'image',
			title: 'Image',
			type: 'image',
			options: { hotspot: true },
		}),
		defineField({
			name: 'alt',
			title: 'Alt Text',
			type: 'string',
		}),
	],
	preview: {
		select: {
			media: 'image',
			alt: 'alt',
		},
		prepare({ media, alt }) {
			return {
				title: 'Hero Image Section',
				subtitle: alt || 'No alt text',
				media,
			};
		},
	},
});