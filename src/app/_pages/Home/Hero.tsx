'use client'

import Image from 'next/image'
import dynamic from 'next/dynamic'

import { useCurrentLocale } from '@/locale/client'

const World = dynamic(() => import('@/components/Globe').then((m) => m.World), {
  ssr: false
})

export default function Hero() {
  const locale = useCurrentLocale()

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

  const globeConfig = {
    pointSize: 1,
    globeColor: '#008000',
    showAtmosphere: false,
    atmosphereColor: '#FFFFFF',
    atmosphereAltitude: 1,
    emissive: '#FFFFFF',
    emissiveIntensity: 1,
    shininess: 1,
    polygonColor: '#ec008c',
    ambientLight: '#FFFFFF',
    directionalLeftLight: '#FFFFFF',
    directionalTopLight: '#FFFFFF',
    pointLight: '#FFFFFF',
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 47.992, lng: 106.915 },
    autoRotate: false,
    autoRotateSpeed: 0.3
  }
  const colors = ['#EC008C']
  const sampleArcs = [
    {
      order: 1,
      startLat: 47.992,
      startLng: 106.915,
      endLat: -1.303396,
      endLng: 36.852443,
      arcAlt: 0.5,
      color: colors[0]
    },
    {
      order: 2,
      startLat: 47.992,
      startLng: 106.915,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.2,
      color: colors[0]
    },
    {
      order: 2,
      startLat: 47.992,
      startLng: 106.915,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.3,
      color: colors[0]
    },
    {
      order: 2,
      startLat: 47.992,
      startLng: 106.915,
      endLat: 36.162809,
      endLng: -115.119411,
      arcAlt: 0.3,
      color: colors[0]
    },
    {
      order: 3,
      startLat: 47.992,
      startLng: 106.915,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[0]
    },
    {
      order: 3,
      startLat: 47.992,
      startLng: 106.915,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.3,
      color: colors[0]
    },
    {
      order: 3,
      startLat: 47.992,
      startLng: 106.915,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[0]
    },
    {
      order: 4,
      startLat: 47.992,
      startLng: 106.915,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.5,
      color: colors[0]
    },
    {
      order: 4,
      startLat: 47.992,
      startLng: 106.915,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.7,
      color: colors[0]
    },
    {
      order: 4,
      startLat: 47.992,
      startLng: 106.915,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.1,
      color: colors[0]
    },
    {
      order: 5,
      startLat: 47.992,
      startLng: 106.915,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[0]
    },
    {
      order: 5,
      startLat: 47.992,
      startLng: 106.915,
      endLat: -33.8688,
      endLng: 151.2093,
      arcAlt: 0.2,
      color: colors[0]
    },
    {
      order: 5,
      startLat: 47.992,
      startLng: 106.915,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.2,
      color: colors[0]
    },
    {
      order: 6,
      startLat: 47.992,
      startLng: 106.915,
      endLat: 1.094136,
      endLng: -63.34546,
      arcAlt: 0.7,
      color: colors[0]
    },
    {
      order: 6,
      startLat: 47.992,
      startLng: 106.915,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.1,
      color: colors[0]
    },
    {
      order: 6,
      startLat: 47.992,
      startLng: 106.915,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[0]
    },
    {
      order: 7,
      startLat: 47.992,
      startLng: 106.915,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.1,
      color: colors[0]
    },
    {
      order: 7,
      startLat: 47.992,
      startLng: 106.915,
      endLat: 52.52,
      endLng: 13.405,
      arcAlt: 0.1,
      color: colors[0]
    },
    {
      order: 7,
      startLat: 47.992,
      startLng: 106.915,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[0]
    },
    {
      order: 8,
      startLat: 47.992,
      startLng: 106.915,
      endLat: -33.936138,
      endLng: 18.436529,
      arcAlt: 0.2,
      color: colors[0]
    },
    {
      order: 8,
      startLat: 47.992,
      startLng: 106.915,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.2,
      color: colors[0]
    },
    {
      order: 8,
      startLat: 47.992,
      startLng: 106.915,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.5,
      color: colors[0]
    },
    {
      order: 9,
      startLat: 47.992,
      startLng: 106.915,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[0]
    },
    {
      order: 9,
      startLat: 47.992,
      startLng: 106.915,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.7,
      color: colors[0]
    },
    {
      order: 9,
      startLat: 47.992,
      startLng: 106.915,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.5,
      color: colors[0]
    },
    {
      order: 10,
      startLat: 47.992,
      startLng: 106.915,
      endLat: 28.6139,
      endLng: 77.209,
      arcAlt: 0.7,
      color: colors[0]
    },
    {
      order: 10,
      startLat: 47.992,
      startLng: 106.915,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.3,
      color: colors[0]
    },
    {
      order: 10,
      startLat: 47.992,
      startLng: 106.915,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.3,
      color: colors[0]
    },
    {
      order: 11,
      startLat: 47.992,
      startLng: 106.915,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[0]
    },
    {
      order: 11,
      startLat: 47.992,
      startLng: 106.915,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.2,
      color: colors[0]
    },
    {
      order: 11,
      startLat: 47.992,
      startLng: 106.915,
      endLat: 1.3521,
      endLng: 103.8198,
      arcAlt: 0.2,
      color: colors[0]
    },
    {
      order: 12,
      startLat: 47.992,
      startLng: 106.915,
      endLat: 37.7749,
      endLng: -122.4194,
      arcAlt: 0.1,
      color: colors[0]
    },
    {
      order: 12,
      startLat: 47.992,
      startLng: 106.915,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.2,
      color: colors[0]
    },
    {
      order: 12,
      startLat: 47.992,
      startLng: 106.915,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.3,
      color: colors[0]
    },
    {
      order: 13,
      startLat: 47.992,
      startLng: 106.915,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[0]
    },
    {
      order: 13,
      startLat: 47.992,
      startLng: 106.915,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.3,
      color: colors[0]
    },
    {
      order: 13,
      startLat: 47.992,
      startLng: 106.915,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.1,
      color: colors[0]
    },
    {
      order: 14,
      startLat: 47.992,
      startLng: 106.915,
      endLat: 21.395643,
      endLng: 39.883798,
      arcAlt: 0.3,
      color: colors[0]
    }
  ]

  return (
    <div className='w-full relative'>
      <div className='w-full h-full relative' style={{ zIndex: '-10' }}>
        <div className='opacity-75 md:opacity-100 w-[120%] md:w-[500px] lg:w-1/2 xl:w-[800px] absolute aspect-square right-0 md:-right-[5%] lg:-right-[10%] xl:right-0 -translate-y-[35%] md:-translate-y-[20%] lg:-translate-y-[10%]'>
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>
      </div>
      <div className='container h-full flex flex-col justify-between space-y-24'>
        <div className='w-full pt-[138px] md:pt-[68px]'>
          <div
            className={`w-4-cols-vw lg:w-5-cols-vw space-y-24 ${
              locale === 'en' && 'lg:mt-64'
            }`}
          >
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
