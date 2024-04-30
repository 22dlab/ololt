import SanityImage from '@/components/SanityImage'

import { ItemType } from '@/type'

import { PortableText, PortableTextComponents } from 'next-sanity'

export default function ThreeFeature({ item }: { item: ItemType }) {
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
    <div className='lg:w-9-cols-vw space-y-32'>
      <p className='f-heading-4'>{item.title?.en}</p>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-gutter gap-y-32'>
        {item.items?.map((x, index) => (
          <div key={index} className='space-y-16 block md:flex lg:block'>
            <div className='w-[40px] md:w-1-cols-vw mr-gutter lg:w-[40px] aspect-square relative'>
              <SanityImage
                className='object-contain object-center'
                image={x.icon!}
                alt={x.label?.en!}
              />
            </div>
            <div className='space-y-16 w-full md:w-5-cols-vw lg:w-full'>
              <p className='f-subhead-2'>{x.title?.en}</p>
              <div className='f-body-1 text-secondary'>
                <PortableText value={x.body?.en} components={components} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
