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
			title: 'SEO & GEO',
			type: 'seo',
		}),
		defineField({
			name: 'blocks',
			title: 'Page Blocks',
			type: 'array',
			of: [
				{ type: 'heroSection' },
				{ type: 'heroImageSection' },
				{ type: 'textContent' },
				{ type: 'imageSection' },
				{ type: 'teamSection' },
				{ type: 'contentSection' },
				{ type: 'cardSection' },
				{ type: 'reviewsSection' },
				{ type: 'featuredVoorraadSection' },
				{ type: 'instagramSection' },
			],
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
