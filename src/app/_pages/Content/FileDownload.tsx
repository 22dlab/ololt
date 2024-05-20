import Image from 'next/image'

import { ItemType } from '@/type'
import BaseButton from '@/components/BaseButton'

import { useCurrentLocale } from '@/locale/client'

export default function FileDownload({ item }: { item: ItemType }) {
  const locale = useCurrentLocale()

  return (
    <div className='lg:w-6-cols-vw space-y-32'>
      <p className='f-heading-4'>{item.title?.[locale]}</p>
      <div className='space-y-16'>
        {item.items?.map((x, index) => (
          <div
            key={index}
            className='flex items-center justify-between bg-secondary p-16 space-x-16'
          >
            <Image src='/icon/pdf.svg' height={24} width={24} alt='pdf' />
            <div className='flex-grow'>
              <p className='f-ui-2'>{x.label?.[locale]}</p>
              <p className='f-ui-1'>{x.sublabel?.[locale]}</p>
            </div>
            <a
              href={x.file?.asset?.url}
              target='_blank'
              rel='noopener noreferrer'
            >
              <BaseButton type='primary' label='Download' download />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
