import { ItemType } from '@/type'

import { PortableText } from 'next-sanity'

export default function TextBlock({ item }: { item: ItemType }) {
  return (
    <div className='w-6-cols-vw f-body-1'>
      <PortableText value={item.en} />
    </div>
  )
}
