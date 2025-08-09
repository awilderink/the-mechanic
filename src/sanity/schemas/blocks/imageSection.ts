import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'imageSection',
	title: 'Image Section',
	type: 'object',
	fields: [
		defineField({
			name: 'images',
			title: 'Images',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						defineField({
							name: 'image',
							title: 'Image',
							type: 'image',
							options: { hotspot: true },
						}),
						defineField({
							name: 'alt',
							title: 'Alt Text',
							type: 'string',
						}),
					],
				},
			],
		}),
	],
	preview: {
		select: {
			images: 'images',
		},
		prepare({ images }) {
			const imageCount = images?.length || 0;
			const firstImage = images?.[0]?.image;
			return {
				title: 'Image Section',
				subtitle: `${imageCount} image${imageCount !== 1 ? 's' : ''}`,
				media: firstImage,
			};
		},
	},
});