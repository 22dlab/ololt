import ContentPage from '@/app/_pages/Content/ContentPage'
import { client } from '@/sanity/lib/sanity.client'

import { getEnergy } from '@/sanity/lib/sanity.queries'

export const revalidate = 60

export default async function EnergyCertification() {
  const content = await client.fetch(getEnergy)

  const title = { en: 'Energy Certification', mn: 'Energy Certification' }

  return <ContentPage title={title} content={content} />
}
