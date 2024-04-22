import SanityImage from '@/components/SanityImage'

import { ItemType } from '@/type'

export default function Logo({ item }: { item: ItemType }) {
  return (
    <div className='w-6-cols-vw relative h-[120px]'>
      <SanityImage
        image={item.content}
        className='object-contain object-left'
        alt='photo'
      />
    </div>
  )
}
