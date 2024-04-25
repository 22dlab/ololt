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
        en: 'INTEGRITY & TRANSPARENCY',
        mn: 'ЁС ЗҮЙ БА ИЛ ТОД БАЙДАЛ'
      },
      text: {
        en: 'We uphold: At our core, we uphold ethical conduct and transparency ensuring trust and accountability to our stakeholders. To foster a culture of integrity and responsibility, we also advocate for transparency within organizations, encouraging them to assess their business impact on society and the environment.',
        mn: 'Бид ёс зүй, ил тод байдал, итгэлцэлд түшиглэн хариуцлагатай хамтран ажиллах замаар байгууллагуудын нийгэм, байгаль орчинд үзүүлэх нөлөөллийг бодитоор үнэлж, нээлттэй ил тод байх зарчмыг эрхэмлэнэ.'
      }
    },
    {
      icon: '/icon/domain.svg',
      title: {
        en: 'INNOVATION & PIONEERING',
        mn: 'ШИЙДЭЛ БА МАНЛАЙЛАЛ'
      },
      text: {
        en: 'We are committed: Recognizing the imperative for a solution-based approach to engage diverse stakeholders in tackling climate change with lasting impact and effectiveness, we are committed to pioneering innovation. Our dedication lies in initiating and cultivating the establishment of new country-specific mechanisms, driving progress towards a sustainable future.',
        mn: 'Уур амьсгалын өөрчлөлтийг үр дүнтэй сааруулж, олон талын эрх ашиг, оролцоог хангахад шийдэлд түшиглэсэн арга хэмжээ чухал бөгөөд үүнд шинэлэг, анхдагч, инновацлаг байх зарчмыг бид эрхэмлэнэ.'
      }
    },
    {
      icon: '/icon/adherence.svg',
      title: {
        en: 'RESEARCH & SCIENCE-BASED APPROACH',
        mn: 'ШИНЖЛЭХ УХААНЧ АРГА БАРИЛ'
      },
      text: {
        en: 'We believe: We firmly believe in adopting a research and science-based approach in all our endeavors. By grounding our actions and decisions in empirical evidence and rigorous analysis, we ensure that our initiatives are well-informed and effective. This commitment to scientific integrity guides us in addressing complex challenges such as climate change, enabling us to develop sustainable solutions that stand the test of time.',
        mn: 'Бид үйл ажиллагааныхаа чанар, үр дүн, нөлөөллийг баталгаажуулахдаа судалгаа шинжилгээ, шинжлэх ухаанд суурилсан хандлагыг баримтлах ба энэ нь урт хугацааны сорилтыг давсан үр дүнд хүрэх суурь болно.'
      }
    },
    {
      icon: '/icon/diverse.svg',
      title: {
        en: 'CULTURAL VALUE & CONTEXT SPECIFIC',
        mn: 'Үндэсний үнэ цэнэ, онцлогт нийцсэн'
      },
      text: {
        en: 'We prioritize the principle of cultural value and context-specific approaches in all our endeavors. Recognizing the unique needs of our stakeholders, we tailor our strategies and solutions to honor their requirements and considerations of national values. By embracing cultural values and sensitivity, we ensure that our initiatives resonate authentically with the communities we serve, fostering meaningful and sustainable impact.',
        mn: 'Түнш талын хэрэгцээ, онцлогт нийцсэн үйлчилгээ үзүүлэхдээ үндэсний үнэ цэнийг эрхэмлэх зарчмыг баримтална. Энэ нь үндэсний ашиг сонирхолд нийцсэн урт хугацаанд тогтвортой, үр дүнтэй үйл ажиллагаа явуулах суурь болно.'
      }
    },
    {
      icon: '/icon/ethic.svg',
      title: {
        en: 'ADHERENCE TO GLOBAL STANDARDS',
        mn: 'ОЛОН УЛСЫН СТАНДАРТАД НИЙЦСЭН'
      },
      text: {
        en: 'Recognizing the paramount importance of adhering to international standards and methodologies, we are committed to enhancing the quality of our services. We aim to achieve this by obtaining accreditation from widely recognized standards and integrating scientific findings and in-depth research into our practices. This steadfast commitment ensures that we meet the highest standards of excellence and fulfill our obligations to our stakeholders and partners.',
        mn: 'Бид үйл ажиллагааныхаа чанарыг сайжруулах зорилгоор олон улсад хүлээн зөвшөөрөгдсөн шаардлага, стандарттай нийцүүлэх зарчмыг баримталдаг.'
      }
    },
    {
      icon: '/icon/ghg.svg',
      title: {
        en: 'DIVERSE, INCLUSIVE COLLABORATION',
        mn: 'ОЛОН ТАЛТ ХАМТЫН АЖИЛЛАГАА'
      },
      text: {
        en: 'We recognize that addressing climate change necessitates involvement from all sectors of society, including governments, businesses, and individuals. Engaging stakeholders and fostering robust partnerships are crucial for the effective implementation of policies and actions in the long run. Renowned for our adeptness in fostering fruitful collaborations, we prioritize inclusive and high-integrity partnerships with a diverse spectrum of stakeholders in all our core activities.',
        mn: 'Уур амьсгалын өөрчлөлтийн цогц асуудлыг шийдвэрлэхэд бүхий л талын оролцоо, хамтын ажиллагаа амин чухал болохыг ухамсарлаж, бүхий л үйл ажиллагаандаа олон талуудын оролцоог хангаж, шудрага, тэгш эрхтэй түншлэлийг эрхэмлэнэ.'
      }
    }
  ]

  return (
    <div className='container md:px-1-cols-vw lg:px-2-cols-vw'>
      <div className='w-full md:px-gutter py-64 space-y-64'>
        <div className='w-full lg:flex space-y-16 lg:space-y-0'>
          <div className='lg:w-2-cols-vw lg:mr-gutter'>
            <p className='text-secondary f-heading-4'>Vision</p>
          </div>
          <div className='md:w-6-cols-vw'>
            <p className='f-body-1'>
              Our vision is to contribute to the pursuit of a climate-smart and
              sustainable society by strategically employing a combination of
              innovative market and non-market instruments firmly grounded in
              integrity. We aspire to lead the way towards a future where
              environmental stewardship and social responsibility are paramount,
              creating a world that thrives on sustainability and resilience.
            </p>
          </div>
        </div>
        <div className='w-full lg:flex space-y-16 lg:space-y-0'>
          <div className='lg:w-2-cols-vw lg:mr-gutter'>
            <p className='text-secondary f-heading-4'>Mission</p>
          </div>
          <div className='md:w-6-cols-vw'>
            <p className='f-body-1'>
              Our mission is to effectively scale our efforts to advance
              national targets in line with the Paris Agreement. Through
              strategic partnerships, empowering professional communities,
              conducting scientific and economic research, and advocating for
              change, we aim to foster sustainable change while ensuring
              accountability, equity, and integrity in all our endeavors.
            </p>
          </div>
        </div>
        <div className='w-full lg:flex space-y-16 lg:space-y-0'>
          <div className='lg:w-2-cols-vw lg:mr-gutter'>
            <p className='text-secondary f-heading-4'>Our story</p>
          </div>
          <div className='md:w-6-cols-vw'>
            <p className='f-body-1'>
              In the vast and dynamic landscape of Mongolia&pos;s environmental
              advocacy, OLOLT Center distinguishes itself as a beacon of
              innovation and impact. Born from a collective passion for
              combating climate change and promoting sustainable development,
              the OLOLT Center has emerged as a significant contributor in
              Mongolia&pos;s climate change sector.
              <br />
              <br />
              At the heart of OLOLT Center&pos;s mission is a commitment to
              interdisciplinary collaboration, recognizing that addressing
              climate change requires a holistic approach that spans across
              various sectors. From environment and energy to agriculture and
              ESG initiatives, OLOLT Center&pos;s agenda knows no bounds.
              <br />
              <br />
              What sets OLOLT Center apart is not just its ambitious goals, but
              the expertise and dedication of its team, which includes
              well-respected national experts alongside valued international
              partners. Together, they bring a wealth of knowledge and
              experience to the table, making OLOLT Center a force to be
              reckoned with.
              <br />
              <br />
              In a series of groundbreaking achievements, OLOLT Center is aiming
              to establish itself as a key player in Mongolia&pos;s
              environmental landscape. As the first Mongolian member
              organization to join the Global Reporting Initiative (GRI), OLOLT
              Center is aiming to set a precedent for transparency and
              accountability.
              <br />
              <br />
              But our journey doesn&pos;t stop there. With a pioneering spirit,
              OLOLT Center became the Local Issuer for the I-Track Foundation,
              marking a significant milestone in the nation&pos;s quest for
              promoting renewable energy production.
              <br />
              <br />
              Perhaps most notably, OLOLT Center has taken on the mantle of
              being the first professional organization dedicated to carbon
              market development at the national level, making it a pioneer in
              developing the domestic voluntary carbon market, particularly in
              the forest sector. With a firm belief in the transformative
              potential of carbon markets to catalyze sustainable change, OLOLT
              Center is at the forefront of shaping a greener, more resilient
              future for Mongolia.
              <br />
              <br />
              As we continue to write our story, one thing remains clear: our
              passion, expertise, and relentless pursuit of environmental
              excellence will continue to inspire change and leave a lasting
              impact on Mongolia and beyond.
            </p>
          </div>
        </div>
        <div className='w-full lg:flex space-y-16 lg:space-y-0'>
          <div className='lg:w-2-cols-vw lg:mr-gutter'>
            <p className='text-secondary f-heading-4'>Founders</p>
          </div>
          <div className='md:w-6-cols-vw grid grid-cols-2 gap-gutter'>
            {founders.map((item, index) => (
              <div key={index} className='w-full md:pr-1-cols-vw'>
                <div className='w-full md:pr-gutter'>
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
        <div className='w-full lg:flex space-y-16 lg:space-y-0'>
          <div className='lg:w-2-cols-vw lg:mr-gutter'>
            <p className='text-secondary f-heading-4'>Our approach</p>
          </div>
          <div className='md:w-6-cols-vw space-y-40'>
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
                <div className='w-3-cols-vw md:w-5-cols-vw py-10 space-y-16'>
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
