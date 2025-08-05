import { defineType } from 'sanity';

export const teamMember = defineType({
	name: 'teamMember',
	title: 'Team Member',
	type: 'document',
	fields: [
		{
			name: 'naam',
			title: 'Naam',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'functie',
			title: 'Functie',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'foto',
			title: 'Foto',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			name: 'beschrijving',
			title: 'Beschrijving',
			type: 'blockContent',
		},
	],
	preview: {
		select: {
			title: 'naam',
			subtitle: 'functie',
			media: 'foto',
		},
	},
});
