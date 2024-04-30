'use client'

import Image from 'next/image'

import BaseButton from '@/components/BaseButton'
import { useCurrentLocale } from '@/locale/client'

function Input({
  label,
  name,
  placeholder
}: {
  label: string
  name: string
  placeholder: string
}) {
  return (
    <div className='w-full flex flex-col'>
      <label className='f-ui-2'>{label}</label>
      <input
        type='text'
        name={name}
        placeholder={placeholder}
        className='mt-16 bg-[#ffffff00] outline-none border-b border-secondary text-secondary py-16 f-ui-1'
        required
      />
    </div>
  )
}

export default function Contact() {
  const locale = useCurrentLocale()

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

  return (
    <div className='pt-[78px] pb-[112px] container md:px-1-cols-vw lg:px-0'>
      <div className='lg:flex px-0 md:px-gutter lg:px-0 space-y-72 md:space-y-[84px] lg:space-y-0'>
        <div className='lg:w-1/2-cols lg:mr-gutter'>
          <div className='space-y-8'>
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
        <div className='lg:w-1/2-cols grid grid-cols-1 lg:grid-cols-2 gap-x-gutter gap-y-40'>
          <Input
            label={locale === 'en' ? 'First Name' : 'Овог'}
            name='firstname'
            placeholder={locale === 'en' ? 'Your first name' : 'Таны овог'}
          />
          <Input
            label={locale === 'en' ? 'Last Name' : 'Нэр'}
            name='lastname'
            placeholder={locale === 'en' ? 'Your last name' : 'Таны нэр'}
          />
          <Input
            label={locale === 'en' ? 'Organisation' : 'Байгууллага'}
            name='firstname'
            placeholder={
              locale === 'en' ? 'Your organisation' : 'Таны байгууллага'
            }
          />
          <Input
            label={locale === 'en' ? 'Email address' : 'Цахим шуудан'}
            name='firstname'
            placeholder={
              locale === 'en' ? 'Your first name' : 'Таны цахим шуудан'
            }
          />

          <div className='col-span-1 lg:col-span-2'>
            <p className='f-ui-2'>
              {locale === 'en'
                ? 'Leave your comments'
                : 'Сэтгэгдэлээ үлдээнэ үү.'}
            </p>
            <textarea
              style={{ resize: 'none' }}
              rows={6}
              placeholder={locale === 'en' ? 'Your comment' : 'Таны сэтгэгдэл'}
              className='w-full mt-16 bg-[#ffffff00] border p-16 border-secondary'
            />
          </div>
          <button type='submit'>
            <BaseButton
              type='primary'
              label={locale === 'en' ? 'Send message' : 'Илгээх'}
              icon
            />
          </button>
        </div>
      </div>
    </div>
  )
}
