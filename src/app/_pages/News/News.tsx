'use client'

import { NewsType, VideoType } from '@/type'

import SanityImage from '@/components/SanityImage'
import Link from 'next/link'
import BaseLink from '@/components/BaseLink'

import { getType } from '@/hooks/getType'

import dynamic from 'next/dynamic'

const ReactPlayer = dynamic(() => import('react-player/youtube'), {
  ssr: false
})

function Card({ item }: { item: NewsType }) {
  return (
    <div className='w-7-cols-vw flex'>
      <div className='w-3-cols-vw mr-gutter aspect-[2/1] relative'>
        <SanityImage
          image={item.thumbnail}
          className='object-center object-contain'
          alt='thumbnail'
        />
      </div>
      <div className='w-4-cols-vw overflow-y-hidden h-fit'>
        <p className='f-tag-1'>{item.date}</p>
        <p className='f-heading-4 mt-16'>{item.title}</p>
        <p className='f-ui-1 mt-24 line-clamp-2'>
          {item.content.children[0].text}
        </p>
      </div>
    </div>
  )
}

export default function News({
  news,
  videos
}: {
  news: NewsType[]
  videos: VideoType[]
}) {
  const items = [
    {
      en: 'Spotlight',
      mn: ''
    },
    {
      en: 'News',
      mn: ''
    },
    {
      en: 'Articles',
      mn: ''
    },
    {
      en: 'Videos',
      mn: ''
    }
  ]

  const newsType = news.filter((x) => x.type === 'news')
  const articleType = news.filter((x) => x.type === 'article')

  return (
    <div className='container py-96'>
      <div className='w-full flex relative h-auto'>
        <div className='w-3-cols-vw mr-gutter sticky top-96 self-start'>
          <p className='f-heading-5'>Specialized Areas</p>
          <div className='mt-32'>
            {items.map((item, index) => (
              <div
                key={index}
                className={`px-16 py-12 f-ui-1 border-l-4 box-border border-primary`}
              >
                <a href={`#${item.en.toLowerCase()}`}>{item.en}</a>
              </div>
            ))}
          </div>
        </div>
        <div className='w-9-cols-vw space-y-48 divide-y divide-[#C1C7CD]'>
          <div id='spotlight' className='w-full pb-48 space-y-60'>
            <p className='f-heading-1'>Spotlight</p>
            <div className='w-full aspect-[2/1] relative'>
              <SanityImage
                image={news[0].thumbnail}
                className='object-center object-contain'
                alt='thumbnail'
              />
              <div className='absolute w-3-cols-vw bottom-0 right-0 bg-secondary py-24 px-20 space-y-60 flex flex-col justify-between'>
                <div className='space-y-8'>
                  <p className='f-tag-1'>{getType(news[0].type, 'en')}</p>
                  <p className='f-heading-4'>{news[0].title}</p>
                </div>
                <div className='w-fit'>
                  <Link href={`/news/${news[0].slug?.current}`}>
                    <BaseLink label='Read more' icon />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div id='news' className='w-full py-48 space-y-60'>
            <p className='f-heading-1'>News</p>
            {newsType.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </div>
          <div id='articles' className='w-full py-48 space-y-60'>
            <p className='f-heading-1'>Articles</p>
            {articleType.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </div>
          <div id='videos' className='w-full py-48 space-y-60'>
            <p className='f-heading-1'>Videos</p>
            {videos.map((item, index) => (
              <div key={index} className='w-6-cols-vw space-y-24'>
                <p className='f-body-1'>{item.caption.en}</p>
                <div className='w-full aspect-video'>
                  <ReactPlayer url={item.link} width='100%' height='100%' />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
