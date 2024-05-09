import SanityImage from '@/components/SanityImage'

import { ItemType } from '@/type'

import { useCurrentLocale } from '@/locale/client'

export default function LinkImage({ item }: { item: ItemType }) {
  const locale = useCurrentLocale()

  return (
    <div className='lg:w-6-cols'>
      <a href={item.link} className='w-full'>
        <div className='w-full relative aspect-[2/1]'>
          {locale === 'en' ? (
            <SanityImage
              image={item.image.en}
              className='object-contain object-left'
              alt='photo'
            />
          ) : (
            <SanityImage
              image={item.image.mn}
              className='object-contain object-left'
              alt='photo'
            />
          )}
        </div>
      </a>
    </div>
  )
}
