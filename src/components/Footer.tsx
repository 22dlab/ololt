'use client'

import Link from 'next/link'
import Image from 'next/image'

import { WebsiteCarbonBadge } from 'react-websitecarbon-badge'
import { useCurrentLocale } from '@/locale/client'

export default function Footer() {
  const locale = useCurrentLocale()

  const links = [
    {
      en: 'About us',
      mn: 'Бидний тухай',
      link: '/about'
    },
    {
      en: 'News & Insights',
      mn: 'Мэдээ, мэдээлэл',
      link: '/news'
    },
    {
      en: 'Contact us',
      mn: 'Бидэнтэй холбогдох',
      link: '/contact'
    },
    {
      en: 'Climate change',
      mn: 'Уур амьсгалын өөрчлөлт',
      link: '/climate-change'
    },
    {
      en: 'Energy Certification',
      mn: 'Эрчим хүчний гэрчилгээ',
      link: '/energy-certification'
    },
    {
      en: 'Carbon Market',
      mn: 'Нүүрстөрөгчийн зах зээл',
      link: '/carbon-market'
    },
    {
      en: 'ESG',
      mn: 'БОНЗ',
      link: '/esg'
    },
    {
      en: 'GHG Accounting',
      mn: 'Хүлэмжийн хийн тооллого',
      link: '/ghg'
    },
    {
      en: 'Academy',
      mn: 'Aкадеми',
      link: '/academy'
    }
  ]

  const socialLinks = [
    {
      icon: '/icon/facebook.svg',
      label: 'Facebook',
      link: 'https://www.facebook.com/profile.php?id=61553652253086'
    },
    {
      icon: '/icon/linkedin.svg',
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/company/ololt-climate-change-carbon-market-development-center/'
    },
    {
      icon: '/icon/email.svg',
      label: 'contact@cccmdc.mn',
      link: 'mailto:contact@cccmdc.mn'
    }
  ]

  const date = new Date()
  const year = date.getFullYear()

  return (
    <footer className='w-full bg-cool-gray-100 py-48 space-y-48'>
      <div className='container lg:flex space-y-16 lg:space-y-0'>
        <div className='w-full lg:w-1/2-cols lg:mr-gutter flex flex-col justify-between pb-60'>
          <Link href='/'>
            <Image
              src={
                locale === 'mn'
                  ? '/logo/logo-en-dark.svg'
                  : '/logo/logo-mn-dark.svg'
              }
              height={60}
              width={locale === 'en' ? 156 : 212}
              alt='logo'
            />
          </Link>
          {/* <div className='flex justify-start text-inverse'>
            <WebsiteCarbonBadge co2='0.12' percentage='89' />
          </div> */}
        </div>
        <div className='w-full lg:w-1/2-cols grid grid-cols-1 md:grid-cols-3 gap-x-gutter text-inverse f-ui-1 border-none md:border-t lg:border-none border-[#4D5358] lg:py-0 divide-y divide-[#4D5358] md:divide-none'>
          <div className='w-full lg:w-2-cols-vw flex flex-col space-y-8 py-24 lg:py-0'>
            {links.slice(3, 9).map((item, index) => (
              <Link key={index} href={item.link}>
                {item[locale]}
              </Link>
            ))}
          </div>
          <div className='w-full lg:w-2-cols-vw flex flex-col space-y-8 py-24 lg:py-0'>
            {links.slice(0, 3).map((item, index) => (
              <Link key={index} href={item.link}>
                {item[locale]}
              </Link>
            ))}
          </div>
          <div className='w-full lg:w-2-cols-vw flex flex-col space-y-8 py-24 lg:py-0'>
            {socialLinks.map((item, index) => {
              if (index !== 2) {
                return (
                  <a
                    key={index}
                    href={item.link}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <div className='flex items-center space-x-4'>
                      <Image
                        src={item.icon}
                        height={16}
                        width={16}
                        alt='social'
                      />
                      <p>{item.label}</p>
                    </div>
                  </a>
                )
              } else {
                return (
                  <a key={index} href={item.link}>
                    <div className='flex items-center space-x-4'>
                      <Image
                        src={item.icon}
                        height={16}
                        width={16}
                        alt='social'
                      />
                      <p>{item.label}</p>
                    </div>
                  </a>
                )
              }
            })}
          </div>
        </div>
      </div>
      <div className='container flex text-cool-gray-40 border-t border-secondary pt-16 f-caption-1'>
        <div className='w-1/2-cols mr-gutter'>
          ©{year}{' '}
          {locale === 'en'
            ? 'Ololt. All rights reserved.'
            : 'Ололт. Бүх эрх хуулиар хамгаалагдсан.'}
        </div>
        <div className='w-1/2-cols'>
          <a
            href='https://www.22dlab.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            {locale === 'en'
              ? 'Website by 22DesignLab'
              : 'Вебсайтыг 22DesignLab'}
          </a>
        </div>
      </div>
    </footer>
  )
}
