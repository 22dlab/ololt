import Image from 'next/image'

export default function Hero() {
  const items = [
    {
      value: {
        en: '2.46°C',
        mn: ''
      },
      label: {
        en: 'Increase in average annual mean surface temperature between 1940-2022',
        mn: ''
      }
    },
    {
      value: {
        en: '43,081.62 t CO2e',
        mn: ''
      },
      label: {
        en: 'Mongolia’ total CO2 emissions in 2020 (excluding LULUCF)',
        mn: ''
      }
    },
    {
      value: {
        en: '12.83 t CO2eq',
        mn: ''
      },
      label: {
        en: 'Emission per capita in 2020',
        mn: ''
      }
    },
    {
      value: {
        en: '2.8x',
        mn: ''
      },
      label: {
        en: 'Emission per capita in 2020 is 2.8 times higher than the world average',
        mn: ''
      }
    }
  ]

  return (
    <div className='w-full h-[720px] md:h-[500px] relative'>
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
      <div className='absolute top-[138px] md:top-[68px] w-full'>
        <div className='container'>
          <div className='w-4-cols-vw lg:w-5-cols-vw space-y-24'>
            <p className='f-heading-3'>Climate Change in Mongolia</p>
            <p className='text-secondary f-body-1'>
              Mongolia is experiencing significant impacts of climate change,
              with a surge in extreme weather events alongside temperature
              warming.
              <br />
              <br />
              Despite its GHG emissions comprising just 0.09% of the global
              total in 2020, its per capita emissions exceed the global average
              by 2.8 times.
            </p>
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 w-full'>
        <div className='container'>
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
                  <span>{item.value.en}</span>
                </div>
                <div className='f-ui-1'>
                  <p>{item.label.en}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
