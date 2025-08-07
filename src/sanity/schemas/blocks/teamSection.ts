import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'teamSection',
	title: 'Team Section',
	type: 'object',
	fields: [
		defineField({
			name: 'title',
			title: 'Section Title',
			type: 'string',
		}),
		defineField({
			name: 'members',
			title: 'Team Members',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{ type: 'teamMember' }],
				},
			],
		}),
	],
	preview: {
		select: {
			title: 'title',
		},
		prepare({ title }) {
			return {
				title: `Team Section: ${title || 'Untitled'}`,
			};
		},
	},
});