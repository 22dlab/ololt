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
      label?: string
    }
  ]
}

export type ContentType = {
  name: LocaleString
  components: ItemType[]
}
