import Image from 'next/image'

import BaseLink from '@/components/BaseLink'

export default function About() {
  const founders = [
    {
      photo: '/misc/founder.png',
      linkedin: 'https://www.linkedin.com/in/chuluunkhuu-baatar-9a50a2152/',
      name: {
        en: 'Chuluunkhuu. B',
        mn: ''
      },
      position: {
        en: 'Co-founder',
        mn: ''
      },
      info: {
        en: 'MS, Carbon Finance, University of Edinburgh Business School',
        mn: ''
      }
    },
    {
      photo: '/misc/founder-1.png',
      linkedin: 'https://www.linkedin.com/in/anand-tsog-39105a70/',
      name: {
        en: 'Anand. Ts',
        mn: ''
      },
      position: {
        en: 'Co-founder',
        mn: ''
      },
      info: {
        en: 'Masters in Business Management, California International University',
        mn: ''
      }
    }
  ]

  const approach = [
    {
      icon: '/icon/pioneer.svg',
      title: {
        en: 'PIONEERING',
        mn: ''
      },
      text: {
        en: 'Acknowledging the needs for development of market mechanisms that ensures diverse stakeholders engagement to address climate change for long lasting impact and effectiveness, We are dedicated to initiate and develop the establishment of new market mechanisms at the national level.',
        mn: ''
      }
    },
    {
      icon: '/icon/domain.svg',
      title: {
        en: 'DOMAIN EXPERTISE AND ACUMEN',
        mn: ''
      },
      text: {
        en: 'Our team excels in the field of climate change boasting extensive proficiency in areas such as climate change policy, GHG accounting, and carbon finance. With a proven track record in crafting and executing national-level projects and research initiatives aligned with international standards and requirements, our team members are widely respected for their substantial contributions in these fields.',
        mn: ''
      }
    },
    {
      icon: '/icon/adherence.svg',
      title: {
        en: 'ADHERENCE TO GLOBAL STANDARDS',
        mn: ''
      },
      text: {
        en: 'Acknowledging the  importance of adherence to international standards and methodologies, We strive to strengthen our services to meet highest quality by obtaining accreditation from widely recognized standards and combining scientific findings and in-depth research.',
        mn: ''
      }
    },
    {
      icon: '/icon/diverse.svg',
      title: {
        en: 'DIVERSE, INCLUSIVE COLLABORATION',
        mn: ''
      },
      text: {
        en: 'We recognize that addressing climate change necessitates involvement from all sectors of society, including governments, businesses, and individuals. Engaging stakeholders and fostering robust partnerships are crucial for the effective implementation of policies and actions in the long run. Renowned for our adeptness in fostering fruitful collaborations, we prioritize inclusive and high-integrity partnerships with a diverse spectrum of stakeholders in all our core activities.',
        mn: ''
      }
    },
    {
      icon: '/icon/ethic.svg',
      title: {
        en: 'ETHICAL & TRANSPARENT',
        mn: ''
      },
      text: {
        en: 'At our core, we uphold ethical conduct and transparency ensuring trust and accountability to our stakeholders. To foster a culture of integrity and responsibility, we also advocate for transparency within organizations, encouraging them to assess their business impact on society and the environment.',
        mn: ''
      }
    }
  ]

  return (
    <div className='container px-2-cols-vw'>
      <div className='w-full px-gutter py-64 space-y-64'>
        <div className='w-full flex'>
          <div className='w-2-cols-vw mr-gutter'>
            <p className='text-secondary f-heading-4'>Vision</p>
          </div>
          <div className='w-6-cols-vw'>
            <p className='f-body-1'>
              We are aspired to contribute to the pursuit of a climate smart and
              sustainable society by strategically employing a combination of
              innovative market and non-market instruments firmly grounded in
              integrity.
            </p>
          </div>
        </div>
        <div className='w-full flex'>
          <div className='w-2-cols-vw mr-gutter'>
            <p className='text-secondary f-heading-4'>Mission</p>
          </div>
          <div className='w-6-cols-vw'>
            <p className='f-body-1'>
              Our mission is to efficiently scale up our endeavors, to push
              forward our national targets in alignment with the Paris Agreement
              through prioritizing strategic partnerships, empowering
              professional communities, fostering scientific and economic
              research, and advocating for change.
            </p>
          </div>
        </div>
        <div className='w-full flex'>
          <div className='w-2-cols-vw mr-gutter'>
            <p className='text-secondary f-heading-4'>Our story</p>
          </div>
          <div className='w-6-cols-vw'>
            <p className='f-body-1'>
              The OLOLT Center was founded with a strong commitment to
              bolstering Mongolia&apos;s efforts in mitigating and adapting to
              adverse impacts of climate change.
              <br />
              <br />
              While our country&apos;s share of global greenhouse gas emissions
              is relatively small, our susceptibility to climate-related effects
              is substantial, especially given our dependence on sectors like
              mining and agriculture, which are particularly vulnerable to
              climate impacts.
              <br />
              <br />
              Taking into account our national context, as well as the awareness
              and capabilities of stakeholders, and drawing from our
              experts&apos; diverse interdisciplinary expertise, we are
              dedicated to fostering sustainable and impactful climate action.
              This involves deploying both market and non-market mechanisms to
              engage various stakeholders effectively.
            </p>
          </div>
        </div>
        <div className='w-full flex'>
          <div className='w-2-cols-vw mr-gutter'>
            <p className='text-secondary f-heading-4'>Founders</p>
          </div>
          <div className='w-6-cols-vw grid grid-cols-2 gap-gutter'>
            {founders.map((item, index) => (
              <div key={index} className='w-full pr-1-cols-vw'>
                <div className='w-full pr-gutter'>
                  <div className='w-full aspect-square relative grayscale'>
                    <Image
                      src={item.photo}
                      alt={item.name.en}
                      fill
                      className='object-cover object-center'
                    />
                  </div>
                  <div className='mt-32 space-y-16'>
                    <div className='space-y-8'>
                      <p className='f-subhead-2'>{item.name.en}</p>
                      <p className='f-body-1'>{item.position.en}</p>
                    </div>
                    <p className='f-caption-1 text-secondary'>{item.info.en}</p>
                    <div className='w-fit'>
                      <a
                        className='cursor-pointer'
                        href={item.linkedin}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <BaseLink label='Linkedin' />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='w-full flex'>
          <div className='w-2-cols-vw mr-gutter'>
            <p className='text-secondary f-heading-4'>Our approach</p>
          </div>
          <div className='w-6-cols-vw space-y-40'>
            {approach.map((item, index) => (
              <div key={index} className='flex items-start'>
                <div className='w-1-cols-vw mr-gutter aspect-square p-10'>
                  <div className='w-full h-full relative'>
                    <Image
                      src={item.icon}
                      fill
                      className='object-contain object-center'
                      alt='icon'
                    />
                  </div>
                </div>
                <div className='w-5-cols-vw py-10 space-y-16'>
                  <p className='f-subhead-2'>{item.title.en}</p>
                  <p className='f-body-1'>{item.text.en}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
