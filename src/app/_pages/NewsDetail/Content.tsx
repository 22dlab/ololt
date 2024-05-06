'use client'

import { NewsType } from '@/type'

import { PortableText, PortableTextComponents } from 'next-sanity'

import Image from 'next/image'
import SanityImage from '@/components/SanityImage'

import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton
} from 'react-share'

import { useCurrentLocale } from '@/locale/client'

import { getType } from '@/hooks/getType'

export default function Content({ news }: { news: NewsType }) {
  const locale = useCurrentLocale()

  const url = 'https://www.cccmdc.mn/news' + news.slug.current

  const components: PortableTextComponents = {
    types: {
      image: (children: any) => (
        <div className='w-full aspect-[2/1] relative'>
          <SanityImage
            image={children.value}
            className='object-center object-cover'
            alt='image'
          />
        </div>
      )
    },
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
    <div className='w-full relative py-48 lg:py-72'>
      <div className='hidden lg:block w-full h-[400px] bg-secondary top-0 absolute z-[-1]' />
      <div className='container lg:px-1-cols-vw'>
        <div className='lg:px-gutter'>
          <div className='w-full aspect-[2/1] relative'>
            <SanityImage
              image={news.thumbnail}
              className='object-cover object-center'
              alt={news.title}
              priority
            />
          </div>
        </div>
      </div>
      <div className='container md:px-1-cols-vw'>
        <div className='md:px-gutter'>
          <div className='mt-40 lg:mt-96 w-full lg:flex divide-y divide-[#C1C7CD] lg:divide-none space-y-[40px] lg:space-y-0'>
            <div className='w-full lg:w-2-cols-vw mr-gutter space-y-8'>
              <p className='f-tag-1 text-accent'>
                {getType(news.type, locale)}
              </p>
              <p className='f-caption-1'>
                <span className='text-secondary'>
                  {locale === 'en' ? 'Date:' : 'Огноо:'}
                </span>{' '}
                {news.date}
              </p>
              <p className='f-caption-1'>
                <span className='text-secondary'>
                  {locale === 'en' ? 'Written by:' : 'Нийтлэл бичсэн:'}
                </span>{' '}
                {news.author}
              </p>
            </div>
            <div className='w-full lg:w-6-cols-vw mr-gutter f-body-1 space-y-16 pt-24 md:pt-40 lg:pt-0'>
              <p className='f-heading-1 mb-40 lg:mb-60'>{news.title}</p>
              <PortableText value={news.content} components={components} />
            </div>
            <div className='w-full lg:w-2-cols flex lg:block justify-between pt-24 md:pt-40 lg:pt-0'>
              <p className='w-1/2-cols lg:w-full text-left lg:text-right caption-1 text-secondary'>
                {locale === 'en' ? 'Share it' : 'Хуваалцах'}
              </p>
              <div className='w-1/2-cols lg:w-full flex justify-start lg:justify-end mt-8 space-x-8'>
                <FacebookShareButton url={url}>
                  <Image
                    src='/icon/facebook.svg'
                    height={20}
                    width={20}
                    alt='facebook'
                  />
                </FacebookShareButton>
                <LinkedinShareButton url={url}>
                  <Image
                    src='/icon/linkedin.svg'
                    height={20}
                    width={20}
                    alt='Linkedin'
                  />
                </LinkedinShareButton>
                <EmailShareButton url={url}>
                  <Image
                    src='/icon/email.svg'
                    height={20}
                    width={20}
                    alt='Email'
                  />
                </EmailShareButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
