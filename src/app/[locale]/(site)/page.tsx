import { client } from '@/sanity/lib/sanity.client'

import { getNews, getVideos } from '@/sanity/lib/sanity.queries'

import HomePage from '@/app/_pages/Home/HomePage'

import { Construction } from '@/components/Construction'

export const revalidate = 60

export default async function Home() {
  const news = await client.fetch(getNews)
  const videos = await client.fetch(getVideos)

  return <HomePage news={news.slice(0, 4)} videos={videos.slice(0, 2)} />

  // return <Construction />
}
