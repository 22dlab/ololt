'use client'

import Link from 'next/link'
import Image from 'next/image'

import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

import Navlink from './Navlink'

export default function Navbar() {
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
      <div className='container flex justify-between h-96'>
        <div className='py-[18px]'>
          <Link href='/'>
            <Image src='/logo/logo-en.svg' height={60} width={156} alt='logo' />
          </Link>
        </div>
        <div className='h-full'>
          <div className='h-48 flex justify-end'>
            {links.slice(0, 3).map((item, index) => (
              <Link href={item.link} key={index} className='h-full'>
                <Navlink label={item.en} active={pathname === item.link} top />
              </Link>
            ))}
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
    </nav>
  )
}
