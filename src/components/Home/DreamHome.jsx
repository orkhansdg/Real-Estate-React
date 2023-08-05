import React from 'react'
import dream from '../../assets/dream.png'

const DreamHome = () => {
  return (
    <div className='relative h-[726px] mt-16 flex justify-center items-center'>
        <img src={dream} alt="/" className='absolute left-0 top-0 w-full h-full'/>
        <div className='absolute w-full'>
          <div className='max-w-[1170px] mx-auto px-4 flex flex-col lg:flex-row justify-between items-center gap-7'>
            <div className='max-w-[571px] flex flex-col gap-4'>
              <div className='w-full'>
                <p className="text-neutral-50 text-4xl sm:text-5xl md:text-[64px] font-bold leading-tight">Did You Find Your</p>
                <span className="text-amber-500 text-4xl sm:text-5xl md:text-[64px] font-bold leading-tight">Dream Home?</span>
              </div>
              <div className='max-w-[510px]'>
                <p className='text-neutral-50 text-opacity-60 text-xl sm:text-2xl md:text-[32px] font-normal p-0'>Thank you for getting in touch! if you find your dream home connect with us</p>
              </div>
            </div>
            <div className='max-w-[571px] w-full lg:w-[380px]'>
              <form className="flex flex-col gap-4 sm:space-y-16">
                <div className='flex flex-col sm:flex-row gap-4'>
                  <input type="text" placeholder='Your Name' className='w-full text-zinc-100 text-[16px] bg-transparent border-b outline-none border-zinc-100 font-normal py-1.5'/>
                  <input type="email" placeholder='Your Email' className='w-full text-zinc-100 text-[16px] bg-transparent border-b outline-none border-zinc-100 font-normal py-1.5'/>
                </div>
                <div className='flex flex-col sm:flex-row  gap-4'>
                  <input type="tel" placeholder='Phone Number' className='w-full text-zinc-100 text-[16px] bg-transparent border-b outline-none border-zinc-100 font-normal py-1.5'/>
                  <input type="text" placeholder='Interested in' className='w-full text-zinc-100 text-[16px] bg-transparent border-b outline-none border-zinc-100 font-normal py-1.5'/>
                </div>
                <div className=''>
                  <input type="tel" placeholder='Message' className='w-full text-zinc-100 text-[16px] bg-transparent border-b outline-none border-zinc-100 font-normal py-1.5'/>
                </div>
                <button className='w-full sm:w-[126px]'>Submit</button>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default DreamHome