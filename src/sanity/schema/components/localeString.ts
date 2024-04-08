import { defineField, defineType } from 'sanity'

const languages = [
  { id: 'en', title: 'English', isDefault: true },
  { id: 'mn', title: 'Mongolian' }
]

export const baseLanguage = languages.find((lang) => lang.isDefault)

export const localeString = defineType({
  title: 'Localized String',
  name: 'localeString',
  type: 'object',
  fieldsets: [
    { title: 'Translation', name: 'translation', options: { collapsed: true } }
  ],
  fields: languages.map((lang) =>
    defineField({
      title: lang.title,
      name: lang.id,
      type: 'string',
      fieldset: lang.isDefault ? undefined : 'translation'
    })
  )
})
