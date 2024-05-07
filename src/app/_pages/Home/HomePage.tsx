import { NewsType, PartnerType, VideoType } from '@/type'

import Hero from './Hero'
import About from './About'
import Partners from './Partners'
import News from './News'
import Videos from './Videos'

export default function HomePage({
  news,
  videos,
  partners
}: {
  news: NewsType[]
  videos: VideoType[]
  partners: PartnerType[]
}) {
  return (
    <div className='pt-48 lg:pt-96 text-primary overflow-hidden'>
      <Hero />
      <About />
      <Partners partners={partners} />
      <News news={news} />
      <Videos videos={videos} />
    </div>
  )
}
