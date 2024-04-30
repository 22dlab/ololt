import Image from 'next/image'

import { getCurrentLocale } from '@/locale/server'

export default function Partners() {
  const locale = getCurrentLocale()

  return (
    <div className='w-full py-48 bg-secondary space-y-40'>
      <p className='text-center f-heading-4 text-secondary'>
        {locale === 'en'
          ? 'International partners'
          : 'Олон улсын хамтрагч байгууллагууд'}
      </p>
      <div className='flex flex-wrap justify-center px-0 md:px-96 lg:px-48 pt-20 bg-primary container'>
        {[...Array(9)].map((item, index) => (
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
        ))}
      </div>
      {/* <div className='container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 md:px-48 py-20 bg-primary mt-40 gap-y-24 gap-x-16 place-items-center'>
        {[...Array(9)].map((item, index) => (
          <div key={index} className='w-full h-[56px] relative'>
            <Image
              fill
              src={`/partners/${index}.png`}
              className='object-contain object-center'
              alt='partner'
            />
          </div>
        ))}
      </div> */}
    </div>
  )
}
