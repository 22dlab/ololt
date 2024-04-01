import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://cccmdc.mn',
      priority: 1
    }
  ]
}
