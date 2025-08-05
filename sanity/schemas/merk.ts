import { defineType } from 'sanity'

export default defineType({
  name: 'merk',
  title: 'Merk',
  type: 'document',
  fields: [
    {
      name: 'naam',
      title: 'Naam',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ],
  preview: {
    select: {
      title: 'naam',
      media: 'logo'
    }
  }
})