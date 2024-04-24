import SanityImage from '@/components/SanityImage'

import { ItemType } from '@/type'

export default function Photo({ item }: { item: ItemType }) {
  return (
    <div className='lg:w-6-cols relative aspect-[2/1]'>
      <SanityImage
        image={item.content}
        className='object-cover object-center'
        alt='photo'
      />
    </div>
  )
}
