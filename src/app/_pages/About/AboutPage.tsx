import Hero from './Hero'
import About from './About'
import Partners from '../Home/Partners'
import { PartnerType } from '@/type'

export default function AboutPage({ partners }: { partners: PartnerType[] }) {
  return (
    <div className='text-primary pt-48 lg:pt-96'>
      <Hero />
      <About />
      <Partners partners={partners} />
    </div>
  )
}
