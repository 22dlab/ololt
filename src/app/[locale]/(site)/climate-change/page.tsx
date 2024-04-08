import ContentPage from '@/app/_pages/Content/ContentPage'
import { client } from '@/sanity/lib/sanity.client'

import { getClimate } from '@/sanity/lib/sanity.queries'

export const revalidate = 60

export default async function ClimateChange() {
  const climate = await client.fetch(getClimate)

  const title = { en: 'Climate Change', mn: 'Climate Change' }

  return <ContentPage title={title} content={climate} />
}
