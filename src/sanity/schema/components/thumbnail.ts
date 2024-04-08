import { defineType, defineField } from 'sanity'

export const thumbnail = defineType({
  title: 'Thumbnail',
  name: 'thumbnail',
  type: 'object',
  preview: {
    select: {
      title: 'title',
      media: 'content'
    }
  },
  fields: [
    defineField({
      title: 'Content',
      name: 'content',
      type: 'image'
    }),
    defineField({
      name: 'title',
      type: 'string',
      initialValue: 'Thumbnail',
      hidden: true
    })
  ]
})
