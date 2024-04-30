import ContentPage from '@/app/_pages/Content/ContentPage'
import { client } from '@/sanity/lib/sanity.client'

import { getGHG } from '@/sanity/lib/sanity.queries'

import { Metadata } from 'next'

export const revalidate = 60

export const metadata: Metadata = {
  title:
    'Comprehensive GHG Accounting Solutions for Organisations and Projects',
  description:
    'OLOLT Center provides expert greenhouse gas (GHG) accounting services to support Mongolian organisations and projects in accurately measuring and reporting their emissions. At the organisational level, we quantify GHG emissions following the GHG Protocol, enabling effective target-setting, risk management, and ESG reporting. For projects, our accounting aligns with global methodologies to credibly quantify GHG reductions, enhancing credibility and facilitating harmonization across initiatives. Covering sectors from energy to agriculture and waste, our GHG accounting empowers data-driven climate action.',
  openGraph: {
    title: 'Climate Change & Carbon Market Development Center',
    url: 'https://cccmdc.mn',
    siteName: 'cccmdc.mn',
    images: [
      {
        url: 'https://cdn.sanity.io/images/im89qe6w/production/72ffd369fc63d60685a37d72f9b142849a10ef2c-1200x630.png',
        width: 1200,
        height: 630
      }
    ],
    locale: 'en_US',
    type: 'website'
  }
}

export default async function GHG() {
  const content = await client.fetch(getGHG)

  const title = {
    en: 'Green House Gas Accounting',
    mn: 'Green House Gas Accounting'
  }

  return <ContentPage title={title} content={content} />
}
