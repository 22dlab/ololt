import { defineType, defineField } from 'sanity'

export const fileDownlaod = defineType({
  title: 'File Download',
  name: 'fileDownlaod',
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
              title: 'File',
              name: 'file',
              type: 'file',
              options: { accept: '.pdf' }
            }),
            defineField({
              title: 'Label',
              name: 'label',
              type: 'localeString'
            }),
            defineField({
              title: 'Sublabel',
              name: 'sublabel',
              type: 'localeString'
            })
          ]
        }
      ]
    })
  ]
})
