import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'instagramSection',
	title: 'Instagram',
	type: 'object',
	description:
		'Toont automatisch de nieuwste berichten van @the_mechanic.nl. Nieuwe berichten verschijnen binnen een uur.',
	fields: [
		defineField({
			name: 'title',
			title: 'Titel',
			type: 'string',
			initialValue: 'Volg ons op Instagram',
		}),
		defineField({
			name: 'intro',
			title: 'Intro',
			type: 'text',
			rows: 2,
		}),
		defineField({
			name: 'limit',
			title: 'Aantal berichten',
			type: 'number',
			initialValue: 6,
			validation: (Rule) => Rule.required().integer().min(1).max(12),
		}),
	],
	preview: {
		select: {
			title: 'title',
			limit: 'limit',
		},
		prepare({ title, limit }) {
			return {
				title: `Instagram: ${title || 'Volg ons'}`,
				subtitle: `Nieuwste ${limit ?? 6} berichten`,
			};
		},
	},
});
