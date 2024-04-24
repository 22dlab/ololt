import Hero from './Hero'
import About from './About'
import Partners from '../Home/Partners'

export default function AboutPage() {
  return (
    <div className='text-primary pt-48 lg:pt-96'>
      <Hero />
      <About />
      <Partners />
    </div>
  )
}
