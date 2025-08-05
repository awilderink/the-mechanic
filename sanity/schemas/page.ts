import { defineType } from 'sanity'

export const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string'
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text'
        }
      ]
    },
    {
      name: 'blocks',
      title: 'Page Blocks',
      type: 'array',
      of: [
        {
          name: 'hero',
          title: 'Hero Section',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string'
            },
            {
              name: 'subtitle',
              title: 'Subtitle',
              type: 'text'
            },
            {
              name: 'image',
              title: 'Background Image',
              type: 'image',
              options: { hotspot: true }
            },
            {
              name: 'buttons',
              title: 'Buttons',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'text',
                      title: 'Button Text',
                      type: 'string'
                    },
                    {
                      name: 'url',
                      title: 'URL',
                      type: 'url'
                    },
                    {
                      name: 'style',
                      title: 'Style',
                      type: 'string',
                      options: {
                        list: [
                          { title: 'Primary', value: 'primary' },
                          { title: 'Secondary', value: 'secondary' }
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ],
          preview: {
            select: {
              title: 'title',
              media: 'image'
            },
            prepare({ title, media }) {
              return {
                title: `Hero: ${title || 'Untitled'}`,
                media
              }
            }
          }
        },
        {
          name: 'textContent',
          title: 'Text Content',
          type: 'object',
          fields: [
            {
              name: 'content',
              title: 'Content',
              type: 'blockContent'
            }
          ],
          preview: {
            select: {
              content: 'content'
            },
            prepare({ content }) {
              const block = (content || []).find((block: any) => block._type === 'block')
              return {
                title: 'Text Content',
                subtitle: block
                  ? block.children
                      ?.filter((child: any) => child._type === 'span')
                      ?.map((span: any) => span.text)
                      ?.join('')
                      ?.substring(0, 100) + '...'
                  : 'No content'
              }
            }
          }
        },
        {
          name: 'imageSection',
          title: 'Image Section',
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true }
            },
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string'
            }
          ],
          preview: {
            select: {
              media: 'image',
              alt: 'alt'
            },
            prepare({ media, alt }) {
              return {
                title: 'Image Section',
                subtitle: alt || 'No alt text',
                media
              }
            }
          }
        },
        {
          name: 'teamSection',
          title: 'Team Section',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Section Title',
              type: 'string'
            },
            {
              name: 'members',
              title: 'Team Members',
              type: 'array',
              of: [
                {
                  type: 'reference',
                  to: [{ type: 'teamMember' }]
                }
              ]
            }
          ],
          preview: {
            select: {
              title: 'title'
            },
            prepare({ title }) {
              return {
                title: `Team Section: ${title || 'Untitled'}`
              }
            }
          }
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current'
    },
    prepare({ title, slug }) {
      return {
        title,
        subtitle: slug ? `/${slug}` : 'No slug'
      }
    }
  }
})