import Image from 'next/image'

import { ItemType } from '@/type'
import BaseButton from '@/components/BaseButton'

export default function FileDownload({ item }: { item: ItemType }) {
  return (
    <div className='lg:w-6-cols-vw space-y-32'>
      <p className='f-heading-4'>{item.title?.en}</p>
      <div className='space-y-16'>
        {item.items?.map((x, index) => (
          <div
            key={index}
            className='flex items-center justify-between bg-secondary p-16 space-x-16'
          >
            <Image src='/icon/pdf.svg' height={24} width={24} alt='pdf' />
            <div className='flex-grow'>
              <p className='f-ui-2'>{x.label?.en}</p>
              <p className='f-ui-1'>{x.sublabel?.en}</p>
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
