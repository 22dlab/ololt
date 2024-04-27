import { defineType, defineField } from 'sanity'

export const threeStep = defineType({
  title: 'Three Step Component',
  name: 'threeStep',
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
      validation: (Rule) => Rule.max(3),
      of: [
        {
          type: 'object',
          preview: { select: { title: 'title.en' } },
          fields: [
            defineField({
              title: 'Title',
              name: 'title',
              type: 'localeString'
            }),
            defineField({
              title: 'Body',
              name: 'body',
              type: 'textBlock'
            })
          ]
        }
      ]
    })
  ]
})
