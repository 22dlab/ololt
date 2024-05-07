import ContentPage from '@/app/_pages/Content/ContentPage'
import { client } from '@/sanity/lib/sanity.client'

import { getEnergy } from '@/sanity/lib/sanity.queries'

import { Metadata } from 'next'

export const revalidate = 60

export const metadata: Metadata = {
  title:
    'Driving Renewable Energy and Efficiency with I-REC(E) and Energy Savings Certificates',
  description:
    'OLOLT Center introduces innovative certification mechanisms to accelerate Mongolia’s transition to renewable energy and improve energy efficiency. As the sole I-REC(E) issuer, we provide renewable energy producers a globally recognized credential to monetize their clean energy. Our Energy Savings Certificate Scheme incentivizes energy-intensive consumers to adopt efficiency measures.',
  openGraph: {
    title: 'Climate Change & Carbon Market Development Center',
    url: 'https://cccmdc.mn',
    siteName: 'cccmdc.mn',
    images: [
      {
        url: 'https://cdn.sanity.io/images/im89qe6w/production/aef1b417a639d55cf70048480ca199d482d68320-1200x630.png',
        width: 1200,
        height: 630
      }
    ],
    locale: 'en_US',
    type: 'website'
  }
}

export default async function EnergyCertification() {
  const content = await client.fetch(getEnergy)

  const title = { en: 'Energy Certification', mn: 'Energy Certification' }

  return <ContentPage title={title} content={content} />
}
