import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'spotlightNews',
  title: 'Spotlight News',
  type: 'document',
  preview: {
    select: {
      title: 'placeholder'
    }
  },
  fields: [
    defineField({
      name: 'placeholder',
      title: 'placeholder',
      initialValue: 'Spotlight News',
      type: 'string',
      hidden: true
    }),
    defineField({
      name: 'en',
      title: 'Spotlight News (English)',
      type: 'reference',
      to: { type: 'news' },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'mn',
      title: 'Spotlight News (Mongolian)',
      type: 'reference',
      to: { type: 'news' },
      validation: (Rule) => Rule.required()
    })
  ]
})
