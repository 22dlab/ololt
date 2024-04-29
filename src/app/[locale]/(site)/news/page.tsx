import { client } from '@/sanity/lib/sanity.client'

import { getNews, getVideos } from '@/sanity/lib/sanity.queries'

import NewsPage from '@/app/_pages/News/NewsPage'

export const revalidate = 60

export default async function Academy() {
  const news = await client.fetch(getNews)
  const videos = await client.fetch(getVideos)

  return <NewsPage news={news} videos={videos} />
}
