'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { ContentType } from '@/type'

import TextBlock from './TextBlock'
import IconCard from './IconCard'
import ServiceCard from './ServiceCard'
import StatCard from './StatCard'
import ThreeFeature from './ThreeFeature'
import ThreeStep from './ThreeStep'
import Accordion from './Accordion'
import ListImage from './ListImage'
import LinkImage from './LinkImage'
import Photo from './Photo'
import Logo from './Logo'

import { useCurrentLocale } from '@/locale/client'
import FileDownload from './FileDownload'

export default function Content({ content }: { content: ContentType[] }) {
  const locale = useCurrentLocale()

  const [currentInView, setCurrentInView] = useState<number>(0)
  const [scrollUp, setScrollUp] = useState(true)
  const [open, setOpen] = useState(false)

  const isInView = (element: HTMLElement) => {
    const rect = element.getBoundingClientRect()
    return rect.top < window.innerHeight && rect.bottom >= 0
  }

  const handleScroll = () => {
    const elements = document.querySelectorAll('.space-y-60')
    elements.forEach((element, index) => {
      if (isInView(element as HTMLElement)) {
        setCurrentInView(index)
      }
    })
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollBy({ top: 0 })
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className='container px-0 md:px-1-cols-vw lg:px-0'>
      <div className='w-full px-0 md:px-gutter lg:px-0'>
        <div className='w-full lg:flex relative h-auto'>
          <div className='hidden lg:block w-3-cols-vw mr-gutter sticky mt-96 top-96 self-start'>
            <p className='f-heading-5'>Specialized Areas</p>
            <div className='mt-32'>
              {content.slice(1, content.length).map((item, index) => (
                <div
                  key={index}
                  className={`px-16 py-12 f-ui-1 border-l-4 box-border transition-all delay-150 duration-0 ${
                    index + 1 === currentInView ||
                    (currentInView === 0 && index === 0)
                      ? 'border-secondary'
                      : 'border-primary'
                  }`}
                >
                  <a href={`#${item.name.en.toLowerCase()}`}>
                    {item.name[locale]}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div
            className={`w-full block lg:hidden sticky left-0 transition-all z-[5]  ${
              scrollUp ? 'top-0' : 'top-0'
            }`}
          >
            <div className='breakout relative'>
              <div
                className='flex items-center justify-between w-full px-margin py-16 bg-secondary border-b border-primary'
                onClick={() => setOpen(!open)}
              >
                <p className='truncate'>
                  {currentInView !== 0
                    ? content[currentInView!].name[locale]
                    : content[1].name[locale]}
                </p>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='flex-shrink-none'
                >
                  <path d='M17.5 3.75H2.5V5H17.5V3.75Z' fill='#ec008c' />
                  <path d='M17.5 15H2.5V16.25H17.5V15Z' fill='#ec008c' />
                  <path d='M17.5 7.5H2.5V8.75H17.5V7.5Z' fill='#ec008c' />
                  <path d='M17.5 11.25H2.5V12.5H17.5V11.25Z' fill='#ec008c' />
                </svg>
              </div>
              <AnimatePresence mode='wait'>
                {open && (
                  <motion.div
                    initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
                    animate={{
                      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'
                    }}
                    exit={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
                    transition={{ duration: '0.5', ease: 'easeOut' }}
                    className='w-full bg-primary absolute top-[57px]'
                  >
                    {content.slice(1, content.length).map((item, index) => (
                      <div
                        key={index}
                        className='text-secondary py-[15px] border-b border-primary'
                      >
                        <a
                          className='px-margin truncate overflow-hidden'
                          onClick={() => setOpen(false)}
                          href={`#${item.name.en.toLowerCase()}`}
                        >
                          {item.name[locale]}
                        </a>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          <div className='lg:w-9-cols-vw space-y-48 py-96'>
            {content.map((x, index) => {
              return (
                <div
                  key={index}
                  id={x.name.en.toLowerCase()}
                  className='space-y-60'
                >
                  {index !== 0 && (
                    <div className='f-heading-1 pt-48 border-t border-primary w-4-cols md:w-6-cols-vw'>
                      <p>{x.name[locale]}</p>
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
                        case 'threeFeature': {
                          return <ThreeFeature key={index} item={item} />
                        }
                        case 'threeStep': {
                          return <ThreeStep key={index} item={item} />
                        }
                        case 'accordion': {
                          return <Accordion key={index} item={item} />
                        }
                        case 'listImage': {
                          return <ListImage key={index} item={item} />
                        }
                        case 'linkImage': {
                          return <LinkImage key={index} item={item} />
                        }
                        case 'photo': {
                          return <Photo key={index} item={item} />
                        }
                        case 'logo': {
                          return <Logo key={index} item={item} />
                        }
                        case 'fileDownlaod': {
                          return <FileDownload key={index} item={item} />
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
