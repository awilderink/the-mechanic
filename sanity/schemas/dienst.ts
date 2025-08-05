import { defineType } from 'sanity'

export default defineType({
  name: 'dienst',
  title: 'Dienst',
  type: 'document',
  fields: [
    {
      name: 'titel',
      title: 'Titel',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'titel',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'icoon',
      title: 'Icoon',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'opsomming',
      title: 'Opsomming',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'punt',
              title: 'Punt',
              type: 'string'
            }
          ]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'titel',
      media: 'icoon'
    }
  }
})