import { defineField, defineType } from 'sanity';

export const page = defineType({
	name: 'page',
	title: 'Page',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'seo',
			title: 'SEO',
			type: 'object',
			fields: [
				defineField({
					name: 'metaTitle',
					title: 'Meta Title',
					type: 'string',
				}),
				defineField({
					name: 'metaDescription',
					title: 'Meta Description',
					type: 'text',
				}),
			],
		}),
		defineField({
			name: 'blocks',
			title: 'Page Blocks',
			type: 'array',
			of: [
				{ type: 'hero' },
				{ type: 'textContent' },
				{ type: 'imageSection' },
				{ type: 'teamSection' },
				{ type: 'contentSection' },
				{ type: 'cardSection' },
				{ type: 'reviewsSection' },
				{ type: 'featuredVoorraadSection' },
			]
		}),
	],
	preview: {
		select: {
			title: 'title',
			slug: 'slug.current',
		},
		prepare({ title, slug }) {
			return {
				title,
				subtitle: slug ? `/${slug}` : 'No slug',
			};
		},
	},
});
