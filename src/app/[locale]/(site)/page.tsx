import { client } from '@/sanity/lib/sanity.client'

import { getNews, getVideos } from '@/sanity/lib/sanity.queries'

import HomePage from '@/app/_pages/Home/HomePage'

import { Construction } from '@/components/Construction'

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
        url: 'https://cdn.sanity.io/images/im89qe6w/production/ebdd77d86efd7fe872912dcbc041a3f798ef5ce6-1200x630.png',
        width: 1200,
        height: 630
      }
    ],
    locale: 'en_US',
    type: 'website'
  }
}

export default async function Home() {
  const news = await client.fetch(getNews)
  const videos = await client.fetch(getVideos)

  return <HomePage news={news.slice(0, 4)} videos={videos.slice(0, 2)} />

  // return <Construction />
}
