import { defineField, defineType } from 'sanity';

export const global = defineType({
	name: 'global',
	title: 'Global Settings',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'text',
		}),
		defineField({
			name: 'mainMenu',
			title: 'Main Menu',
			type: 'array',
			of: [
				{
					type: 'object',
					name: 'menuItem',
					title: 'Menu Item',
					fields: [
						defineField({
							name: 'title',
							title: 'Title',
							type: 'string',
							validation: (Rule) => Rule.required(),
						}),
						defineField({
							name: 'slug',
							title: 'URL/Slug',
							type: 'slug',
							description:
								'Enter the URL path (e.g., "/voorraad", "/about", "/contact") - optional for parent items with children',
						}),
						defineField({
							name: 'children',
							title: 'Submenu Items',
							type: 'array',
							of: [
								{
									type: 'object',
									name: 'subMenuItem',
									title: 'Submenu Item',
									fields: [
										defineField({
											name: 'title',
											title: 'Title',
											type: 'string',
											validation: (Rule) => Rule.required(),
										}),
										defineField({
											name: 'slug',
											title: 'URL/Slug',
											type: 'slug',
											description:
												'Enter the URL path (e.g., "/voorraad/specific-car", "/about")',
											validation: (Rule) => Rule.required(),
										}),
									],
									preview: {
										select: {
											title: 'title',
											slug: 'slug',
										},
										prepare({ title, slug }) {
											return {
												title: title,
												subtitle: slug
													? `→ ${slug.current}`
													: 'No URL specified',
											};
										},
									},
								},
							],
							description: 'Add submenu items',
						}),
					],
					preview: {
						select: {
							title: 'title',
							slug: 'slug',
							childrenCount: 'children.length',
						},
						prepare({ title, slug, childrenCount }) {
							const hasChildren = childrenCount > 0;
							return {
								title: title,
								subtitle: hasChildren
									? `${childrenCount} submenu item${childrenCount > 1 ? 's' : ''}`
									: slug
										? `→ ${slug.current}`
										: 'No URL specified',
							};
						},
					},
				},
			],
		}),
	],
});
