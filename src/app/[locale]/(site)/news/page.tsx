import { client } from '@/sanity/lib/sanity.client'

import {
  getSpotlightNews,
  getNews,
  getVideos
} from '@/sanity/lib/sanity.queries'

import NewsPage from '@/app/_pages/News/NewsPage'

import { Metadata } from 'next'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Catalyzing Sustainability: News, Research & Thought Leadership',
  description:
    'Explore OLOLT Center’s news and insights section for the latest updates, expert analysis, research publications, and thought leadership articles on critical topics such as climate change mitigation, carbon markets, energy transition, ESG integration, and sustainable development in Mongolia. Stay informed and gain valuable perspectives from our team of experienced professionals.',
  openGraph: {
    title: 'Climate Change & Carbon Market Development Center',
    url: 'https://cccmdc.mn',
    siteName: 'cccmdc.mn',
    images: [
      {
        url: 'https://cdn.sanity.io/images/im89qe6w/production/cb69604243d01bfd6e4fa86dfc76eecca0a907e7-1200x630.png',
        width: 1200,
        height: 630
      }
    ],
    locale: 'en_US',
    type: 'website'
  }
}

export default async function Academy() {
  const spotlight = await client.fetch(getSpotlightNews)
  const news = await client.fetch(getNews)
  const videos = await client.fetch(getVideos)

  return <NewsPage spotlight={spotlight} news={news} videos={videos} />
}
