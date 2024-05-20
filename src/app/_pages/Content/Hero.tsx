import SanityImage from '@/components/SanityImage'
import { getCurrentLocale } from '@/locale/server'
import { ImageType } from '@/type'

export default function Hero({
  thumbnail,
  title
}: {
  thumbnail: ImageType
  title: { en: string; mn: string }
}) {
  const locale = getCurrentLocale()

  return (
    <div className='w-full'>
      <div className='w-full h-[400px] relative'>
        <div className='container h-full flex items-end py-[56px] lg:py-72 absolute inset-0'>
          <p className='f-display-2 text-inverse'>{title[locale]}</p>
        </div>
        <div className='w-full h-full bg-gradient-to-b from-transparent to-[#0000004D]' />
        <SanityImage
          image={thumbnail}
          alt={title.en}
          className='object-cover -z-[1]'
        />
      </div>
    </div>
  )
}
