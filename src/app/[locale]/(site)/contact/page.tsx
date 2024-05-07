import ContactPage from '@/app/_pages/Contact/ContactPage'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Join Us in Shaping a Sustainable Future for Mongolia',
  description:
    'OLOLT Center welcomes collaboration opportunities with organizations, communities, and individuals committed to driving climate action and sustainable development in Mongolia. Contact us to explore partnerships, request our services, or learn more about how we can support your sustainability goals through our expertise in policy, finance, certification, and capacity building solutions.',
  openGraph: {
    title: 'Climate Change & Carbon Market Development Center',
    url: 'https://cccmdc.mn',
    siteName: 'cccmdc.mn',
    images: [
      {
        url: 'https://cdn.sanity.io/images/im89qe6w/production/c9cd9d2bdc63cc40379c0bfd40613df92efe446c-1200x630.png',
        width: 1200,
        height: 630
      }
    ],
    locale: 'en_US',
    type: 'website'
  }
}

export default function Contact() {
  return <ContactPage />
}
