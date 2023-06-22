import React, { useState } from 'react'
import data from './data'
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { MdOutlineBed } from "react-icons/md";
import { FaBath } from "react-icons/fa";


const Houses = () => {
    const [slide, setSlide] = useState(0)
    const length = 5;

    const prevSlide=()=>{
        setSlide(slide === 0 ? length - 1 : slide + 1)
    }

    const nextSlide=()=>{
        setSlide(slide === length - 1 ? 0 : slide - 1)
    }

  return (
    <div className='max-w-[1170px] mx-auto grid md:grid-cols-2 px-4'>
        
        {data.map((item)=>(
            <div className='w-[557px] h-[620px] rounded-lg' key={item.id}>
                <SlArrowLeft onClick={prevSlide} className="arrow rounded-tl-md z-10 left-0"/>
                <SlArrowRight onClick={nextSlide} className="arrow rounded-tr-md z-10 right-0" />
                {item.img.map((image, index)=>(
                    <div className={index === slide ? "opacity: 100" : "opacity: 0"} key={index}>
                        {index === slide && <img className='relative w-full h-[450px] rounded-t-md' src={image} alt="/" />}
                    </div>
                ))}
                <div className='bg-[var(--black2)] p-4 rounded-b-lg'>
                    <div className='flex items-center justify-between'>
                        <p className='text-[var(--white2)] text-2xl font-semibold'>{item.price} $</p>
                        <button>View Details</button>
                    </div>
                    <div className='flex justify-between items-center text-[var(--grey--dark)] border 
                    border-[var(--grey--light)] rounded-lg mt-4'>
                        <div className='flex items-center justify-center pl-9'>
                            <MdOutlineBed/>
                            <p className='ml-1'>{item.bedroom}</p>
                        </div>
                        <div className='flex items-center px-14 border border-y-0 border-[var(--grey--light)] py-3'>
                            <FaBath/>
                            <p className='ml-1'>{item.bath}</p>
                        </div>
                        <div className='flex items-center pr-14'>
                            <p>{item.square} sq ft</p>
                        </div>
                    </div>
                </div>
            </div>
        ))}
        
    </div>
  )
}

export default Houses