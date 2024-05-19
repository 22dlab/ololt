import Image from 'next/image'

import BaseLink from '@/components/BaseLink'

import { getCurrentLocale } from '@/locale/server'

export default function About() {
  const locale = getCurrentLocale()

  const founders = [
    {
      photo: '/misc/founder.png',
      linkedin: 'https://www.linkedin.com/in/chuluunkhuu-baatar-9a50a2152/',
      name: {
        en: 'Chuluunkhuu. B',
        mn: 'Б. Чулуунхүү'
      },
      position: {
        en: 'Co-founder, Chair of Board',
        mn: 'Үндэслэн байгуулагч, Удирдах зөвлөлийн дарга'
      },
      info: {
        en: 'MS, Carbon Finance, University of Edinburgh Business School',
        mn: 'Англи улсын Эдинбург Их Сургууль, Нүүрстөрөгчийн Санхүүжилт, Магистр'
      }
    },
    {
      photo: '/misc/founder-1.png',
      linkedin: 'https://www.linkedin.com/in/anand-tsog-39105a70/',
      name: {
        en: 'Anand. Ts',
        mn: 'Ц. Ананд'
      },
      position: {
        en: 'Co-founder',
        mn: 'Үндэслэн байгуулагч, Гүйцэтгэх захирал'
      },
      info: {
        en: 'Masters in Business Management, California International University',
        mn: 'АНУ-ын Калифорни Их Сургууль, Бизнесийн Удирдлага, Магистр'
      }
    }
  ]

  const approach = [
    {
      icon: '/icon/integrity.svg',
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
      icon: '/icon/innovation.svg',
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
      icon: '/icon/research.svg',
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
      icon: '/icon/cultural.svg',
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
      icon: '/icon/adherence.svg',
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
      icon: '/icon/diverse.svg',
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
            <p className='text-secondary f-heading-4'>
              {locale === 'en' ? 'Vision' : 'Алсын хараа'}
            </p>
          </div>
          <div className='md:w-6-cols-vw'>
            <p className='f-body-1'>
              {locale === 'en'
                ? 'Our vision is to contribute to the pursuit of a climate-smart and sustainable society by strategically employing a combination of innovative market and non-market instruments firmly grounded in integrity. We aspire to lead the way towards a future where environmental stewardship and social responsibility are paramount, creating a world that thrives on sustainability and resilience.'
                : 'Бидний алсын хараа үндэсний онцлогт нийцсэн, олон улсын шилдэг туршлагад тулгуурласан шинэлэг зах зээлийн болон зах зээлийн бус механизмыг хөгжүүлэх замаар уур амьсгалд ухаалаг, тогтвортой нийгэм, ирээдүйг цогцлооход оршино.'}
            </p>
          </div>
        </div>
        <div className='w-full lg:flex space-y-16 lg:space-y-0'>
          <div className='lg:w-2-cols-vw lg:mr-gutter'>
            <p className='text-secondary f-heading-4'>
              {locale === 'en' ? 'Mission' : 'Эрхэм зорилго'}
            </p>
          </div>
          <div className='md:w-6-cols-vw'>
            <p className='f-body-1'>
              {locale === 'en'
                ? 'Our mission is to effectively scale our efforts to advance national targets in line with the Paris Agreement. Through strategic partnerships, empowering professional communities, conducting scientific and economic research, and advocating for change, we aim to foster sustainable change while ensuring accountability, equity, and integrity in all our endeavors.'
                : 'Бидний эрхэм зорилго Парисын хэлэлцээрийн хүрээнд үндэсний тодорхойлсон зорилтыг хэрэгжүүлэхэд бодит хувь нэмэр оруулах, үйл ажиллагааныхаа цар хүрээ, үр дүн, хүртээмжийг стратегийн үр дүнтэй түншлэл буюу мэргэжлийн болон судалгаа, сурталчилгааны байгууллага, хувийн хэвшил, орон нутгийн төлөөллүүдтэй хамтран ажиллах замаар тэлэхэд оршино.  Ингэхдээ тэгш эрх, шударга ёсны зарчмыг тууштай баримтална.'}
            </p>
          </div>
        </div>
        <div className='w-full lg:flex space-y-16 lg:space-y-0'>
          <div className='lg:w-2-cols-vw lg:mr-gutter'>
            <p className='text-secondary f-heading-4'>
              {locale === 'en' ? 'Our story' : 'Бидний түүх'}
            </p>
          </div>
          <div className='md:w-6-cols-vw'>
            <p className='f-body-1'>
              {locale === 'en'
                ? "In the vast and dynamic landscape of Mongolia's environmental advocacy, OLOLT Center distinguishes itself as a beacon of innovation and impact. Born from a collective passion for combating climate change and promoting sustainable development, the OLOLT Center has emerged as a significant contributor in Mongolia's climate change sector."
                : 'Байгаль орчныг хамгаалж, тогтвортой хөгжлийг  хөгжүүлэх үндэсний хүчин чармайлт өргөн цар хүрээ, олон талыг хамарсан байдаг ба үүнд ОЛОЛТ Төв шинийг эрэлхийлэгч инновацлаг, бодит үр нөлөө бүхий шийдэл, тогтолцооны өөрчлөлтийг санал болгож, хэрэгжүүлдгээрээ онцлог юм.'}
              <br />
              <br />
              {locale === 'en'
                ? "At the heart of OLOLT Center's mission is a commitment to interdisciplinary collaboration, recognizing that addressing climate change requires a holistic approach that spans across various sectors. From environment and energy to agriculture and ESG initiatives, OLOLT Center's agenda knows no bounds."
                : 'Уур амьсгалын өөрчлөлтийн асуудал нь салбар дундын, ярвигтай, цогц асуудлуудыг хөндсөн байдаг ба ийм ч шалтгаанаар ОЛОЛТ Төвийн үйл ажиллагаа олон салбарыг: байгаль орчин, ой, эрчим хүч, хөдөө аж ахуй, тээвэр, хог хаягдал гм. хамарсан байдаг.'}
              <br />
              <br />
              {locale === 'en'
                ? 'What sets OLOLT Center apart is not just its ambitious goals, but the expertise and dedication of its team, which includes well-respected national experts alongside valued international partners. Together, they bring a wealth of knowledge and experience to the table, making OLOLT Center a force to be reckoned with.'
                : 'Цогц асуудлуудыг гагцхүү олон талын мэдлэг, чадвар,  туршлагатай чадварлаг мэргэжлийн хамт олон гүйцэтгэх боломжтой бөгөөд ОЛОЛТ Төв нь салбартаа онол, практикийн мэдлэг туршлагаараа танигдсан, чадварлаг мэргэжлийн баг хамт олноос бүрддэг.'}
              <br />
              <br />
              {locale === 'mn' && (
                <>
                  <strong>ОЛОЛТ Төвийн анхдагч болох санал санаачилга</strong>
                  <br />
                  <br />
                </>
              )}

              {locale === 'en'
                ? "In a series of groundbreaking achievements, OLOLT Center is aiming to establish itself as a key player in Mongolia's environmental landscape. As the first Mongolian member organization to join the Global Reporting Initiative (GRI), OLOLT Center is aiming to set a precedent for transparency and accountability."
                : 'ОЛОЛТ Төв нь олон улсын GRI санаачилгын анхны монгол гишүүн байгууллага болов. Энэ хүрээнд хариуцлагатай бизнесийг дэмжих, сурталчлах, ил тод тайлагнах тогтолцоог бүрдүүлэх замаар тогтвортой хөгжлийг эрчимжүүлнэ.'}
              <br />
              <br />
              {locale === 'en'
                ? "But our journey doesn't stop there. With a pioneering spirit, OLOLT Center became the Local Issuer for the I-Track Foundation, marking a significant milestone in the nation's quest for promoting renewable energy production"
                : 'Түүнчлэн тогтвортой хөгжлийг эрчимжүүлж, уур амьсгалын өөрчлөлтийг сааруулахад нүүрстөрөгчийн зах зээлийн механизмыг хэрэгжүүлэх нь ач холбогдолтой гэж үзэн үндэсний анхны сайн дурын Ойн нүүрстөрөгчийн хөтөлбөрийг санаачлав.'}
              <br />
              <br />
              {locale === 'en'
                ? 'Perhaps most notably, OLOLT Center has taken on the mantle of being the first professional organization dedicated to carbon market development at the national level, making it a pioneer in developing the domestic voluntary carbon market, particularly in the forest sector. With a firm belief in the transformative potential of carbon markets to catalyze sustainable change, OLOLT Center is at the forefront of shaping a greener, more resilient future for Mongolia.'
                : 'Бидний түүх үргэлжилж байгаа бөгөөд байгаль орчин, эх дэлхий, хүн ард, ирээдүй хойч үеийн аюулгүй байдал, сайн сайхны төлөө өөрсдийн хүсэл, тэмүүлэл, сэтгэл зүтгэлийг тууштай хэрэгжүүлж, улс орон болон дэлхийн чиг хандлага, хүчин чармайлтад бодит хувь нэмэр оруулсаар байх болно.'}
              <br />
              <br />
              {locale === 'en' &&
                'As we continue to write our story, one thing remains clear: our passion, expertise, and relentless pursuit of environmental excellence will continue to inspire change and leave a lasting impact on Mongolia and beyond.'}
              <br />
              <br />
            </p>
          </div>
        </div>
        <div className='w-full lg:flex space-y-16 lg:space-y-0'>
          <div className='lg:w-2-cols-vw lg:mr-gutter'>
            <p className='text-secondary f-heading-4'>
              {locale === 'en' ? 'Founders' : 'Үндэслэн байгуулагч'}
            </p>
          </div>
          <div className='md:w-6-cols-vw grid grid-cols-2 gap-gutter'>
            {founders.map((item, index) => (
              <div key={index} className='w-full md:pr-1-cols-vw'>
                <div className='w-full md:pr-gutter'>
                  <div className='w-full aspect-square relative grayscale'>
                    <Image
                      src={item.photo}
                      alt={item.name[locale]}
                      fill
                      className='object-cover object-center'
                    />
                  </div>
                  <div className='mt-32 space-y-16'>
                    <div className='space-y-8'>
                      <p className='f-subhead-2'>{item.name[locale]}</p>
                      <p className='f-body-1'>{item.position[locale]}</p>
                    </div>
                    <p className='f-caption-1 text-secondary'>
                      {item.info[locale]}
                    </p>
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
            <p className='text-secondary f-heading-4'>
              {' '}
              {locale === 'en' ? 'Our approuch' : 'Арга барил'}
            </p>
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
                  <p className='f-subhead-2'>{item.title[locale]}</p>
                  <p className='f-body-1'>{item.text[locale]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
