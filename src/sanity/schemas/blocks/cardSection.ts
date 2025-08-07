import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'cardSection',
	title: 'Card Section',
	type: 'object',
	fields: [
		defineField({
			name: 'title',
			title: 'Section Title',
			type: 'string',
		}),
		defineField({
			name: 'cards',
			title: 'Cards',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						defineField({
							name: 'icoon',
							title: 'Icon',
							type: 'image',
							options: { hotspot: true },
						}),
						defineField({
							name: 'titel',
							title: 'Title',
							type: 'string',
						}),
						defineField({
							name: 'body',
							title: 'Body Content',
							type: 'blockContent',
						}),
						defineField({
							name: 'link',
							title: 'Link URL',
							type: 'string',
							description: 'URL for the arrow link (optional)',
						}),
					],
					preview: {
						select: {
							title: 'titel',
							media: 'icoon',
						},
					},
				},
			],
		}),
	],
	preview: {
		select: {
			title: 'title',
			cards: 'cards',
		},
		prepare({ title, cards = [] }) {
			return {
				title: `Card Section: ${title || 'Untitled'}`,
				subtitle: `${cards.length} card${cards.length === 1 ? '' : 's'}`,
			};
		},
	},
});
