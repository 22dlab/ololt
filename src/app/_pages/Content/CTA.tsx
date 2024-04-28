import BaseButton from '@/components/BaseButton'

import Link from 'next/link'
import Image from 'next/image'

export default function CTA() {
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
          <p className='f-heading-1'>Get in Touch!</p>
          <p className='f-body-1'>
            Take action against climate change by connecting with us today.
          </p>
        </div>
        <div className='w-fit mt-40 md:mt-48'>
          <Link href='/contact'>
            <BaseButton icon label='Get in touch' type='primary' />
          </Link>
        </div>
      </div>
    </div>
  )
}
