type Type = {
  en: string
  mn: string
  value: string
}

const types: Type[] = [
  {
    en: 'News',
    mn: 'Мэдээ',
    value: 'news'
  },
  {
    en: 'Article',
    mn: 'Нийтлэл',
    value: 'article'
  }
]

export const getType = (type: string, locale: string) => {
  const lang = locale === 'en' ? 'en' : 'mn'
  const filter = types[types.findIndex((x) => x.value === type)][lang]

  return filter
}
