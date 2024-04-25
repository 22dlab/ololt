import BaseButton from '@/components/BaseButton'
import BaseLink from '@/components/BaseLink'

import Link from 'next/link'
import Image from 'next/image'

import { getCurrentLocale } from '@/locale/server'

export default function About() {
  const locale = getCurrentLocale()

  const items = [
    {
      icon: '/icon/climate.svg',
      title: {
        en: 'Climate Change',
        mn: 'Уур амьсгалын өөрчлөлт'
      },
      text: {
        en: 'One of our foremost objectives entails proactive engagement in policy formulation, comprehensive risk and impact assessments across various levels—be it national, local, or organizational—and the facilitation of climate finance mobilization to promote robust climate actions.',
        mn: 'Онол, практик хослуулан, тодорхой системчилсэн аргазүй дээр үндэслэн үндэсний, салбарын болон байгууллагын түвшинд уур амьсгалын өөрчлөлтийн бодлого, төлөвлөгөө, нөлөөлөл, эрсдэлийг үнэлэх, шаардлагад нийцүүлэн бодлого боловсруулах, чадавх бэхжүүлэн мөн уур амьсгалын санхүүжилтийг татах, төсөл, хөтөлбөр хэрэгжүүлэх.'
      },
      link: '/climate-change'
    },
    {
      icon: '/icon/energy.svg',
      title: {
        en: 'Energy Certification',
        mn: 'Эрчим хүчний гэрчилгээ'
      },
      text: {
        en: 'As a designated Local Issuer under the auspices of the I-TRACK Foundation, we aim to accelerate and promote renewable energy development in Mongolia by providing incentive mechanisms through the internationally accepted and recognized renewable energy certification (I-REC (E)) standard.',
        mn: 'Олон улсын I-TRACK Сангийн Монгол дахь албан ёсны Гэрчилгээ олгогч байгууллага болох ОЛОЛТ Төв нь Сэргээгдэх эрчим хүчний гэрчилгээ олгох механизм (I-REC (E))-ыг Монголд анх удаа нэвтрүүлж, үндэсний сэргээгдэх эрчим хүч үйлдвэрлэгчдийг дэмжих замаар цэвэр эрчим хүчний хөгжилд бодит хувь нэмэр оруулах.'
      },
      link: '/energy-certification'
    },
    {
      icon: '/icon/carbon.svg',
      title: {
        en: 'Carbon Market',
        mn: 'Нүүрстөрөгчийн зах зээл'
      },
      text: {
        en: 'As a pioneering national organization dedicated to advancing high-integrity, country-specific carbon market mechanisms that are internationally aligned, our goal is to successfully pave the way for carbon offset initiatives in Mongolia.',
        mn: 'Олон улсын нүүрстөрөгчийн зах зээлийн зарчимд суурилсан үндэсний онцлогт нийцсэн нүүрстөрөгчийн болон дүйцүүлэн хамгаалах  зах зээлийн тогтолцоог хөгжүүлэх. Үүнд Ойн нүүрстөрөгчийн хөтөлбөр буюу Монголын анхны сайн дурын нүүрстөрөгчийн зах зээлийн механизмыг хэрэгжүүлэх.'
      },
      link: '/carbon-market'
    },
    {
      icon: '/icon/esg.svg',
      title: {
        en: 'Environment, Social & Governance',
        mn: 'Байгаль орчин, Нийгэм, Засаглал'
      },
      text: {
        en: 'As the first Mongolian community member of the Global Reporting Initiative (GRI), the OLOLT Center diligently evaluates and communicates the impacts of business operations, thereby fostering the advancement of practices aligned with climate action and sustainable development pathways.',
        mn: 'Олон улсын тогтвортой байдлын тайлагналтын стандарт (GRI)-ын анхны монгол гишүүн байгууллагын хувьд ОЛОЛТ Төв нь байгууллага, бизнесийн үйл ажиллагааны нөлөөллийг үнэлж, тайлагнах, улмаар уур амьсгал, тогтвортой хөгжлийн загварт нийцүүлэн бодлого тодорхойлох замаар тогтвортой бизнес загвар, ногоон шилжилтэд хувь нэмэр оруулах.'
      },
      link: '/esg'
    },
    {
      icon: '/icon/ghg.svg',
      title: {
        en: 'GHG Accounting',
        mn: 'Хүлэмжийн хийн тооллого'
      },
      text: {
        en: 'Our team of experts, comprised of both national and international members, rigorously adheres to the methodology and guidelines established by the international greenhouse gas inventory standards (GHG Protocol, IPCC Guidelines). We conduct comprehensive greenhouse gas inventories, encompassing Scope 1, 2, and 3 emissions, at both the project and organizational levels.',
        mn: 'Олон улсын хүлэмжийн хийн тооллогын арга зүй, удирдамж (GHG Protocol, IPCC Guidelines) -ийн дагуу төсөл болон байгууллагын түвшний хүлэмжийн хийн тооллогыг үндэсний болон гадны туршлагатай баг хамт олонтой хамтран хийж гүйцэтгэн, олон улсад хүлээн зөвшөөрөгдсөн Байгаль орчны бүтээгдэхүүний (Environmental Product Declaration) гэрчилгээ олгох цогц үйлчилгээ үзүүлэх.'
      },
      link: '/ghg'
    },
    {
      icon: '/icon/capacity.svg',
      title: {
        en: 'Capacity Building',
        mn: 'Чадавх бэхжүүлэх'
      },
      text: {
        en: 'We conduct comprehensive awareness raising and capacity building training events covering such fundamental topics, including sustainable development, climate change, green finance, carbon markets, greenhouse gas accounting, and offer dedicated programs tailored to address specific needs.',
        mn: 'Тогтвортой хөгжил, уур амьсгалын өөрчлөлт, ногоон санхүүжилт, нүүрстөрөгчийн зах зээл, хүлэмжийн хийн тооллого зэрэг чиглэлээр мэдлэг олгох, чадах бэхжүүлэх сургалт, арга хэмжээг зохион байгуулах.'
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
        mn: 'ОЛОЛТ Төв нь I-TRACK Сангийн ‘I-REC (E)’ стандартын дагуу сэргээгдэх эрчим хүчний гэрчилгээ олгож эхлэв.'
      },
      text: {
        en: 'In July 2023, the ОЛОЛТ Center achieved a significant milestone by officially becoming a local issuer for the I-TRACK Standard Foundation. This momentous accomplishment marked the inauguration of the nation’s foremost market leverage mechanism, strategically aimed at enhancing the country’s renewable energy production.',
        mn: 'ОЛОЛТ Төв нь 2023 оны 7 дугаар сараас эхлэн I-TRACK  Сангийн Монгол Улс дахь албан ёсны Гэрчилгээ олгогч байгууллага болж, үндэсний хэмжээнд сэргээгдэх эрчим хүч үйлдвэрлэлийг дэмжих зах зээлийн хөшүүргийн механизмыг нэвтрүүлэв.'
      },
      label: {
        en: 'Discover more',
        mn: 'Дэлгэрэнгүй'
      }
    },
    {
      image: '/misc/card-2.png',
      logo: '/partners/5.png',
      title: {
        en: 'Community member of GRI',
        mn: 'GRI санаачилгын гишүүн'
      },
      text: {
        en: 'As Mongolia’s pioneering member organization affiliated with GRI, the global sustainability reporting standard, OLOLT Center values the partnership and contributions of private sector entities.\n\nAligned with internationally recognized standards like the Global Reporting Initiative (GRI), we assist organizations in managing environmental and social risks, promoting transparency, and integrating sustainable practices into their operations.',
        mn: 'Олон улсын тогтвортой байдлын тайлагналтын санаачилга болох ‘GRI’ -ын Монгол дахь анхны гишүүн байгууллагын хувьд ОЛОЛТ Төв нь бизнес эрхлэгчдийн тогтвортой хөгжлийн хүчин чармайлтыг дэмжих, үнэлэх, тодорхойлох чиглэлээр хамтран ажиллаж байна.\n\nОлон улсад мөрдөгдөж буй тогтвортой байдлын стандарт, удирдамжийн дагуу байгууллагын байгаль орчин, нийгэм, засаглалын орчин, нөлөөллийг үнэлж, эрсдэлийг бууруулах, тогтвортой бизнесийн үйл ажиллагааг хөгжүүлэхэд мэргэжлийн зөвлөх үйлчилгээ үзүүлж байна.'
      },
      label: {
        en: 'Learn more',
        mn: 'Дэлгэрэнгүй'
      }
    }
  ]

  return (
    <>
      <div className='container md:px-1-cols-vw lg:px-2-cols-vw'>
        <div className='w-full md:px-gutter py-64 space-y-64'>
          <div className='w-full md:flex space-y-16 md:space-y-0'>
            <div className='w-2-cols-vw mr-gutter'>
              <p className='text-secondary f-heading-4'>
                {locale === 'en' ? 'About Us' : 'Бидний Тухай'}
              </p>
            </div>
            <div className='w-4-cols-vw lg:w-6-cols-vw'>
              <p className='f-body-1 mb-24'>
                {locale === 'en'
                  ? 'At the heart of our vision is a dedication to lead the way in creating a climate-smart, sustainable society. We accomplish this by strategically employing a combination of innovative market and non-market instruments firmly grounded in integrity. Through prioritizing strategic partnerships, empowering professional communities, fostering scientific and economic research, and advocating for change, we are committed to efficiently scale up our endeavors, to push forward our national targets in alignment with the Paris Agreement.'
                  : 'Өндөр ёс зүйд суурилсан, шинэ, бүтээлч зах зээлийн болон зах зээлийн бус механизмыг үндэсний түвшинд хөгжүүлэх замаар уур амьсгалын өөрчлөлтөд тэсвэртэй, ухаалаг, тогтвортой нийгмийг цогцлоох эрхэм зорилготой. Энэ хүрээнд тогтвортой стратегийн түншлэлийг эрхэмлэж, мэргэжлийн байгууллагуудын оролцоо, хамтын ажиллагааг эрчимжүүлж, шинжлэх ухаанч шийдлийг эрэлхийлж, нийгэмд эерэг өөрчлөлт үзүүлэх мэдлэг, ойлголтыг нэмэгдүүлэх замаар үндэсний Парисын хэлэлцээрээр хүлээсэн үүрэг, зорилтыг хэрэгжүүлэхэд бодит хувь нэмэр оруулахаар зорьж байна.'}
              </p>
              <div className='w-fit'>
                <Link href='/about'>
                  <BaseButton
                    type='primary'
                    label={locale === 'en' ? 'Learn more' : 'Дэлгэрэнгүй'}
                    icon
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full lg:flex space-y-16 lg:space-y-0'>
            <div className='w-2-cols-vw mr-gutter'>
              <p className='text-secondary f-heading-4'>
                {locale === 'en' ? 'Focus areas' : 'Үйл ажиллагааны чиглэлүүд'}
              </p>
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
                      <p className='f-heading-4'>{item.title[locale]}</p>
                      <p className='f-ui-1 text-secondary'>
                        {item.text[locale]}
                      </p>
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
                      {locale === 'en'
                        ? 'Local Issuer of I-TRACK Standard Foundation'
                        : 'Сэргээгдэх эрчим хүчний гэрчилгээ олгох Монгол Улс дахь итгэмжлэгдсэн байгууллага'}
                    </p>
                  )}
                  <p className='f-heading-4'>{item.title[locale]}</p>
                  <p className='text-secondary f-ui-1'>{item.text[locale]}</p>
                  <div className='w-fit'>
                    <Link href='/'>
                      <BaseButton
                        type='secondary'
                        icon
                        label={item.label[locale]}
                      />
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
