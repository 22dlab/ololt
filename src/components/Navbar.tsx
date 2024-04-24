'use client'

import Link from 'next/link'
import Image from 'next/image'

import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

import Navlink from './Navlink'
import Locale from './Locale'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrollUp, setScrollUp] = useState(true)

  useEffect(() => {
    let prevScroll = window.scrollY
    window.onscroll = () => {
      let currentScroll = window.scrollY
      if (prevScroll < currentScroll) {
        setScrollUp(false)
      } else {
        setScrollUp(true)
      }
      prevScroll = currentScroll
    }
  }, [scrollUp])

  const pathname = usePathname()

  const links = [
    {
      en: 'About us',
      mn: '',
      link: '/about'
    },
    {
      en: 'News & Insights',
      mn: '',
      link: '/news'
    },
    {
      en: 'Contact us',
      mn: '',
      link: '/contact'
    },
    {
      en: 'Climate change',
      mn: '',
      link: '/climate-change'
    },
    {
      en: 'Energy Certification',
      mn: '',
      link: '/energy-certification'
    },
    {
      en: 'Carbon Market',
      mn: '',
      link: '/carbon-market'
    },
    {
      en: 'ESG',
      mn: '',
      link: '/esg'
    },
    {
      en: 'GHG Accounting',
      mn: '',
      link: '/ghg'
    },
    {
      en: 'Academy',
      mn: '',
      link: '/academy'
    }
  ]

  return (
    <nav
      className={`${
        scrollUp ? 'translate-y-0' : '-translate-y-[100%]'
      } fixed top-0 z-10 w-full transition-transform duration-300 delay-150 ease-in-out bg-primary border-b border-primary`}
    >
      <div className='container flex justify-between h-48 lg:h-96'>
        <div className='py-12 lg:py-[18px] flex items-center'>
          <button
            onClick={() => setOpen(!open)}
            className='block lg:hidden mr-[22px]'
          >
            {open ? (
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M15 5.875L14.125 5L10 9.125L5.875 5L5 5.875L9.125 10L5 14.125L5.875 15L10 10.875L14.125 15L15 14.125L10.875 10L15 5.875Z'
                  fill='#161616'
                />
              </svg>
            ) : (
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M17.5 3.75H2.5V5H17.5V3.75Z' fill='#161616' />
                <path d='M17.5 15H2.5V16.25H17.5V15Z' fill='#161616' />
                <path d='M17.5 7.5H2.5V8.75H17.5V7.5Z' fill='#161616' />
                <path d='M17.5 11.25H2.5V12.5H17.5V11.25Z' fill='#161616' />
              </svg>
            )}
          </button>
          <Link href='/'>
            <Image
              className='block lg:hidden'
              src='/logo/logo-en-small.svg'
              height={25}
              width={96}
              alt='logo'
            />
            <Image
              className='hidden lg:block'
              src='/logo/logo-en.svg'
              height={60}
              width={156}
              alt='logo'
            />
          </Link>
        </div>
        <div className='h-full lg:hidden flex items-center'>
          <button>
            <svg
              width='48'
              height='48'
              viewBox='0 0 48 48'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M32.1251 31.2412L27.4051 26.5212C28.5393 25.1595 29.1049 23.413 28.9842 21.645C28.8635 19.8769 28.0658 18.2235 26.7571 17.0286C25.4483 15.8338 23.7293 15.1894 21.9577 15.2297C20.186 15.2699 18.498 15.9917 17.2449 17.2448C15.9918 18.4979 15.2701 20.1858 15.2298 21.9575C15.1895 23.7292 15.8339 25.4482 17.0288 26.7569C18.2236 28.0657 19.8771 28.8633 21.6451 28.984C23.4131 29.1047 25.1596 28.5392 26.5213 27.405L31.2413 32.125L32.1251 31.2412ZM16.5001 22.125C16.5001 21.0125 16.83 19.925 17.4481 18.9999C18.0662 18.0749 18.9447 17.3539 19.9726 16.9282C21.0004 16.5025 22.1314 16.3911 23.2225 16.6081C24.3137 16.8252 25.316 17.3609 26.1026 18.1476C26.8893 18.9342 27.425 19.9365 27.6421 21.0276C27.8591 22.1188 27.7477 23.2498 27.322 24.2776C26.8962 25.3055 26.1753 26.184 25.2502 26.802C24.3252 27.4201 23.2377 27.75 22.1251 27.75C20.6338 27.7484 19.204 27.1552 18.1495 26.1007C17.095 25.0461 16.5018 23.6164 16.5001 22.125Z'
                fill='#161616'
              />
            </svg>
          </button>
          <Locale />
        </div>
        <div className='h-full hidden lg:block'>
          <div className='h-48 flex justify-end'>
            {links.slice(0, 3).map((item, index) => (
              <Link href={item.link} key={index} className='h-full'>
                <Navlink label={item.en} active={pathname === item.link} top />
              </Link>
            ))}
            <button>
              <svg
                width='48'
                height='48'
                viewBox='0 0 48 48'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M32.1251 31.2412L27.4051 26.5212C28.5393 25.1595 29.1049 23.413 28.9842 21.645C28.8635 19.8769 28.0658 18.2235 26.7571 17.0286C25.4483 15.8338 23.7293 15.1894 21.9577 15.2297C20.186 15.2699 18.498 15.9917 17.2449 17.2448C15.9918 18.4979 15.2701 20.1858 15.2298 21.9575C15.1895 23.7292 15.8339 25.4482 17.0288 26.7569C18.2236 28.0657 19.8771 28.8633 21.6451 28.984C23.4131 29.1047 25.1596 28.5392 26.5213 27.405L31.2413 32.125L32.1251 31.2412ZM16.5001 22.125C16.5001 21.0125 16.83 19.925 17.4481 18.9999C18.0662 18.0749 18.9447 17.3539 19.9726 16.9282C21.0004 16.5025 22.1314 16.3911 23.2225 16.6081C24.3137 16.8252 25.316 17.3609 26.1026 18.1476C26.8893 18.9342 27.425 19.9365 27.6421 21.0276C27.8591 22.1188 27.7477 23.2498 27.322 24.2776C26.8962 25.3055 26.1753 26.184 25.2502 26.802C24.3252 27.4201 23.2377 27.75 22.1251 27.75C20.6338 27.7484 19.204 27.1552 18.1495 26.1007C17.095 25.0461 16.5018 23.6164 16.5001 22.125Z'
                  fill='#161616'
                />
              </svg>
            </button>
            <Locale />
          </div>
          <div className='h-48 flex justify-end'>
            {links.slice(3, 9).map((item, index) => (
              <Link href={item.link} key={index} className='h-full'>
                <Navlink label={item.en} active={pathname === item.link} />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <AnimatePresence mode='wait'>
        {open && (
          <motion.div
            initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
            animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
            exit={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
            transition={{ duration: '0.5', ease: 'easeOut' }}
            className='fixed mt-[49px] inset-0 w-screen min-h-screen overflow-y-scroll bg-white text-primary'
          >
            <div className='h-[calc(100vh+1px)] pt-32 pb-[192px] space-y-64 flex flex-col justify-between'>
              <div className='divide-y divide-[#C1C7CD] border-y border-primary'>
                {links.slice(3, 9).map((item, index) => (
                  <div
                    key={index}
                    className='f-ui-1 text-secondary'
                    onClick={() => setOpen(false)}
                  >
                    <Link href={item.link}>
                      <div className='container py-16'>
                        <p>{item.en}</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
              <div className='divide-y divide-[#C1C7CD] border-y border-primary'>
                {links.slice(0, 3).map((item, index) => (
                  <div
                    key={index}
                    className='f-ui-1 text-secondary'
                    onClick={() => setOpen(false)}
                  >
                    <Link href={item.link}>
                      <div className='container py-16'>
                        <p>{item.en}</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
