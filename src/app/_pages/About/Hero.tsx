export default function Hero() {
  return (
    <div className='w-full h-[400px] relative'>
      <div className='w-full h-full bg-black' />
      {/* <Image
        src='/misc/about-hero.png'
        className='object-cover object-center'
        fill
        alt='map'
      /> */}
      <div className='absolute top-72 lg:bottom-72 w-full'>
        <div className='container'>
          <div className='md:w-5-cols-vw lg:w-6-cols-vw'>
            <p className='text-inverse f-display-3'>
              Driving Climate Actions Bridging Stakeholders <br />
              With{' '}
              <span className='bg-gradient-to-b from-[#EE5396] to-[#FFAFD2] text-transparent bg-clip-text'>
                Unwavering Integrity
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className='absolute bottom-[72px] w-full'>
        <div className='container flex lg:justify-end'>
          <div className='lg:w-4-cols-vw'>
            <p className='text-inverse f-body-1'>
              OLOLT Climate Change and Carbon Market Development Center is a
              climate-solution oriented non-governmental organization.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
