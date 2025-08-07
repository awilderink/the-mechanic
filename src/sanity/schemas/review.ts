import { defineField, defineType } from 'sanity';

export const review = defineType({
	name: 'review',
	title: 'Review',
	type: 'document',
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
		defineField({
			name: 'waardering',
			title: 'Waardering',
			type: 'number',
			validation: (Rule) => Rule.required().min(1).max(5),
		}),
	],
	preview: {
		select: {
			title: 'naam',
			subtitle: 'body',
			rating: 'waardering',
		},
		prepare(selection) {
			const { title, subtitle, rating } = selection;
			return {
				title,
				subtitle: `${rating}/5 - ${subtitle?.slice(0, 50)}...`,
			};
		},
	},
});
