import { defineType, defineField } from 'sanity'

import { orderRankField } from '@sanity/orderable-document-list'

export default defineType({
  name: 'ghg',
  title: 'Green House Gas Accounting',
  type: 'document',
  preview: {
    select: {
      title: 'name'
    }
  },
  fields: [
    orderRankField({ type: 'climate' }),

    defineField({
      name: 'name',
      title: 'Section Name',
      type: 'string',
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
        { type: 'listItem' },
        { type: 'accordion' }
      ]
    })
  ]
})
