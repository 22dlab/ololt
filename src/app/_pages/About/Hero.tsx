export default function Hero() {
  return (
    <div className='w-full h-[500px] relative'>
      <div className='w-full h-full bg-black' />
      {/* <Image
        src='/misc/about-hero.png'
        className='object-cover object-center'
        fill
        alt='map'
      /> */}
      <div className='absolute bottom-[72px] w-full'>
        <div className='container'>
          <div className='w-6-cols-vw'>
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
        <div className='container flex justify-end'>
          <div className='w-4-cols-vw'>
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
