'use client'

import { useChangeLocale, useCurrentLocale } from '@/locale/client'

export default function Locale() {
  const changeLocale = useChangeLocale()
  const locale = useCurrentLocale()

  return (
    <div className='uppercase h-full f-ui-1 relative group cursor-pointer'>
      <div className='flex items-center space-x-4 h-full p-16'>
        <p>{locale}</p>
        <svg
          width='16'
          height='16'
          viewBox='0 0 16 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='group-hover:rotate-180 transition-all duration-300'
        >
          <path
            d='M8 11L3 6.00001L3.7 5.30001L8 9.60001L12.3 5.30001L13 6.00001L8 11Z'
            fill='#4D5358'
          />
        </svg>
      </div>
      <div className='z-20 -translate-x-1/2 left-1/2 absolute opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto duration-300 transition-opacity'>
        <div className='flex flex-col bg-primary shadow-[0_2px_6px_0px_rgba(0,0,0,0.3)]'>
          <button
            onClick={() => changeLocale('en')}
            className='hover:text-next-red transition-colors duration-300 py-12 px-16'
          >
            English
          </button>
          <button
            onClick={() => changeLocale('mn')}
            className='hover:text-next-red transition-colors duration-300 py-12 px-16'
          >
            Монгол
          </button>
        </div>
      </div>
    </div>
  )
}
