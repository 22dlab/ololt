import BaseButton from '@/components/BaseButton'
import BaseLink from '@/components/BaseLink'

import Link from 'next/link'
import Image from 'next/image'

export default function About() {
  const items = [
    {
      icon: '/icon/climate.svg',
      title: {
        en: 'Climate Change',
        mn: ''
      },
      text: {
        en: 'One of our foremost objectives entails proactive engagement in policy formulation, comprehensive risk and impact assessments across various levels—be it national, local, or organizational—and the facilitation of climate finance mobilization to promote robust climate actions.',
        mn: ''
      },
      link: '/climate-change'
    },
    {
      icon: '/icon/energy.svg',
      title: {
        en: 'Energy Certification',
        mn: ''
      },
      text: {
        en: 'As a designated Local Issuer under the auspices of the I-TRACK Foundation, we aim to accelerate and promote renewable energy development in Mongolia by providing incentive mechanisms through the internationally accepted and recognized renewable energy certification (I-REC (E)) standard.',
        mn: ''
      },
      link: '/energy-certification'
    },
    {
      icon: '/icon/carbon.svg',
      title: {
        en: 'Carbon Market',
        mn: ''
      },
      text: {
        en: 'As a pioneering national organization dedicated to advancing high-integrity, country-specific carbon market mechanisms that are internationally aligned, our goal is to successfully pave the way for carbon offset initiatives in Mongolia.',
        mn: ''
      },
      link: '/carbon-market'
    },
    {
      icon: '/icon/esg.svg',
      title: {
        en: 'Environment, Social & Governance',
        mn: ''
      },
      text: {
        en: 'As community member of the Global Reporting Initiative (GRI), the OLOLT Center diligently evaluates and communicates the impacts of business operations, thereby fostering the advancement of practices aligned with climate action and sustainable development pathways.',
        mn: ''
      },
      link: '/esg'
    },
    {
      icon: '/icon/ghg.svg',
      title: {
        en: 'GHG Accounting',
        mn: ''
      },
      text: {
        en: 'Our national team conducts project and organization-level greenhouse gas inventories, covering scope 1, 2, and 3 emissions, and reports them in accordance with international greenhouse gas inventory methodology and guidelines (GHG Protocol, IPCC Guidelines). We employ country-specific emission factors where necessary to ensure accuracy and relevance.',
        mn: ''
      },
      link: '/ghg'
    },
    {
      icon: '/icon/capacity.svg',
      title: {
        en: 'Capacity Building',
        mn: ''
      },
      text: {
        en: 'We conduct comprehensive awareness and empowerment sessions and events covering a spectrum of vital topics, including sustainable development, climate change, green finance, carbon markets, greenhouse gas inventory management, and specialized programs tailored to address specific needs.',
        mn: ''
      },
      link: '/academy'
    }
  ]

  const cards = [
    {
      image: '/misc/card.png',
      logo: '/partners/8.png',
      title: {
        en: 'OLOLT Center now issues Renewable Energy Certificate (I-REC) in Mongolia, adhering to the I-TRACK Standard Foundation',
        mn: ''
      },
      text: {
        en: 'In July 2023, ОЛОЛТ Center has become a local issuer of the I-TRACK Standard Foundation, launching a nation’s first market leverage mechanism to bolster national renewable energy production.',
        mn: ''
      },
      label: {
        en: 'Discover more',
        mn: ''
      }
    },
    {
      image: '/misc/card-2.png',
      logo: '/partners/5.png',
      title: {
        en: 'Community member of GRI',
        mn: ''
      },
      text: {
        en: 'Being the first member organization in Mongolia affiliated with GRI, the global sustainability reporting standard, OLOLT Center highly esteems the collaboration and contribution of private sector entities.\nIn alignment with globally recognized standards and frameworks such as the Global Reporting Initiative (GRI), we support organizations in mitigating risks related to environmental and social impacts, while enhancing transparency and harmonizing their operations with sustainable practices.',
        mn: ''
      },
      label: {
        en: 'Learn more',
        mn: ''
      }
    }
  ]

  return (
    <>
      <div className='container md:px-1-cols-vw lg:px-2-cols-vw'>
        <div className='w-full md:px-gutter py-64 space-y-64'>
          <div className='w-full md:flex space-y-16 md:space-y-0'>
            <div className='w-2-cols-vw mr-gutter'>
              <p className='text-secondary f-heading-4'>About Ololt</p>
            </div>
            <div className='w-4-cols-vw lg:w-6-cols-vw'>
              <p className='f-body-1 mb-24'>
                At the heart of our vision is a dedication to lead the way in
                creating a climate-smart, sustainable society. We accomplish
                this by strategically employing a combination of innovative
                market and non-market instruments firmly grounded in integrity.
                Through prioritizing strategic partnerships, empowering
                professional communities, fostering scientific and economic
                research, and advocating for change, we are committed to
                efficiently scale up our endeavors, to push forward our national
                targets in alignment with the Paris Agreement.
              </p>
              <div className='w-fit'>
                <Link href='/about'>
                  <BaseButton type='primary' label='Learn more' icon />
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full lg:flex space-y-16 lg:space-y-0'>
            <div className='w-2-cols-vw mr-gutter'>
              <p className='text-secondary f-heading-4'>Focus areas</p>
            </div>
            <div className='w-4-cols-vw md:w-6-cols-vw grid grid-cols-1 md:grid-cols-2 gap-gutter'>
              {items.map((item, index) => (
                <div
                  key={index}
                  className='w-full px-20 py-24 bg-secondary flex flex-col justify-between space-y-16'
                >
                  <div className='space-y-16'>
                    <Image height={40} width={40} src={item.icon} alt='icon' />
                    <div className='space-y-12'>
                      <p className='f-heading-4'>{item.title.en}</p>
                      <p className='f-ui-1 text-secondary'>{item.text.en}</p>
                    </div>
                  </div>

                  <div className='w-fit'>
                    <Link href={item.link}>
                      <BaseLink label='See more' icon />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='container lg:px-2-cols-vw'>
        <div className='w-full lg:px-gutter py-64'>
          <div className='w-full space-y-64'>
            {cards.map((item, index) => (
              <div key={index} className='w-full md:flex'>
                <div className='w-full md:flex-grow md:w-fit aspect-[4/3] md:aspect-square relative'>
                  <Image
                    src={item.image}
                    fill
                    className='object-cover object-center'
                    alt='image'
                  />
                  <div
                    className={`${
                      index === 0 ? 'h-[60px]' : 'h-[75px]'
                    } w-full absolute left-0 top-1/2 -translate-y-1/2`}
                  >
                    <div className='w-full h-full relative'>
                      <Image
                        src={item.logo}
                        fill
                        className='object-contain object-center'
                        alt='logo'
                      />
                    </div>
                  </div>
                </div>
                <div className='w-full md:w-5-cols-vw px-24 md:px-32 py-24 flex flex-col justify-center bg-secondary space-y-24'>
                  {index === 0 && (
                    <p className='f-tag-1 text-accent'>
                      Local Issuer of I-TRACK Standard Foundation
                    </p>
                  )}
                  <p className='f-heading-4'>{item.title.en}</p>
                  <p className='text-secondary f-ui-1'>{item.text.en}</p>
                  <div className='w-fit'>
                    <Link href='/'>
                      <BaseButton type='secondary' icon label={item.label.en} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
