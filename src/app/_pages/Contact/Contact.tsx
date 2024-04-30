'use client'

import { useRef, useState } from 'react'

import Image from 'next/image'

import BaseButton from '@/components/BaseButton'

import { useCurrentLocale } from '@/locale/client'

import emailjs from '@emailjs/browser'

function Input({
  label,
  type,
  name,
  placeholder,
  onChange
}: {
  label: string
  type: string
  name: string
  placeholder: string
  onChange: (event: any) => void
}) {
  return (
    <div className='w-full flex flex-col'>
      <label className='f-ui-2'>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className='mt-16 bg-[#ffffff00] outline-none border-b border-secondary text-secondary py-16 f-ui-1'
        required
        onChange={onChange}
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

  const form = useRef<HTMLFormElement>(null)

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    org: '',
    email: '',
    comment: ''
  })

  const [errors, setErrors] = useState({
    firstname: false,
    lastname: false,
    org: false,
    email: false,
    comment: false
  })

  const [submit, setSubmit] = useState(false)

  const handleValidation = () => {
    let tmp: any = {}
    let isValid = true

    if (formData.firstname.length <= 0) {
      tmp['firstname'] = true
      isValid = false
    }
    if (formData.lastname.length <= 0) {
      tmp['lastname'] = true
      isValid = false
    }
    if (formData.org.length <= 0) {
      tmp['org'] = true
      isValid = false
    }
    if (formData.email.length <= 0) {
      tmp['email'] = true
      isValid = false
    }
    if (formData.comment.length <= 0) {
      tmp['comment'] = true
      isValid = false
    }

    setErrors({ ...tmp })
    return isValid
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()

    const validator = handleValidation()
    if (validator === true) {
      emailjs
        .sendForm('service_c5f6da6', 'template_y319z8v', form.current!, {
          publicKey: '45tCRdf1BY8RVeD33'
        })
        .then(
          (result) => {
            console.log('Success')
          },
          (error) => {
            console.log(error.text)
          }
        )
      setFormData({
        firstname: '',
        lastname: '',
        org: '',
        email: '',
        comment: ''
      })
      setSubmit(true)
    }
  }

  const handleInputChange = (event: any) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

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

        <form
          ref={form}
          method='post'
          onSubmit={handleSubmit}
          className='lg:w-1/2-cols grid grid-cols-1 lg:grid-cols-2 gap-x-gutter gap-y-40'
        >
          {/* {!submit && (
            <div className='col-span-1 lg:col-span-2'>
              <p className='f-body-1'>Successfully submitted!</p>
            </div>
          )} */}
          <Input
            label={locale === 'en' ? 'First Name' : 'Овог'}
            name='firstname'
            type='text'
            placeholder={locale === 'en' ? 'Your first name' : 'Таны овог'}
            onChange={(event) => handleInputChange(event)}
          />
          <Input
            label={locale === 'en' ? 'Last Name' : 'Нэр'}
            name='lastname'
            type='text'
            placeholder={locale === 'en' ? 'Your last name' : 'Таны нэр'}
            onChange={(event) => handleInputChange(event)}
          />
          <Input
            label={locale === 'en' ? 'Organisation' : 'Байгууллага'}
            name='org'
            type='text'
            placeholder={
              locale === 'en' ? 'Your organisation' : 'Таны байгууллага'
            }
            onChange={(event) => handleInputChange(event)}
          />
          <Input
            label={locale === 'en' ? 'Email address' : 'Цахим шуудан'}
            name='email'
            type='email'
            placeholder={
              locale === 'en' ? 'Your first name' : 'Таны цахим шуудан'
            }
            onChange={(event) => handleInputChange(event)}
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
              name='comment'
              placeholder={locale === 'en' ? 'Your comment' : 'Таны сэтгэгдэл'}
              className='w-full mt-16 bg-[#ffffff00] border p-16 border-secondary'
              onChange={(event) => handleInputChange(event)}
              required
            />
          </div>
          <button type='submit'>
            <BaseButton
              type='primary'
              label={locale === 'en' ? 'Send message' : 'Илгээх'}
              icon
            />
          </button>
        </form>
      </div>
    </div>
  )
}
