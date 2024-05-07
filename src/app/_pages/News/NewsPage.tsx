import { NewsType, VideoType } from '@/type'

import Hero from './Hero'
import News from './News'

export default function NewsPage({
  spotlight,
  news,
  videos
}: {
  spotlight: {
    en: NewsType
    mn: NewsType
  }
  news: NewsType[]
  videos: VideoType[]
}) {
  return (
    <div className='pt-48 lg:pt-96 text-primary'>
      <Hero />
      <News spotlight={spotlight} news={news} videos={videos} />
    </div>
  )
}
