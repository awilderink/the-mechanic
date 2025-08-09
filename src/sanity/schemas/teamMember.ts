import { defineField, defineType } from 'sanity';

export const teamMember = defineType({
	name: 'teamMember',
	title: 'Team Member',
	type: 'document',
	fields: [
		defineField({
			name: 'naam',
			title: 'Naam',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'functie',
			title: 'Functie',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'afbeelding',
			title: 'Afbeelding',
			type: 'image',
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: 'bio',
			title: 'Bio',
			type: 'text',
		}),
	],
	preview: {
		select: {
			title: 'naam',
			subtitle: 'functie',
			media: 'foto',
		},
	},
});
