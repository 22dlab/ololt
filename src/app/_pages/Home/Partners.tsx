import Image from 'next/image'

import { getCurrentLocale } from '@/locale/server'
import { PartnerType } from '@/type'

import SanityImage from '@/components/SanityImage'

export default function Partners({ partners }: { partners: PartnerType[] }) {
  const locale = getCurrentLocale()

  return (
    <div className='w-full py-48 bg-secondary space-y-40'>
      <p className='text-center f-heading-4 text-secondary'>
        {locale === 'en' ? 'Partners' : 'Хамтрагч байгууллагууд'}
      </p>
      <div className='flex flex-wrap justify-center px-0 md:px-96 lg:px-48 pt-20 bg-primary container'>
        {partners.map((item, index) => (
          <div
            key={index}
            className='w-[191px] lg:w-[200px] h-[56px] relative mb-20'
          >
            <SanityImage
              image={item.logo}
              className='object-contain object-center'
              alt={item.name}
            />
          </div>
        ))}
        {/* {[...Array(9)].map((item, index) => (
          <div
            key={index}
            className='w-[191px] lg:w-[200px] h-[56px] relative mb-20'
          >
            <Image
              fill
              src={`/partners/${index}.png`}
              className='object-contain object-center'
              alt='partner'
            />
          </div>
        ))} */}
      </div>
    </div>
  )
}
