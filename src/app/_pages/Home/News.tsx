'use client'

import { NewsType } from '@/type'

import { getType } from '@/hooks/getType'

import { useCurrentLocale } from '@/locale/client'

import BaseButton from '@/components/BaseButton'
import SanityImage from '@/components/SanityImage'

import Link from 'next/link'

export default function News({ news }: { news: NewsType[] }) {
  const locale = useCurrentLocale()

  const localeNews = news.filter((x) => x.lang === locale)

  localeNews.sort((a, b) => {
    let dateA: any = new Date(a.date)
    let dateB: any = new Date(b.date)

    return dateB - dateA
  })

  return (
    <div className='container py-32 md:py-64 space-y-24 md:space-y-40'>
      <div className='w-full grid md:hidden lg:grid grid-cols-1 md:grid-cols-4 gap-gutter'>
        {localeNews.slice(0, 4).map((item, index) => (
          <Link href={`/news/${item.slug?.current}`} key={index}>
            <div className='pl-16 border-l border-primary flex md:flex-col justify-between h-full'>
              <div className='w-2-cols-vw md:w-full'>
                <div className='w-full aspect-video relative'>
                  <SanityImage
                    image={item.thumbnail}
                    className='object-cover object-center'
                    alt='thumbnail'
                  />
                </div>
                <p className='hidden md:block f-body-1 mt-12 line-clamp-3'>
                  {item.title}
                </p>
                <p className='hidden md:block f-caption-1 text-secondary mt-8'>
                  {getType(item.type, locale)}
                </p>
              </div>
              <div className='w-2-cols-vw md:w-full flex flex-col justify-between'>
                <p className='block md:hidden f-body-1 mt-12'>{item.title}</p>
                <p className='f-tag-1 text-secondary mt-48'>{item.date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className='relative overflow-scroll hidden md:block lg:hidden pl-gutter'>
        <div
          className='flex w-full pl-1-cols-vw overflow-y-hidden'
          style={{
            display: '-webkit-box'
          }}
        >
          {localeNews.slice(0, 4).map((item, index) => (
            <Link href={`/news/${item.slug?.current}`} key={index}>
              <div className='pl-16 border-l border-primary flex flex-col justify-between w-3-cols-vw mr-16'>
                <div className='w-full'>
                  <div className='w-full aspect-video relative'>
                    <SanityImage
                      image={item.thumbnail}
                      className='object-cover object-center'
                      alt='thumbnail'
                    />
                  </div>
                  <p className='f-body-1 mt-12 line-clamp-3'>{item.title}</p>
                  <p className='f-caption-1 text-secondary mt-8'>
                    {getType(item.type, locale)}
                  </p>
                </div>
                <p className='f-tag-1 text-secondary mt-48'>{item.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <div className='w-fit'>
          <Link href='/news'>
            <BaseButton
              type='primary'
              label={locale === 'en' ? 'More News & Insights' : 'Дэлгэрэнгүй'}
              icon
            />
          </Link>
        </div>
      </div>
    </div>
  )
}
