import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'reviewsSection',
	title: 'Reviews Section',
	type: 'object',
	fields: [
		defineField({
			name: 'showReviews',
			title: 'Show Reviews',
			type: 'boolean',
			initialValue: true,
		}),
	],
	preview: {
		prepare() {
			return {
				title: 'Reviews Section',
			};
		},
	},
});