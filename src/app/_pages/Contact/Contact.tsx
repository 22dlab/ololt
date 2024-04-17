'use client'

import Image from 'next/image'

import BaseButton from '@/components/BaseButton'

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
      />
    </div>
  )
}

export default function Contact() {
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

  return (
    <div className='pt-[78px] pb-[112px] container flex'>
      <div className='w-1/2-cols mr-gutter'>
        <p className='f-body-1 w-3-cols-vw'>
          Please double-check your email address fand choose the subject you
          want to contact with us over so then we can connect you with the
          relevant professional from our team.
        </p>
        <div className='space-y-8 mt-48'>
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
      <div className='w-1/2-cols grid grid-cols-2 gap-x-gutter gap-y-40'>
        <Input
          label='First name (Required)'
          name='firstname'
          placeholder='Your first name'
        />

        <Input
          label='Last name (Required)'
          name='lastname'
          placeholder='Your first name'
        />

        <Input
          label='Organization'
          name='firstname'
          placeholder='Your organization'
        />

        <Input
          label='Email address (Required)'
          name='firstname'
          placeholder='Your email address'
        />
        <div className='col-span-2'>
          <p className='f-ui-2'>Leave your comments (Required)</p>
          <textarea
            style={{ resize: 'none' }}
            rows={6}
            placeholder='Your comments here'
            className='w-full mt-16 bg-[#ffffff00] border p-16 border-secondary'
          />
        </div>
        <button type='submit'>
          <BaseButton type='primary' label='Send message' icon />
        </button>
      </div>
    </div>
  )
}
