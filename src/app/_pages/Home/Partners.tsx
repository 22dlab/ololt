import Image from 'next/image'

export default function Partners() {
  return (
    <div className='w-full py-48 bg-secondary'>
      <p className='text-center f-heading-4 text-secondary'>
        International partners
      </p>
      <div className='container px-48 py-20 bg-primary mt-40 space-y-24'>
        <div className='flex items-center justify-center h-[56px] space-x-16'>
          {[...Array(6)].map((item, index) => (
            <div key={index} className='w-[200px] h-full relative'>
              <Image
                fill
                src={`/partners/${index}.png`}
                className='object-contain object-center'
                alt='partner'
              />
            </div>
          ))}
        </div>
        <div className='flex items-center justify-center h-[56px] space-x-16'>
          {[...Array(3)].map((item, index) => (
            <div key={index} className='w-[200px] h-full relative'>
              <Image
                fill
                src={`/partners/${index + 6}.png`}
                className='object-contain object-center'
                alt='partner'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
