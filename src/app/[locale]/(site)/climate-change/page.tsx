import ContentPage from '@/app/_pages/Content/ContentPage'
import { client } from '@/sanity/lib/sanity.client'

import { getClimate } from '@/sanity/lib/sanity.queries'

import { Metadata } from 'next'

export const revalidate = 60

export const metadata: Metadata = {
  title:
    'Expert Climate Change Services: Assessments, Policy, Finance, and Project Solutions',
  description:
    'OLOLT Center provides specialized climate change services in Mongolia, including risk and impact assessments, policy planning aligned with global standards, innovative climate finance solutions, and comprehensive project development, implementation, and evaluation. Our science-based approach drives effective mitigation and adaptation strategies across sectors.',
  openGraph: {
    title: 'Climate Change & Carbon Market Development Center',
    url: 'https://cccmdc.mn',
    siteName: 'cccmdc.mn',
    images: [
      {
        url: 'https://cdn.sanity.io/images/im89qe6w/production/ca944a9327c7014675eb05dda91cab7b4c30b9ea-1200x630.png',
        width: 1200,
        height: 630
      }
    ],
    locale: 'en_US',
    type: 'website'
  }
}

export default async function ClimateChange() {
  const climate = await client.fetch(getClimate)

  const title = { en: 'Climate Change', mn: 'Climate Change' }

  return <ContentPage title={title} content={climate} />
}
