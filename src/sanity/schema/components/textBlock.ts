import { defineField, defineType } from 'sanity'

const languages = [
  { id: 'en', title: 'English', isDefault: true },
  { id: 'mn', title: 'Mongolian' }
]

export const baseLanguage = languages.find((lang) => lang.isDefault)

export const textBlock = defineType({
  title: 'Text Block',
  name: 'textBlock',
  type: 'object',
  fieldsets: [
    { title: 'Translation', name: 'translation', options: { collapsed: true } }
  ],
  fields: languages.map((lang) =>
    defineField({
      title: lang.title,
      name: lang.id,
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading', value: 'h4' }
          ]
        }
      ],
      fieldset: lang.isDefault ? undefined : 'translation'
    })
  )
})
