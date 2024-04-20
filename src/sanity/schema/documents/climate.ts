import { defineType, defineField } from 'sanity'

import { orderRankField } from '@sanity/orderable-document-list'

export default defineType({
  name: 'climate',
  title: 'Climate Change',
  type: 'document',
  preview: {
    select: {
      title: 'name.en'
    }
  },
  fields: [
    orderRankField({ type: 'climate' }),

    defineField({
      name: 'name',
      title: 'Section Name',
      type: 'localeString',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'components',
      title: 'Components',
      type: 'array',
      of: [
        { type: 'textBlock' },
        { type: 'thumbnail' },
        { type: 'photo' },
        { type: 'logo' },
        { type: 'iconCard' },
        { type: 'serviceCard' },
        { type: 'statCard' },
        { type: 'accordion' },
        { type: 'fileDownlaod' },
        { type: 'cta' }
      ]
    })
  ]
})
