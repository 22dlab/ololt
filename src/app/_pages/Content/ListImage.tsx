import SanityImage from '@/components/SanityImage'

import { ItemType } from '@/type'

export default function ListImage({ item }: { item: ItemType }) {
  return (
    <div className='lg:w-6-cols-vw space-y-32'>
      <p className='f-heading-4'>{item.title?.en}</p>
      <div className='space-y-16'>
        {item.items?.map((x, index) => (
          <div key={index} className='flex'>
            <div className='flex-grow flex items-center bg-secondary px-16'>
              <p className='f-body-1'>{x.label?.en}</p>
            </div>
            <div className='w-2-cols-vw flex-shrink-0 aspect-video relative'>
              <SanityImage
                className='object-cover object-center'
                image={x.photo!}
                alt={x.label?.en!}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
