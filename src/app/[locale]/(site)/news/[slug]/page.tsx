import NewsDetailPage from '@/app/_pages/NewsDetail/NewsDetailPage'
import { client } from '@/sanity/lib/sanity.client'

import { getNewsDetail } from '@/sanity/lib/sanity.queries'

import { Metadata } from 'next'

export const revalidate = 60

export async function generateMetadata({
  params
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const { slug } = params

  const news = await client.fetch(getNewsDetail, {
    slug
  })

  return {
    title: news?.name
  }
}

export default async function NewsDetail({
  params
}: {
  params: { slug: string }
}) {
  const { slug } = params
  const news = await client.fetch(getNewsDetail, {
    slug
  })

  return <NewsDetailPage news={news} />
}
