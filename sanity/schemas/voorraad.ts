import { defineType } from 'sanity'

export default defineType({
  name: 'voorraad',
  title: 'Voorraad',
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
      name: 'merk',
      title: 'Merk',
      type: 'reference',
      to: [{ type: 'merk' }]
    },
    {
      name: 'prijs',
      title: 'Prijs',
      type: 'number'
    },
    {
      name: 'bouwjaar',
      title: 'Bouwjaar',
      type: 'number'
    },
    {
      name: 'kilometerstand',
      title: 'Kilometerstand',
      type: 'number'
    },
    {
      name: 'brandstof',
      title: 'Brandstof',
      type: 'string',
      options: {
        list: [
          { title: 'Benzine', value: 'benzine' },
          { title: 'Diesel', value: 'diesel' },
          { title: 'Elektrisch', value: 'elektrisch' },
          { title: 'Hybride', value: 'hybride' }
        ]
      }
    },
    {
      name: 'transmissie',
      title: 'Transmissie',
      type: 'string',
      options: {
        list: [
          { title: 'Handgeschakeld', value: 'handgeschakeld' },
          { title: 'Automaat', value: 'automaat' }
        ]
      }
    },
    {
      name: 'verkocht',
      title: 'Verkocht',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'uitgelicht',
      title: 'Uitgelicht',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'fotos',
      title: 'Foto\'s',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true
          }
        }
      ]
    },
    {
      name: 'beschrijving',
      title: 'Beschrijving',
      type: 'blockContent'
    },
    {
      name: 'specificaties',
      title: 'Specificaties',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string'
            },
            {
              name: 'waarde',
              title: 'Waarde',
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
      subtitle: 'merk.naam',
      media: 'fotos.0'
    },
    prepare(selection) {
      const { title, subtitle, media } = selection
      return {
        title,
        subtitle: subtitle || 'Geen merk',
        media
      }
    }
  }
})