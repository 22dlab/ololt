import { defineType, defineField } from 'sanity'

export const cta = defineType({
  title: 'CTA',
  name: 'cta',
  type: 'object',
  preview: {
    select: {
      title: 'title'
    }
  },
  fields: [
    defineField({
      title: 'Photo',
      name: 'photo',
      type: 'image'
    }),
    defineField({
      title: 'Title',
      name: 'title',
      type: 'localeString'
    }),
    defineField({
      title: 'Subtitle',
      name: 'subtitle',
      type: 'localeString'
    }),
    defineField({
      title: 'Link',
      name: 'link',
      type: 'object',
      fields: [
        defineField({
          title: 'Label',
          name: 'label',
          type: 'localeString'
        }),
        defineField({
          title: 'url',
          name: 'url',
          type: 'url'
        })
      ]
    })
  ]
})
