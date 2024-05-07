import { getCurrentLocale } from '@/locale/server'

export default function Hero() {
  const locale = getCurrentLocale()

  return (
    <div className='w-full h-[400px] relative'>
      <div className='w-full h-full bg-tertiary' />

      <div className='absolute bottom-[56px] lg:bottom-[72px] w-full'>
        <div className='container'>
          <div className='lg:w-6-cols-vw'>
            <p className='text-primary f-display-2'>
              {locale === 'en' ? 'News & Insights' : 'Мэдээ, мэдээлэл'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
