import { NewsType } from '@/type'

import { getType } from '@/hooks/getType'

import { getCurrentLocale } from '@/locale/server'

import BaseButton from '@/components/BaseButton'
import SanityImage from '@/components/SanityImage'

import Link from 'next/link'

export default function News({ news }: { news: NewsType[] }) {
  const locale = getCurrentLocale()

  return (
    <div className='container py-64 space-y-40'>
      <div className='w-full grid grid-cols-4 gap-x-gutter'>
        {news.map((item, index) => (
          <div
            key={index}
            className='pl-16 border-l border-primary flex flex-col justify-between'
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
