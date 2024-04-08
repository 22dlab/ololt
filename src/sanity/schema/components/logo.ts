import { defineType, defineField } from 'sanity'

export const logo = defineType({
  title: 'Logo',
  name: 'logo',
  type: 'object',
  preview: {
    select: {
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
