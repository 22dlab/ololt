import { defineType, defineField } from 'sanity'

export const photo = defineType({
  title: 'Photo',
  name: 'photo',
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
    })
  ]
})
