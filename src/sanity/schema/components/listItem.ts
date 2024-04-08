import { defineType, defineField } from 'sanity'

export const listItem = defineType({
  title: 'List Item',
  name: 'listItem',
  type: 'object',
  preview: {
    select: {
      title: 'title.en'
    }
  },
  fields: [
    defineField({
      title: 'Component Title',
      name: 'title',
      type: 'localeString'
    }),
    defineField({
      title: 'Component Items',
      name: 'items',
      type: 'array',
      of: [
        {
          type: 'object',
          preview: { select: { title: 'label.en' } },
          fields: [
            defineField({
              title: 'Label',
              name: 'label',
              type: 'localeString'
            }),
            defineField({
              title: 'Link',
              name: 'link',
              type: 'url'
            })
          ]
        }
      ]
    })
  ]
})
