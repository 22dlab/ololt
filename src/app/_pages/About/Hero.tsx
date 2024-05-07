import { getCurrentLocale } from '@/locale/server'

import Image from 'next/image'

export default function Hero() {
  const locale = getCurrentLocale()

  return (
    <div className='w-full h-[400px] relative bg-gradient-to-b from-[#00000000] to-[#0000004D]'>
      <Image
        src='/misc/about-hero.jpeg'
        className='object-cover object-center'
        fill
        alt='hero'
      />
      {/* <div className='absolute bottom-full translate-y-full pt-72 lg:pt-0 lg:bottom-72 lg:translate-y-0 w-full'>
        <div className='container'>
          <div className='md:w-5-cols-vw lg:w-6-cols-vw'>
            <p className='text-inverse f-display-3'>
              Driving Climate Actions Bridging Stakeholders
              <br />
              With{' '}
              <span className='bg-gradient-to-b from-[#EE5396] to-[#FFAFD2] text-transparent bg-clip-text'>
                Unwavering Integrity
              </span>
            </p>
          </div>
        </div>
      </div> */}
      <div className='absolute bottom-72 w-full'>
        <div className='container flex'>
          <div className='lg:w-8-cols-vw'>
            <p className='text-inverse f-subhead-1'>
              {locale === 'en'
                ? 'At OLOLT Center, we are committed to Driving Timely Climate Actions in collaboration with state and non-state national and international stakeholders, mobilizing resources effectively, and upholding principles of fairness, inclusivity, transparency, and high integrity.'
                : 'ОЛОЛТ Төв нь ёс зүй, шударга ёс, хүртээмжтэй, ил тод зарчмыг эрхэмлэн үндэсний болон олон улсын олон талуудтай хамтран, нийгмийн сайн сайхны төлөө уур амьсгалын өөрчлөлтийг сааруулах үйлсэд бодит хувь нэмэр оруулах эрхэм зорилготой мэргэжлийн төрийн бус байгууллага юм.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
