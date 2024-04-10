import ContentPage from '@/app/_pages/Content/ContentPage'
import { client } from '@/sanity/lib/sanity.client'

import { getGHG } from '@/sanity/lib/sanity.queries'

export const revalidate = 60

export default async function GHG() {
  const content = await client.fetch(getGHG)

  const title = {
    en: 'Green House Gas Accounting',
    mn: 'Green House Gas Accounting'
  }

  return <ContentPage title={title} content={content} />
}
