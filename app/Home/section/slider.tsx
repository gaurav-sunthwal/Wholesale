import Image from 'next/image'
import React from 'react'

export default function slider() {
  return (
    <div className='w-screen '>
        <div className='w-full h-full bg-[#121B20]'>
            <div className="">
                <Image src="/slider/slider1.png" alt="slider" width={1920} height={1080} className='w-full h-full object-cover' />
            </div>
        </div>
    </div>
  )
}
