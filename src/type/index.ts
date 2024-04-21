export type ImageType = {
  asset: {
    url: string
    metadata: {
      lqip: string
      dimensions?: {
        aspectRatio?: number
        width?: number
        height?: number
      }
    }
  }
}

export type LocaleString = {
  mn: string
  en: string
}

export type ItemType = {
  _type: string
  content: ImageType
  mn?: any[]
  en?: any[]
  title?: LocaleString
  items?: [
    {
      icon?: ImageType
      link?: string
      label?: LocaleString
    }
  ]
}

export type ContentType = {
  name: LocaleString
  components: ItemType[]
}

export type NewsType = {
  title: string
  slug: {
    current: string
  }
  type: string
  lang: string
  date: string
  author: string
  thumbnail: ImageType
  content: any[]
}

export type VideoType = {
  title: LocaleString
  caption: LocaleString
  link: string
}
