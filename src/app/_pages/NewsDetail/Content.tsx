import { NewsType } from '@/type'

import { PortableText, PortableTextComponents } from 'next-sanity'

import SanityImage from '@/components/SanityImage'

export default function Content({ news }: { news: NewsType }) {
  const components: PortableTextComponents = {
    types: {
      image: (children: any) => (
        <div className='w-full aspect-[2/1] relative'>
          <SanityImage
            image={children.value}
            className='object-center object-cover'
            alt='image'
          />
        </div>
      )
    },
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
    <div className='w-full relative py-72'>
      <div className='w-full h-[400px] bg-secondary top-0 absolute z-[-1]' />
      <div className='container px-1-cols-vw'>
        <div className='px-gutter'>
          <div className='w-full aspect-[2/1] relative'>
            <SanityImage
              image={news.thumbnail}
              className='object-cover object-center'
              alt={news.title}
            />
          </div>
          <div className='mt-96 w-full flex'>
            <div className='w-2-cols-vw mr-gutter space-y-8'>
              <p className='f-tag-1 text-accent'>{news.type}</p>
              <p className='f-caption-1'>
                <span className='text-secondary'>Date:</span> {news.date}
              </p>
              <p className='f-caption-1'>
                <span className='text-secondary'>Written by:</span>{' '}
                {news.author}
              </p>
            </div>
            <div className='w-6-cols-vw mr-gutter f-body-1 space-y-16'>
              <p className='f-heading-1 mb-60'>{news.title}</p>
              <PortableText value={news.content} components={components} />
            </div>
            <div className='w-2-cols'></div>
          </div>
        </div>
      </div>
    </div>
  )
}
