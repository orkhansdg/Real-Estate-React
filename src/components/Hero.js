import React from 'react'
import bgHouse from '../assets/bg-house.png'

const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
        <img className='w-full h-full object-cover object-center' src={bgHouse} alt="/" />
        <div className='absolute w-full h-full left-0 top-0 bg-black/25'></div>
          <div className='max-w-[1170px] mx-auto'>
            <div className='absolute top-0 h-full flex items-center px-4'>
                <h1 className='text-white text-4xl font-bold sm:text-5xl md:text-6xl'>Find Your
                  <span className='text-[#FF9505]'> Dream Home</span><br/>
                  <p className='mt-4'>@ San Diego </p>
                </h1>
            </div>
        </div>
    </div>
  )
}

export default Hero