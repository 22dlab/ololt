import { NewsType } from '@/type'

import { getType } from '@/hooks/getType'

import { getCurrentLocale } from '@/locale/server'

import BaseButton from '@/components/BaseButton'
import SanityImage from '@/components/SanityImage'

import Link from 'next/link'

export default function News({ news }: { news: NewsType[] }) {
  const locale = getCurrentLocale()

  return (
    <div className='container py-32 md:py-64 space-y-24 md:space-y-40'>
      <div className='w-full grid md:hidden lg:grid grid-cols-1 md:grid-cols-4 gap-gutter'>
        {news.map((item, index) => (
          <div
            key={index}
            className='pl-16 border-l border-primary flex md:flex-col justify-between'
          >
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
              <p className='block md:hidden f-body-1 mt-12 line-clamp-2'>
                {item.title}
              </p>
              <p className='f-tag-1 text-secondary mt-48'>{item.date}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='relative overflow-scroll hidden md:block lg:hidden pl-gutter'>
        <div
          className='flex w-full pl-1-cols-vw overflow-y-hidden'
          style={{
            display: '-webkit-box'
          }}
        >
          {news.map((item, index) => (
            <div
              key={index}
              className='pl-16 border-l border-primary flex flex-col justify-between w-3-cols-vw mr-16'
            >
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
