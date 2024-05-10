import { getCurrentLocale } from '@/locale/server'

import Image from 'next/image'

export default function Hero() {
  const locale = getCurrentLocale()

  return (
    <div className='w-full h-[400px] relative bg-gradient-to-b from-[#00000000] to-[#000000AA]'>
      <Image
        src='/misc/news-hero.png'
        className='object-cover object-center -z-[1]'
        fill
        alt='hero'
      />
      {/* <div className='-z-[1] absolute w-full h-full bg-gradient-to-b from-white to-black' /> */}

      <div className='absolute bottom-[56px] lg:bottom-[72px] w-full'>
        <div className='container'>
          <div className='lg:w-6-cols-vw'>
            <p className='text-inverse f-display-2'>
              {locale === 'en' ? 'News & Insights' : 'Мэдээ, мэдээлэл'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
