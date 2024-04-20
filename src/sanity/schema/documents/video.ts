import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'video',
  title: 'Videos',
  type: 'document',
  preview: {
    select: {
      title: 'title.en'
    }
  },
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localeString',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'localeString'
    }),
    defineField({
      name: 'link',
      title: 'Youtube Link',
      type: 'url',
      validation: (Rule) => Rule.required()
    })
  ]
})
