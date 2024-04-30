'use client'

import React from 'react'

import dynamic from 'next/dynamic'
import Image from 'next/image'

import { motion } from 'framer-motion'

const World = dynamic(() => import('./Globe').then((m) => m.World), {
  ssr: false
})

export function Construction() {
  const globeConfig = {
    pointSize: 4,
    globeColor: '#FFFFFF',
    showAtmosphere: true,
    atmosphereColor: '#FFFFFF',
    atmosphereAltitude: 0,
    emissive: '#ffffff',
    emissiveIntensity: 0,
    shininess: 0,
    polygonColor: '#ec008c',
    ambientLight: '#ffffff00',
    directionalLeftLight: '#ffffff00',
    directionalTopLight: '#ffffff00',
    pointLight: '#ffffff00',
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: false,
    autoRotateSpeed: 0
  }
  const colors = ['#EC008C', '#D02670', '#EE5396']
  const sampleArcs = [
    {
      order: 1,
      startLat: 50.4531,
      startLng: 45.4781,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.1,
      color: colors[0]
    },
    {
      order: 1,
      startLat: 99.4531,
      startLng: 45.4781,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.2,
      color: colors[0]
    },
    {
      order: 1,
      startLat: 99.4531,
      startLng: 45.4781,
      endLat: -1.303396,
      endLng: 36.852443,
      arcAlt: 0.5,
      color: colors[0]
    },
    {
      order: 2,
      startLat: 99.4531,
      startLng: 45.4781,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.2,
      color: colors[0]
    },
    {
      order: 2,
      startLat: 99.4531,
      startLng: 45.4781,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.3,
      color: colors[0]
    },
    {
      order: 2,
      startLat: 99.4531,
      startLng: 45.4781,
      endLat: 36.162809,
      endLng: -115.119411,
      arcAlt: 0.3,
      color: colors[0]
    },
    {
      order: 3,
      startLat: 99.4531,
      startLng: 45.4781,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[0]
    },
    {
      order: 3,
      startLat: 99.4531,
      startLng: 45.4781,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.3,
      color: colors[0]
    },
    {
      order: 3,
      startLat: 99.4531,
      startLng: 45.4781,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[0]
    },
    {
      order: 4,
      startLat: 99.4531,
      startLng: 45.4781,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.5,
      color: colors[0]
    },
    {
      order: 4,
      startLat: 99.4531,
      startLng: 45.4781,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.7,
      color: colors[0]
    },
    {
      order: 4,
      startLat: 99.4531,
      startLng: 45.4781,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.1,
      color: colors[0]
    },
    {
      order: 5,
      startLat: 99.4531,
      startLng: 45.4781,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[0]
    },
    {
      order: 5,
      startLat: 99.4531,
      startLng: 45.4781,
      endLat: -33.8688,
      endLng: 151.2093,
      arcAlt: 0.2,
      color: colors[0]
    },
    {
      order: 5,
      startLat: 99.4531,
      startLng: 45.4781,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.2,
      color: colors[0]
    },
    {
      order: 6,
      startLat: 99.4531,
      startLng: 45.4781,
      endLat: 1.094136,
      endLng: -63.34546,
      arcAlt: 0.7,
      color: colors[0]
    },
    {
      order: 6,
      startLat: 99.4531,
      startLng: 45.4781,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.1,
      color: colors[0]
    },
    {
      order: 6,
      startLat: 99.4531,
      startLng: 45.4781,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[0]
    },
    {
      order: 7,
      startLat: 99.4531,
      startLng: 45.4781,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.1,
      color: colors[0]
    },
    {
      order: 7,
      startLat: 99.4531,
      startLng: 45.4781,
      endLat: 52.52,
      endLng: 13.405,
      arcAlt: 0.1,
      color: colors[0]
    },
    {
      order: 7,
      startLat: 99.4531,
      startLng: 45.4781,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[0]
    },
    {
      order: 8,
      startLat: 99.4531,
      startLng: 45.4781,
      endLat: -33.936138,
      endLng: 18.436529,
      arcAlt: 0.2,
      color: colors[0]
    },
    {
      order: 8,
      startLat: 99.4531,
      startLng: 45.4781,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.2,
      color: colors[0]
    },
    {
      order: 8,
      startLat: 99.4531,
      startLng: 45.4781,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.5,
      color: colors[0]
    },
    {
      order: 9,
      startLat: 99.4531,
      startLng: 45.4781,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[0]
    },
    {
      order: 9,
      startLat: 99.4531,
      startLng: 45.4781,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.7,
      color: colors[0]
    },
    {
      order: 9,
      startLat: 99.4531,
      startLng: 45.4781,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.5,
      color: colors[0]
    },
    {
      order: 10,
      startLat: 99.4531,
      startLng: 45.4781,
      endLat: 28.6139,
      endLng: 77.209,
      arcAlt: 0.7,
      color: colors[0]
    },
    {
      order: 10,
      startLat: 99.4531,
      startLng: 45.4781,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.3,
      color: colors[0]
    },
    {
      order: 10,
      startLat: 99.4531,
      startLng: 45.4781,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.3,
      color: colors[0]
    },
    {
      order: 11,
      startLat: 99.4531,
      startLng: 45.4781,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[0]
    },
    {
      order: 11,
      startLat: 99.4531,
      startLng: 45.4781,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.2,
      color: colors[0]
    },
    {
      order: 11,
      startLat: 99.4531,
      startLng: 45.4781,
      endLat: 1.3521,
      endLng: 103.8198,
      arcAlt: 0.2,
      color: colors[0]
    },
    {
      order: 12,
      startLat: 99.4531,
      startLng: 45.4781,
      endLat: 37.7749,
      endLng: -122.4194,
      arcAlt: 0.1,
      color: colors[0]
    },
    {
      order: 12,
      startLat: 99.4531,
      startLng: 45.4781,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.2,
      color: colors[0]
    },
    {
      order: 12,
      startLat: 99.4531,
      startLng: 45.4781,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.3,
      color: colors[0]
    },
    {
      order: 13,
      startLat: 99.4531,
      startLng: 45.4781,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[0]
    },
    {
      order: 13,
      startLat: 99.4531,
      startLng: 45.4781,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.3,
      color: colors[0]
    },
    {
      order: 13,
      startLat: 99.4531,
      startLng: 45.4781,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.1,
      color: colors[0]
    },
    {
      order: 14,
      startLat: 99.4531,
      startLng: 45.4781,
      endLat: 21.395643,
      endLng: 39.883798,
      arcAlt: 0.3,
      color: colors[0]
    }
  ]

  return (
    <div className='flex flex-row items-center justify-center h-screen bg-black w-full relative z-[100]'>
      <div className='container relative overflow-hidden flex flex-col justify-between h-full py-[144px] md:py-96'>
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 1
          }}
          className='div'
        >
          <p className='text-center text-white f-heading-1'>
            Our website is under construction.
          </p>
        </motion.div>
        <div className='absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent to-black z-40' />
        <div className='w-full h-1/2 md:h-3/4 z-10'>
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>
        <div className='w-full h-[59px] relative'>
          <Image
            src='/logo/logo-mn-dark.svg'
            fill
            className='object-contain object-center'
            alt='logo'
          />
        </div>
      </div>
    </div>
  )
}
