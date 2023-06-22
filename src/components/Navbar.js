import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [nav, setNav] = useState();

    const handleClick =()=>{
        setNav(!nav)
    }

  return (
    <div className='absolute w-full z-10 '>
     <div className='max-w-[1170px] mx-auto flex justify-between items-center px-4'>
        <div className='pt-4'>
            <img className='md:w-28' src={logo} alt="/" />
        </div>
        <ul className='hidden md:flex items-center'>
            <li>Home</li>
            <li>About Us</li>
            <li>Other Projects</li>
            <li>
                <button>Enquire Now</button>
            </li>
        </ul>
        <div onClick={handleClick} className='md:hidden z-10 text-white cursor-pointer'>
            {nav ? <FaTimes size={30}/> : <GiHamburgerMenu size={30}/>}
        </div>


        {/* Mobile view */}
        
        <div className={nav ? 'absolute left-0 top-0 w-full bg-gray-800 px-4 py-7 flex flex-col md:hidden'
            : 'absolute left-[-100%]'}>
            <div className='px-4'>
                <img src={logo} alt="/" />
            </div>
            <ul>
                <li className='border-b border-white text-white p-8 pb-4'>Home</li>
                <li className='border-b border-white text-white p-8 pb-4'>About Us</li>
                <li className='border-b border-white text-white p-8 pb-4'>Other Projects</li>
                <li className='flex flex-col mt-8 '>
                    <button>Enquire Now</button>
                </li>
            </ul>
        </div>
     </div>
     </div>   
  )
}

export default Navbar