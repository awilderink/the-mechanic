import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'hero',
	title: 'Hero Section',
	type: 'object',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
		}),
		defineField({
			name: 'subtitle',
			title: 'Subtitle',
			type: 'string',
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'text',
		}),
		defineField({
			name: 'image',
			title: 'Background Image',
			type: 'image',
			options: { hotspot: true },
		}),
		defineField({
			name: 'video',
			title: 'Background Video (Optional)',
			type: 'file',
			options: {
				accept: 'video/*',
			},
		}),
		defineField({
			name: 'buttons',
			title: 'Buttons',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						defineField({
							name: 'text',
							title: 'Button Text',
							type: 'string',
						}),
						defineField({
							name: 'url',
							title: 'URL',
							type: 'url',
						}),
						defineField({
							name: 'style',
							title: 'Style',
							type: 'string',
							options: {
								list: [
									{ title: 'Primary', value: 'primary' },
									{ title: 'Secondary', value: 'secondary' },
									{ title: 'Tertiary', value: 'tertiary' },
									{ title: 'Outline', value: 'outline' },
								],
							},
						}),
					],
				},
			],
		}),
	],
	preview: {
		select: {
			title: 'title',
			media: 'image',
		},
		prepare({ title, media }) {
			return {
				title: `Hero: ${title || 'Untitled'}`,
				media,
			};
		},
	},
});