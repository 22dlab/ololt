import { defineType, defineField } from 'sanity'

export const statCard = defineType({
  title: 'Stat Card',
  name: 'statCard',
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
          preview: { select: { title: 'value.en', subtitle: 'label.en' } },
          fields: [
            defineField({
              title: 'Value',
              name: 'value',
              type: 'localeString'
            }),
            defineField({
              title: 'Label',
              name: 'label',
              type: 'localeString'
            })
          ]
        }
      ]
    })
  ]
})
