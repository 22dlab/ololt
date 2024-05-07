import AboutPage from '@/app/_pages/About/AboutPage'

import type { Metadata } from 'next'

import { client } from '@/sanity/lib/sanity.client'

import { getPartners } from '@/sanity/lib/sanity.queries'

export const metadata: Metadata = {
  title: 'Driving Climate Action with Integrity and Innovation | OLOLT Center',
  description:
    'OLOLT Center is a leading Mongolian organization committed to driving timely climate actions through strategic partnerships, empowering professional communities, scientific research, and advocacy. We pioneer innovative approaches grounded in transparency, integrity, and global standards to advance sustainable development goals.',
  openGraph: {
    title: 'Climate Change & Carbon Market Development Center',
    url: 'https://cccmdc.mn',
    siteName: 'cccmdc.mn',
    images: [
      {
        url: 'https://cdn.sanity.io/images/im89qe6w/production/30e61f28f86f3a12255377087155e65678d3944a-1200x630.png',
        width: 1200,
        height: 630
      }
    ],
    locale: 'en_US',
    type: 'website'
  }
}

export const revalidate = 60

export default async function About() {
  const partners = await client.fetch(getPartners)

  return <AboutPage partners={partners} />
}
