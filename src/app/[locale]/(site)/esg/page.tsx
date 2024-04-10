import ContentPage from '@/app/_pages/Content/ContentPage'
import { client } from '@/sanity/lib/sanity.client'

import { getESG } from '@/sanity/lib/sanity.queries'

export const revalidate = 60

export default async function ESG() {
  const content = await client.fetch(getESG)

  const title = {
    en: 'Environment, Social & Governance',
    mn: 'Environment, Social & Governance'
  }

  return <ContentPage title={title} content={content} />
}
