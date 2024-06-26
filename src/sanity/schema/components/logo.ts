import { defineType, defineField } from 'sanity'

export const logo = defineType({
  title: 'Logo',
  name: 'logo',
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
      initialValue: 'Logo',
      hidden: true
    })
  ]
})
