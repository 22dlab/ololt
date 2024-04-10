import ContentPage from '@/app/_pages/Content/ContentPage'
import { client } from '@/sanity/lib/sanity.client'

import { getAcademy } from '@/sanity/lib/sanity.queries'

export const revalidate = 60

export default async function Academy() {
  const content = await client.fetch(getAcademy)

  const title = { en: 'Academy', mn: 'Academy' }

  return <ContentPage title={title} content={content} />
}
