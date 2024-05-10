import { getCurrentLocale } from '@/locale/server'

import Image from 'next/image'

export default function Hero() {
  const locale = getCurrentLocale()

  return (
    <div className='w-full h-[400px] relative'>
      <Image
        src='/misc/news-hero.png'
        className='object-cover object-center'
        fill
        alt='hero'
      />

      <div className='absolute bottom-[56px] lg:bottom-[72px] w-full'>
        <div className='container'>
          <div className='lg:w-6-cols-vw'>
            <p className='text-primary f-display-2'>
              {locale === 'en' ? 'News & Insights' : 'Мэдээ, мэдээлэл'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
