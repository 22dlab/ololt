import { defineType, defineField } from 'sanity'

export const listImage = defineType({
  title: 'List Image',
  name: 'listImage',
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
          preview: { select: { title: 'label.en', media: 'photo' } },
          fields: [
            defineField({
              title: 'Label',
              name: 'label',
              type: 'localeString'
            }),
            defineField({
              title: 'Photo',
              name: 'photo',
              type: 'image'
            })
          ]
        }
      ]
    })
  ]
})
