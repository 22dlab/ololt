'use client'

import { VideoType } from '@/type'

import BaseButton from '@/components/BaseButton'

import Link from 'next/link'

import ReactPlayer from 'react-player/youtube'
import { useCurrentLocale } from '@/locale/client'

export default function Videos({ videos }: { videos: VideoType[] }) {
  const locale = useCurrentLocale()

  return (
    <div className='w-full bg-[#21272A]'>
      <div className='container py-32 md:py-64 space-y-24 md:space-y-40'>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-gutter'>
          {videos.map((item, index) => (
            <div key={index} className='w-full aspect-video'>
              <ReactPlayer url={item.link} width='100%' height='100%' />
            </div>
          ))}
        </div>
        <div className='flex justify-center items-center'>
          <div className='w-fit'>
            <Link href='/news'>
              <BaseButton
                type='primary'
                label={locale === 'en' ? 'More Videos' : 'Дэлгэрэнгүй'}
                icon
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
