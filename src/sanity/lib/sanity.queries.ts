import { groq } from 'next-sanity'

const Image = `
  asset -> {
    url,
    metadata {
      lqip,
      dimensions {
        aspectRatio,
        height,
        width
      }
    }
  }
`

export const getClimate = groq`
  *[_type == "climate"]|order(orderRank){
    name,
    components[]{
      _type,
      content {
        ${Image}
      },
      mn,
      en,
      title,
      items[]{
        icon {
          ${Image}
        },
        link,
        label
      }
    }
  }
`
