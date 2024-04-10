import ContentPage from '@/app/_pages/Content/ContentPage'
import { client } from '@/sanity/lib/sanity.client'

import { getCarbon } from '@/sanity/lib/sanity.queries'

export const revalidate = 60

export default async function CarbonMarket() {
  const climate = await client.fetch(getCarbon)

  const title = { en: 'Carbon Market', mn: 'Carbon Market' }

  return <ContentPage title={title} content={climate} />
}
