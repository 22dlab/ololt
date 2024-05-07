import ContentPage from '@/app/_pages/Content/ContentPage'
import { client } from '@/sanity/lib/sanity.client'

import { getAcademy } from '@/sanity/lib/sanity.queries'

import { Metadata } from 'next'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Empowering Sustainable Transformation through Expert-Led Training',
  description:
    'OLOLT Center’s Academy offers specialized training programs tailored for organizations seeking to enhance their sustainability capabilities. Our expert-led courses provide comprehensive insights into crucial topics such as Climate Change, Carbon Markets, Climate Finance, Environmental, Social, and Governance (ESG), and Greenhouse Gas (GHG) Accounting. Designed for diverse audiences including government agencies, private sector, academia, and communities, our training equips participants with the knowledge and tools necessary to drive positive change and achieve sustainability excellence within the Mongolian context.',
  openGraph: {
    title: 'Climate Change & Carbon Market Development Center',
    url: 'https://cccmdc.mn',
    siteName: 'cccmdc.mn',
    images: [
      {
        url: 'https://cdn.sanity.io/images/im89qe6w/production/182221e136c0d792c1147c66de6b9a7f5b8808ad-1200x630.png',
        width: 1200,
        height: 630
      }
    ],
    locale: 'en_US',
    type: 'website'
  }
}

export default async function Academy() {
  const content = await client.fetch(getAcademy)

  const title = { en: 'Academy', mn: 'Academy' }

  return <ContentPage title={title} content={content} />
}
