import ContentPage from '@/app/_pages/Content/ContentPage'
import { client } from '@/sanity/lib/sanity.client'

import { getESG } from '@/sanity/lib/sanity.queries'

import { Metadata } from 'next'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Elevating ESG Integration for Mongolian Businesses',
  description:
    'OLOLT Center empowers Mongolian companies to adopt robust Environmental, Social, and Governance (ESG) practices through comprehensive consulting services. Our expertise includes ESG policy planning through materiality assessments, impact reporting aligned with GRI standards, and independent auditing and verification for credible ESG disclosures. By partnering with us, businesses can enhance transparency, mitigate risks, attract investors, and drive sustainable growth.',
  openGraph: {
    title: 'Climate Change & Carbon Market Development Center',
    url: 'https://cccmdc.mn',
    siteName: 'cccmdc.mn',
    images: [
      {
        url: 'https://cdn.sanity.io/images/im89qe6w/production/7c6881bbae0b93d15c801282fd7434ddd9540038-1200x630.png',
        width: 1200,
        height: 630
      }
    ],
    locale: 'en_US',
    type: 'website'
  }
}

export default async function ESG() {
  const content = await client.fetch(getESG)

  const title = {
    en: 'Environment, Social & Governance',
    mn: 'Environment, Social & Governance'
  }

  return <ContentPage title={title} content={content} />
}
