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
      photo?: ImageType
      label?: LocaleString
      title?: LocaleString
      value?: LocaleString
      body?: {
        _type: string
        mn?: any[]
        en?: any[]
      }
      question?: LocaleString
      answer?: {
        _type: string
        mn?: any[]
        en?: any[]
      }
    }
  ]
}

export type ContentType = {
  name: LocaleString
  components: ItemType[]
}

export type PartnerType = {
  name: string
  logo: ImageType
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
  content: [
    {
      _type: string
      style: string
      asset: any
      children: any[]
    }
  ]
}

export type VideoType = {
  title: LocaleString
  caption: LocaleString
  link: string
}
