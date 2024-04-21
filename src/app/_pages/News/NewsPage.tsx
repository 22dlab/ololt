import { NewsType, VideoType } from '@/type'

import Hero from './Hero'
import News from './News'

export default function NewsPage({
  news,
  videos
}: {
  news: NewsType[]
  videos: VideoType[]
}) {
  return (
    <div className='pt-96 text-primary'>
      <Hero />
      <News news={news} videos={videos} />
    </div>
  )
}
