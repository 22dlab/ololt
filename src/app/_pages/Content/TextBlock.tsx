import { ItemType } from '@/type'

import { PortableText, PortableTextComponents } from 'next-sanity'

export default function TextBlock({ item }: { item: ItemType }) {
  const components: PortableTextComponents = {
    block: {
      h4: ({ children }) => <h4 className='f-heading-4'>{children}</h4>
    },
    list: {
      bullet: ({ children }) => (
        <ul className='list-disc list-outside ml-24'>{children}</ul>
      )
    }
  }

  return (
    <div className='w-6-cols-vw f-body-1 space-y-16'>
      <PortableText value={item.en} components={components} />
    </div>
  )
}
