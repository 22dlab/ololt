import { NewsType, VideoType } from '@/type'

import Hero from './Hero'
import About from './About'
import Partners from './Partners'
import News from './News'
import Videos from './Videos'

export default function HomePage({
  news,
  videos
}: {
  news: NewsType[]
  videos: VideoType[]
}) {
  return (
    <div className='pt-48 lg:pt-96 text-primary overflow-hidden'>
      <Hero />
      <About />
      <Partners />
      <News news={news} />
      <Videos videos={videos} />
    </div>
  )
}
