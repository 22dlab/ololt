import NewsPage from '@/app/_pages/News/NewsPage'
import { client } from '@/sanity/lib/sanity.client'

import { getNews, getVideos } from '@/sanity/lib/sanity.queries'

export const revalidate = 60

export default async function Academy() {
  const news = await client.fetch(getNews)
  const videos = await client.fetch(getVideos)

  return <NewsPage news={news} videos={videos} />
}
