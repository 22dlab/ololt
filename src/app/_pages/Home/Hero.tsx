import Image from 'next/image'

import { getCurrentLocale } from '@/locale/server'

export default function Hero() {
  const locale = getCurrentLocale()

  const items = [
    {
      value: {
        en: '2.46°C',
        mn: '2.46°C'
      },
      label: {
        en: 'Increase in average annual mean surface temperature between 1940-2022',
        mn: '1940 - 2022 оны хооронд жилийн дундаж агаарын температурын өсөлт'
      }
    },
    {
      value: {
        en: '43,081.62 t CO2-eq',
        mn: '43,081.62 мян. т CO2-экв'
      },
      label: {
        en: 'Mongolia’ total CO2 emissions in 2020 (excluding LULUCF)',
        mn: '2020 оны нийт хүлэмжийн хийн ялгарал (газар ашиглалт, газар ашиглалтын өөрчлөлт ба ойн салбарыг тооцоогүй)'
      }
    },
    {
      value: {
        en: '12.83 t CO2-eq',
        mn: '12.83 т CO2-экв'
      },
      label: {
        en: 'Emission per capita in 2020',
        mn: 'Нэг хүнд ногдох хүлэмжийн хийн ялгарал, 2020'
      }
    },
    {
      value: {
        en: '2.8x',
        mn: '2.8 дахин'
      },
      label: {
        en: 'Emission per capita in 2020 is 2.8 times higher than the world average',
        mn: 'Нэг хүнд ногдох хүлэмжийн хийн ялгарлаар дэлхийн дунджаас 2.8 дахин их'
      }
    }
  ]

  return (
    <div className='w-full h-[720px] md:h-[500px] relative'>
      <div className='w-full h-full absolute inset-0 -z-[1]'>
        <div className='w-full h-full relative'>
          <Image
            src='/misc/map.svg'
            className='object-cover object-center hidden lg:block'
            fill
            alt='map'
          />
          <Image
            src='/misc/map-md.svg'
            className='object-cover object-center hidden md:block lg:hidden'
            fill
            alt='map'
          />
          <div className='block md:hidden w-full h-[500px] relative'>
            <Image
              src='/misc/map-sm.svg'
              className='object-cover object-center'
              fill
              alt='map'
            />
          </div>
        </div>
      </div>
      <div className='container h-full flex flex-col justify-between space-y-16'>
        <div className='w-full pt-[138px] md:pt-[68px]'>
          <div className='w-4-cols-vw lg:w-5-cols-vw space-y-24'>
            <p className='f-heading-3'>
              {locale === 'en'
                ? 'Climate Change in Mongolia'
                : 'Монгол Улс дахь Уур Амьсгалын Өөрчлөлт'}
            </p>
            <p className='text-secondary f-body-1'>
              {locale === 'en'
                ? 'Mongolia is experiencing significant impacts of climate change, with a surge in extreme weather events alongside temperature warming.'
                : 'Ойт хээр, хээр, говь цөлийн харилцан адилгүй байгалийн төлөв, бүс нутагт орших Монгол Улсад уур амьсгалын өөрчлөлтөөс үүдэлтэй олон төрлийн эрсдэл, нөлөөлөл бий болж байна.'}
              <br />
              <br />
              {locale === 'en'
                ? 'Despite its GHG emissions comprising just 0.09% of the global total in 2020, its per capita emissions exceed the global average by 2.8 times.'
                : 'Дэлхийн нийт хүлэмжийн хийн ялгаралд Монгол Улсын оруулж буй хувь нэмэр үл ялих ч - 2020 оны байдлаар 0.09% - нэг хүнд ногдох хүлэмжийн хийн ялгарал дэлхийн дунджаас 2.8 дахин их байна.'}
            </p>
          </div>
        </div>
        <div className='w-4-cols-vw md:w-8-cols-vw grid grid-cols-2 md:grid-cols-4 gap-gutter'>
          {items.map((item, index) => (
            <div
              key={index}
              className='w-full border-l-2 border-secondary px-16 py-8 flex flex-col justify-between space-y-24'
            >
              <div className='f-heading-3'>
                {(index === 0 || index === 3) && (
                  <span className='text-brand-magenta'>↑</span>
                )}
                <span>{item.value[locale]}</span>
              </div>
              <div className='f-ui-1 line-clamp-2 md:line-clamp-none'>
                <p>{item.label[locale]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
