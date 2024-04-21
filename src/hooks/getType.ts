type Type = {
  en: string
  mn: string
  value: string
}

const types: Type[] = [
  {
    en: 'News',
    mn: 'News',
    value: 'news'
  },
  {
    en: 'Article',
    mn: 'Article',
    value: 'article'
  }
]

export const getType = (type: string, locale: string) => {
  const lang = locale === 'en' ? 'en' : 'mn'
  const filter = types[types.findIndex((x) => x.value === type)][lang]

  return filter
}
