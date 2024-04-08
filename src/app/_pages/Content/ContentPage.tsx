import { ContentType } from '@/type'

import Hero from './Hero'
import Content from './Content'

export default function ContentPage({
  title,
  content
}: {
  title: { en: string; mn: string }
  content: ContentType[]
}) {
  console.log(content[0].components)

  return (
    <div className='pt-96'>
      <Hero thumbnail={content[0].components[0].content} title={title} />
      <Content content={content} />
    </div>
  )
}
