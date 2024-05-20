import { ItemType } from '@/type'

import { PortableText, PortableTextComponents } from 'next-sanity'

import { useCurrentLocale } from '@/locale/client'

export default function ThreeStep({ item }: { item: ItemType }) {
  const components: PortableTextComponents = {
    block: {
      h4: ({ children }) => <h4 className='f-heading-4'>{children}</h4>
    },
    list: {
      bullet: ({ children }) => (
        <ul className='list-disc list-outside ml-24'>{children}</ul>
      ),
      number: ({ children }) => (
        <ol className='list-outside ml-24 list-decimal'>{children}</ol>
      )
    }
  }

  const locale = useCurrentLocale()

  return (
    <div className='lg:w-9-cols-vw space-y-32'>
      <p className='f-heading-4'>{item.title?.[locale]}</p>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-gutter gap-y-16'>
        {item.items?.map((x, index) => (
          <div
            key={index}
            className='border-l border-secondary py-8 px-16 space-y-8'
          >
            <p className='f-ui-1 text-accent'>Step {index + 1}:</p>
            <p className='f-heading-4 h-72 lg:h-96'>{x.title?.[locale]}</p>
            <div className='f-ui-1 text-secondary'>
              <PortableText value={x.body?.[locale]} components={components} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
