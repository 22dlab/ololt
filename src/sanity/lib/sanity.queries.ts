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

const Content = `
  name,
  components[]{
    _type,
    content {
      ${Image}
    },
    mn,
    en,
    title,
    image {
      en {
        ${Image}
      },
      mn {
        ${Image}
      }
    },
    link,
    items[]{
      icon {
        ${Image}
      },
      photo {
        ${Image}
      },
      file {
        asset -> {
          url
        }
      },
      link,
      label,
      sublabel,
      value,
      question,
      answer,
      title,
      body
    }
  }
`

const News = `
  title,
  slug,
  type,
  lang,
  date,
  thumbnail {
    ${Image}
  },
  content[]{
    _type,
    style,
    ${Image},
    children
  }
`

export const getPartners = groq`
  *[_type == "partner"]{
    name,
    logo {
      ${Image}
    }  
  }
`

export const getSpotlightNews = groq`
  *[_type == "spotlightNews"][0]{
    en -> {
      ${News}
    },
    mn -> {
      ${News}
    }
  }
`

export const getNews = groq`
  *[_type == "news"]{
    title,
    slug,
    type,
    lang,
    date,
    thumbnail {
      ${Image}
    },
    content[]{
      _type,
      style,
      ${Image},
      children
    }
  }
`

export const getNewsDetail = groq`
  *[_type == "news" && slug.current == $slug][0]{
    title,
    slug,
    type,
    lang,
    date,
    author,
    thumbnail {
      ${Image}
    },
    content[]{
      _type,
      style,
      ${Image},
      children
    }
  }
`

export const getVideos = groq`
  *[_type == "video"]{
    title,
    caption,
    link
  }
`

export const getClimate = groq`
  *[_type == "climate"]|order(orderRank){
    ${Content}
  }
`

export const getEnergy = groq`
  *[_type == "energy"]|order(orderRank){
    ${Content}
  }
`

export const getCarbon = groq`
  *[_type == "carbon"]|order(orderRank){
    ${Content}
  }
`

export const getESG = groq`
  *[_type == "esg"]|order(orderRank){
    ${Content}
  }
`

export const getGHG = groq`
  *[_type == "ghg"]|order(orderRank){
    ${Content}
  }
`

export const getAcademy = groq`
  *[_type == "academy"]|order(orderRank){
    ${Content}
  }
`
