'use client'

import { NewsType, VideoType } from '@/type'

import SanityImage from '@/components/SanityImage'
import Link from 'next/link'
import BaseLink from '@/components/BaseLink'

import { getType } from '@/hooks/getType'

import dynamic from 'next/dynamic'
import { useCurrentLocale } from '@/locale/client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const ReactPlayer = dynamic(() => import('react-player/youtube'), {
  ssr: false
})

function Card({ item }: { item: NewsType }) {
  return (
    <div className='w-full lg:w-7-cols-vw md:flex space-y-16 md:space-y-0'>
      <div className='w-full md:w-2-cols-vw lg:w-3-cols-vw mr-gutter aspect-video md:aspect-[4/3] lg:aspect-[2/1] relative'>
        <SanityImage
          image={item.thumbnail}
          className='object-center object-cover'
          alt='thumbnail'
        />
      </div>
      <div className='md:w-4-cols-vw flex flex-col justify-between'>
        <div className='space-y-16'>
          <p className='f-tag-1'>{item.date}</p>
          <p className='f-heading-4'>{item.title}</p>
        </div>
        <p className='f-ui-1 mt-16 md:mt-24 line-clamp-2 text-secondary'>
          {item.content[0].children[0].text}
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
      mn: 'Онцлох'
    },
    {
      en: 'News',
      mn: 'Мэдээ'
    },
    {
      en: 'Articles',
      mn: 'Нийтлэл'
    },
    {
      en: 'Videos',
      mn: 'Бичлэг'
    }
  ]

  const locale = useCurrentLocale()

  const newsType = news.filter((x) => x.type === 'news')
  const articleType = news.filter((x) => x.type === 'article')

  const [currentInView, setCurrentInView] = useState<number>(0)
  const [open, setOpen] = useState(false)

  const isInView = (element: HTMLElement) => {
    const rect = element.getBoundingClientRect()
    return rect.top < window.innerHeight && rect.bottom >= 0
  }

  const handleScroll = () => {
    const elements = document.querySelectorAll('.news')
    elements.forEach((element, index) => {
      if (isInView(element as HTMLElement)) {
        setCurrentInView(index)
      }
    })
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scroll({ top: 1 })
      window.scroll({ top: 0 })
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className='container px-0 md:px-1-cols-vw lg:px-0'>
      <div className='w-full px-0 md:px-gutter lg:px-0'>
        <div className='w-full lg:flex relative h-auto'>
          <div className='hidden lg:block w-3-cols-vw mr-gutter sticky top-96 mt-96 self-start'>
            <p className='f-heading-5'>
              {locale === 'en' ? 'News & Insights' : 'Мэдээ, мэдээлэл'}
            </p>
            <div className='mt-32'>
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`px-16 py-12 f-ui-1 border-l-4 box-border transition-all delay-150 duration-0 ${
                    index + 1 === currentInView ||
                    (currentInView === 0 && index === 0)
                      ? 'border-secondary'
                      : 'border-primary'
                  }`}
                >
                  <a href={`#${item.en.toLowerCase()}`}>{item[locale]}</a>
                </div>
              ))}
            </div>
          </div>
          <div
            className={`w-full block lg:hidden sticky left-0 transition-all z-[5]  ${
              true ? 'top-0' : 'top-0'
            }`}
          >
            <div className='breakout relative'>
              <div
                className='flex items-center justify-between w-full px-margin py-16 bg-secondary border-b border-primary'
                onClick={() => setOpen(!open)}
              >
                <p className='truncate'>{items[currentInView][locale]}</p>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='flex-shrink-none'
                >
                  <path d='M17.5 3.75H2.5V5H17.5V3.75Z' fill='#ec008c' />
                  <path d='M17.5 15H2.5V16.25H17.5V15Z' fill='#ec008c' />
                  <path d='M17.5 7.5H2.5V8.75H17.5V7.5Z' fill='#ec008c' />
                  <path d='M17.5 11.25H2.5V12.5H17.5V11.25Z' fill='#ec008c' />
                </svg>
              </div>
              <AnimatePresence mode='wait'>
                {open && (
                  <motion.div
                    initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
                    animate={{
                      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'
                    }}
                    exit={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
                    transition={{ duration: '0.5', ease: 'easeOut' }}
                    className='w-full bg-primary absolute top-[57px]'
                  >
                    {items.map((item, index) => (
                      <div
                        key={index}
                        className='text-secondary py-[15px] border-b border-primary'
                      >
                        <a
                          className='px-margin truncate overflow-hidden'
                          onClick={() => setOpen(false)}
                          href={`#${item.en.toLowerCase()}`}
                        >
                          {item[locale]}
                        </a>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          <div className='md:w-6-cols-vw lg:w-9-cols-vw space-y-48 divide-y divide-[#C1C7CD] py-96'>
            <div id='spotlight' className='w-full pb-48 space-y-60 news'>
              <p className='f-heading-1'>{items[0][locale]}</p>
              <div className='w-full aspect-[4/3] md:aspect-video lg:aspect-[2/1] relative'>
                <SanityImage
                  image={news[0].thumbnail}
                  className='object-center object-cover'
                  alt='thumbnail'
                />
                <div className='absolute w-3-cols-vw bottom-0 left-0 lg:left-full lg:-translate-x-full bg-secondary py-24 px-20 space-y-24 lg:space-y-60 flex flex-col justify-between'>
                  <div className='space-y-8'>
                    <p className='f-tag-1'>{getType(news[0].type, locale)}</p>
                    <p className='f-heading-4 line-clamp-3'>{news[0].title}</p>
                  </div>
                  <div className='w-fit'>
                    <Link href={`/news/${news[0].slug?.current}`}>
                      <BaseLink
                        label={locale === 'en' ? 'Read more' : 'Дэлгэрэнгүй'}
                        icon
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              id='news'
              className='w-full py-24 md:py-48 space-y-40 lg:space-y-60 news'
            >
              <p className='f-heading-1'>{items[1][locale]}</p>
              {newsType.map((item, index) => (
                <div className='w-fit' key={index}>
                  <Link href={`/news/${item.slug?.current}`}>
                    <Card item={item} />
                  </Link>
                </div>
              ))}
            </div>
            <div
              id='articles'
              className='w-full py-24 md:py-48 space-y-40 lg:space-y-60 news'
            >
              <p className='f-heading-1'>{items[2][locale]}</p>
              {articleType.map((item, index) => (
                <div className='w-fit' key={index}>
                  <Link href={`/news/${item.slug?.current}`}>
                    <Card item={item} />
                  </Link>
                </div>
              ))}
            </div>
            <div
              id='videos'
              className='w-full py-24 md:py-48 space-y-40 lg:space-y-60 news'
            >
              <p className='f-heading-1'>{items[3][locale]}</p>
              {videos.map((item, index) => (
                <div key={index} className='lg:w-6-cols-vw space-y-24'>
                  <p className='f-body-1'>{item.caption[locale]}</p>
                  <div className='w-full aspect-video'>
                    <ReactPlayer url={item.link} width='100%' height='100%' />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
