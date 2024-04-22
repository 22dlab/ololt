'use client'

import Link from 'next/link'
import Image from 'next/image'

import { WebsiteCarbonBadge } from 'react-websitecarbon-badge'

export default function Footer() {
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

  const socialLinks = [
    {
      icon: '/icon/facebook.svg',
      label: 'Facebook',
      link: '/'
    },
    {
      icon: '/icon/linkedin.svg',
      label: 'LinkedIn',
      link: '/'
    },
    {
      icon: '/icon/email.svg',
      label: 'contact@cccmdc.mn',
      link: '/'
    }
  ]

  const date = new Date()
  const year = date.getFullYear()

  return (
    <footer className='w-full bg-cool-gray-100 py-48 space-y-48'>
      <div className='container flex'>
        <div className='w-1/2-cols mr-gutter flex flex-col justify-between'>
          <Link href='/'>
            <Image
              src='/logo/logo-en-dark.svg'
              height={60}
              width={156}
              alt='logo'
            />
          </Link>
          {/* <div className='flex justify-start text-inverse'>
            <WebsiteCarbonBadge co2='0.12' percentage='89' />
          </div> */}
        </div>
        <div className='w-1/2-cols flex text-inverse f-ui-1'>
          <div className='w-2-cols-vw mr-gutter flex flex-col space-y-8'>
            {links.slice(3, 9).map((item, index) => (
              <Link key={index} href={item.link}>
                {item.en}
              </Link>
            ))}
          </div>
          <div className='w-2-cols-vw mr-gutter flex flex-col space-y-8'>
            {links.slice(0, 3).map((item, index) => (
              <Link key={index} href={item.link}>
                {item.en}
              </Link>
            ))}
          </div>
          <div className='w-2-cols-vw flex flex-col space-y-8'>
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                <div className='flex items-center space-x-4'>
                  <Image src={item.icon} height={16} width={16} alt='social' />
                  <p>{item.label}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className='container flex text-cool-gray-40 border-t border-secondary pt-16 f-caption-1'>
        <div className='w-1/2-cols mr-gutter'>
          ©{year} Ololt. All rights reserved.
        </div>
        <div className='w-1/2-cols'>
          <a>Website by 22DesignLab</a>
        </div>
      </div>
    </footer>
  )
}
