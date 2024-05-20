import SanityImage from '@/components/SanityImage'

import { useCurrentLocale } from '@/locale/client'

import { ItemType } from '@/type'

export default function IconCard({ item }: { item: ItemType }) {
  const locale = useCurrentLocale()

  return (
    <div className='lg:w-6-cols-vw space-y-32'>
      <p className='f-heading-4'>{item.title?.[locale]}</p>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-x-gutter gap-y-32'>
        {item.items?.map((x, index) => (
          <div
            key={index}
            className='border-l border-secondary py-12 px-24 space-y-24'
          >
            <div className='w-40 aspect-square relative'>
              <SanityImage
                className='object-contain object-center'
                image={x.icon!}
                alt={x.label?.[locale]!}
              />
            </div>
            <p className='f-body-1'>{x.label?.[locale]}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
