import { defineField, defineType } from 'sanity';

export const home = defineType({
	name: 'home',
	title: 'Homepage',
	type: 'document',
	fields: [
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
			]
		}),
	],
	preview: {
		select: {
			blocks: 'blocks',
		},
		prepare({ blocks }) {
			const heroBlock = blocks?.find((block: any) => block._type === 'hero');
			return {
				title: 'Homepage',
				subtitle: heroBlock?.title || 'No hero title',
			};
		},
	},
});
