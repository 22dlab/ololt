import BaseButton from '@/components/BaseButton'

import Link from 'next/link'
import Image from 'next/image'

import { getCurrentLocale } from '@/locale/server'

export default function CTA() {
  const locale = getCurrentLocale()

  return (
    <div className='container flex justify-center mb-96'>
      <div className='w-full md:w-6-cols-vw h-fit relative p-24 md:p-32'>
        <Image
          fill
          src='/misc/cta.jpg'
          className='object-cover object-center -z-[1]'
          alt='cta'
        />
        <div className='w-full text-inverse space-y-8'>
          <p className='f-heading-1'>
            {locale === 'en'
              ? 'For more information'
              : 'Дэлгэрэнгүй мэдээлэл авах'}
          </p>
        </div>
        <div className='w-fit mt-40 md:mt-48'>
          <Link href='/contact'>
            <BaseButton
              icon
              label={locale === 'en' ? 'Get in touch' : 'Бидэнтэй холбогдох'}
              type='primary'
            />
          </Link>
        </div>
      </div>
    </div>
  )
}
