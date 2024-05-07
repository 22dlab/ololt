import { defineType, defineField } from 'sanity'

export const linkImage = defineType({
  title: 'Link Image',
  name: 'linkImage',
  type: 'object',
  preview: {
    select: {
      title: 'title.en',
      media: 'image.en'
    }
  },
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'localeString'
    }),
    defineField({
      title: 'Image',
      name: 'image',
      type: 'object',
      fields: [
        defineField({
          name: 'mn',
          title: 'Mongolian',
          type: 'image'
        }),
        defineField({
          name: 'en',
          title: 'English',
          type: 'image'
        })
      ],
      validation: (Rule) => Rule.required()
    }),
    defineField({
      title: 'Link',
      name: 'link',
      type: 'url'
    })
  ]
})
