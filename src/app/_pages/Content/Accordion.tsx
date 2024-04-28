'use client'

import { ItemType } from '@/type'

import { useState } from 'react'

import { PortableText, PortableTextComponents } from 'next-sanity'

export default function Accordion({ item }: { item: ItemType }) {
  const [active, setActive] = useState(-1)

  const handleClick = (index: number) => {
    if (active === index) setActive(-1)
    else setActive(index)
  }

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
    <div className='lg:w-6-cols-vw space-y-32'>
      <p className='f-heading-4'>{item.title?.en}</p>
      <div className='space-y-16'>
        {item.items?.map((x, index) => (
          <div key={index}>
            <button
              onClick={() => handleClick(index)}
              className='w-full flex p-16 justify-between space-x-16 bg-secondary'
            >
              <p className='f-heading-5 text-left'>{x.question?.en}</p>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className={
                  active === index
                    ? 'rotate-0 transition-transform flex-shrink-0'
                    : 'rotate-180 transition-transform flex-shrink-0'
                }
              >
                <path
                  d='M12 7.50024L19.5 15.0002L18.45 16.0502L12 9.60024L5.55 16.0502L4.5 15.0002L12 7.50024Z'
                  fill='#EC008C'
                />
              </svg>
            </button>
            <div
              className={`${
                active === index ? 'h-auto block' : 'h-0 hidden'
              } overflow-hidden transition-transform w-full p-16`}
            >
              <div className='f-body-1 text-secondary'>
                <PortableText value={x.answer?.en} components={components} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
