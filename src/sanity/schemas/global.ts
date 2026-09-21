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
			name: 'defaultSeo',
			title: 'SEO & GEO standaardwaarden',
			description:
				'Wordt gebruikt op elke pagina die zelf niets ingevuld heeft.',
			type: 'seo',
		}),
		defineField({
			name: 'voorraadSeo',
			title: 'SEO & GEO - voorraad overzicht',
			description: 'De /voorraad overzichtspagina heeft geen eigen document.',
			type: 'seo',
		}),
		defineField({
			name: 'voorraadHero',
			title: 'Hoofdbeeld - voorraad overzicht',
			description: 'Beeld bovenaan de /voorraad pagina.',
			type: 'image',
			options: { hotspot: true },
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
