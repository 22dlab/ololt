import { defineType, defineField } from 'sanity'

export const accordion = defineType({
  title: 'Accordion',
  name: 'accordion',
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
          preview: { select: { title: 'question.en' } },
          fields: [
            defineField({
              title: 'Question',
              name: 'question',
              type: 'localeString'
            }),
            defineField({
              title: 'Answer',
              name: 'answer',
              type: 'localeString'
            })
          ]
        }
      ]
    })
  ]
})
