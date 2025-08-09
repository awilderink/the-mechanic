import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'reviewsSection',
	title: 'Reviews Section',
	type: 'object',
	fields: [
		defineField({
			name: 'image',
			title: 'Image',
			type: 'image',
		}),
		defineField({
			name: 'reviews',
			title: 'Reviews',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						defineField({
							name: 'naam',
							title: 'Naam',
							type: 'string',
							validation: (Rule) => Rule.required(),
						}),
						defineField({
							name: 'body',
							title: 'Review Text',
							type: 'text',
							validation: (Rule) => Rule.required(),
						}),
					],
					preview: {
						select: {
							title: 'naam',
							subtitle: 'body',
							rating: 'waardering',
						},
						prepare(selection) {
							const { title, subtitle } = selection;
							return {
								title,
								subtitle: `${subtitle?.slice(0, 50)}...`,
							};
						},
					},
				},
			],
		}),
	],
	preview: {
		select: {
			title: 'title',
			reviews: 'reviews',
		},
		prepare({ title, reviews = [] }) {
			return {
				title: `Reviews: ${title || 'Untitled'}`,
				subtitle: `${reviews.length} review${reviews.length === 1 ? '' : 's'}`,
			};
		},
	},
});
