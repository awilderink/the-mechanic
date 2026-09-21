import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'instagramSection',
	title: 'Instagram',
	type: 'object',
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
			name: 'posts',
			title: 'Instagram-berichten',
			description:
				'Plak de link van een bericht of reel, bijv. https://www.instagram.com/reel/ABC123/. Berichten worden in deze volgorde getoond.',
			type: 'array',
			of: [
				{
					type: 'url',
					validation: (Rule) =>
						Rule.uri({ scheme: ['https'] }).custom((value?: string) =>
							!value ||
							/^https:\/\/(www\.)?instagram\.com\/(p|reel|tv)\/[\w-]+\/?/.test(
								value,
							)
								? true
								: 'Gebruik een link naar een Instagram-bericht of -reel.',
						),
				},
			],
		}),
	],
	preview: {
		select: {
			title: 'title',
			posts: 'posts',
		},
		prepare({ title, posts = [] }) {
			return {
				title: `Instagram: ${title || 'Volg ons'}`,
				subtitle: `${posts.length} bericht${posts.length === 1 ? '' : 'en'}`,
			};
		},
	},
});
