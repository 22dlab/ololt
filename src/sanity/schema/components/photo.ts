import { defineType, defineField } from 'sanity'

export const photo = defineType({
  title: 'Photo',
  name: 'photo',
  type: 'object',
  fields: [
    defineField({
      title: 'Content',
      name: 'content',
      type: 'image'
    })
  ]
})
