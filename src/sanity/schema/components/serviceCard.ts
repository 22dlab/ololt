import { defineType, defineField } from 'sanity'

export const serviceCard = defineType({
  title: 'Service Card',
  name: 'serviceCard',
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
          preview: { select: { title: 'label.en', media: 'icon' } },
          fields: [
            defineField({
              title: 'Icon',
              name: 'icon',
              type: 'image'
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
