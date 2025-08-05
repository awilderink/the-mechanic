import { defineType } from 'sanity';

export default defineType({
	name: 'review',
	title: 'Review',
	type: 'document',
	fields: [
		{
			name: 'naam',
			title: 'Naam',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'body',
			title: 'Review Text',
			type: 'text',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'waardering',
			title: 'Waardering',
			type: 'number',
			validation: (Rule) => Rule.required().min(1).max(5),
		},
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
