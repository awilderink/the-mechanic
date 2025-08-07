import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'textContent',
	title: 'Text Content',
	type: 'object',
	fields: [
		defineField({
			name: 'content',
			title: 'Content',
			type: 'blockContent',
		}),
	],
	preview: {
		select: {
			content: 'content',
		},
		prepare({ content }) {
			const block = (content || []).find(
				(block: any) => block._type === 'block',
			);
			return {
				title: 'Text Content',
				subtitle: block
					? `${block.children
							?.filter((child: any) => child._type === 'span')
							?.map((span: any) => span.text)
							?.join('')
							?.substring(0, 100)}...`
					: 'No content',
			};
		},
	},
});