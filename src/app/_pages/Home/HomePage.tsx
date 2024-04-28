import Hero from './Hero'
import About from './About'
import Partners from './Partners'

export default function HomePage() {
  return (
    <div className='pt-48 lg:pt-96 text-primary overflow-hidden'>
      <Hero />
      <About />
      <Partners />
    </div>
  )
}
