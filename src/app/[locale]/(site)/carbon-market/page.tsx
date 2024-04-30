import ContentPage from '@/app/_pages/Content/ContentPage'
import { client } from '@/sanity/lib/sanity.client'

import { getCarbon } from '@/sanity/lib/sanity.queries'

import { Metadata } from 'next'

export const revalidate = 60

export const metadata: Metadata = {
  title:
    'Pioneering Carbon Market Solutions for Forest and Agriculture Sectors',
  description:
    'OLOLT Center is spearheading innovative carbon market mechanisms in Mongolia, pioneering the country’s first domestic voluntary Forest Carbon Program and exploring market incentives for the agriculture sector. Our Forest Carbon Program facilitates afforestation, reforestation, and agroforestry activities, enabling carbon absorption and economic incentives. We also aim to develop systemic solutions for reducing emissions from livestock while conserving biodiversity and benefiting stakeholders.',
  openGraph: {
    title: 'Climate Change & Carbon Market Development Center',
    url: 'https://cccmdc.mn',
    siteName: 'cccmdc.mn',
    images: [
      {
        url: 'https://cdn.sanity.io/images/im89qe6w/production/96011059179b2818158ee758e2fe302f88fb45f8-1200x630.png',
        width: 1200,
        height: 630
      }
    ],
    locale: 'en_US',
    type: 'website'
  }
}

export default async function CarbonMarket() {
  const climate = await client.fetch(getCarbon)

  const title = { en: 'Carbon Market', mn: 'Carbon Market' }

  return <ContentPage title={title} content={climate} />
}
