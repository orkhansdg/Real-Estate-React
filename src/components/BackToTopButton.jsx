import React, { useEffect, useState } from 'react'
import { BsFillArrowUpSquareFill } from 'react-icons/bs'

const BackToTopButton = () => {
    const [backToTop, setBackToTop] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', ()=> {
            if (window.scrollY > 500) {
                setBackToTop(true)
            } else {
                setBackToTop(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0
        })
    }

  return (
    <>
        {backToTop && (
            <BsFillArrowUpSquareFill className='fixed w-10 h-10 md:w-14 md:h-14 bottom-4 right-10 bg-black rounded-lg text-white cursor-pointer z-10' 
            onClick={scrollUp}/>
        )}
    </>
  )
}

export default BackToTopButton