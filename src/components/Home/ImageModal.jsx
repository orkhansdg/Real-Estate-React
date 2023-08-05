import React, { useState } from 'react'
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const ImageModal = ({images, setActive}) => {
  const [slide, setSlide] = useState(0);
  const length = images.length;

  const prevSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };

  const nextSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };

  return (
    <>
      <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-slate-800 z-20' onClick={()=>setActive(false)}>
        <div className='max-w-[1000px] w-[90%] h-[500px] flex justify-between items-center px-5' onClick={e=>e.stopPropagation()}>
            <div onClick={prevSlide} className="cursor-pointer text-xl sm:text-2xl text-white sm:mr-10 sm:rounded-full p-2 sm:bg-slate-600">
              <SlArrowLeft />
            </div>
            {images.map((img, index)=>(
                <div  key={index} className={`relative ${index === slide ? "opacity: 100" : "opacity: 0"}`}>
                  {index===slide && 
                    (<img src={img} alt="/" className='w-full object-cover h-full'/>)}
                </div>
            ))}
            <div onClick={nextSlide} className="cursor-pointer text-xl sm:text-2xl text-white sm:ml-10 sm:rounded-full p-2 sm:bg-slate-600">
              <SlArrowRight/>
            </div>
        </div>
      </div>
    </>
  )
}

export default ImageModal