'use client'

import { useRef, useEffect, useState } from 'react'
import { useInView } from 'framer-motion'

import { ContentType } from '@/type'

import TextBlock from './TextBlock'
import IconCard from './IconCard'
import ServiceCard from './ServiceCard'
import StatCard from './StatCard'
import Accordion from './Accordion'
import Photo from './Photo'
import Logo from './Logo'

export default function Content({ content }: { content: ContentType[] }) {
  const refs = useRef<Array<HTMLDivElement | null>>([])

  return (
    <div className='container py-96 px-0 md:px-1-cols-vw lg:px-0'>
      <div className='w-full px-0 md:px-gutter lg:px-0'>
        <div className='w-full lg:flex relative h-auto'>
          <div className='hidden lg:block w-3-cols-vw mr-gutter sticky top-96 self-start'>
            <p className='f-heading-5'>Specialized Areas</p>
            <div className='mt-32'>
              {content.slice(1, content.length).map((item, index) => (
                <div
                  key={index}
                  className={`px-16 py-12 f-ui-1 border-l-4 box-border border-primary`}
                >
                  <a href={`#${item.name.en.toLowerCase()}`}>{item.name.en}</a>
                </div>
              ))}
            </div>
          </div>
          <div className='lg:w-9-cols-vw space-y-48'>
            {content.map((x, index) => {
              return (
                <div
                  key={index}
                  id={x.name.en.toLowerCase()}
                  ref={(element) => {
                    refs.current.push(element)
                  }}
                  className='space-y-60'
                >
                  {index !== 0 && (
                    <div className='f-heading-1 pt-48 border-t border-primary w-4-cols md:w-6-cols-vw'>
                      <p>{x.name.en}</p>
                    </div>
                  )}
                  {x.components !== null &&
                    x.components.map((item, index) => {
                      switch (item._type) {
                        case 'textBlock': {
                          return <TextBlock key={index} item={item} />
                        }
                        case 'iconCard': {
                          return <IconCard key={index} item={item} />
                        }
                        case 'serviceCard': {
                          return <ServiceCard key={index} item={item} />
                        }
                        case 'statCard': {
                          return <StatCard key={index} item={item} />
                        }
                        case 'accordion': {
                          return <Accordion key={index} item={item} />
                        }
                        case 'photo': {
                          return <Photo key={index} item={item} />
                        }
                        case 'logo': {
                          return <Logo key={index} item={item} />
                        }
                      }
                    })}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
