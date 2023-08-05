import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [nav, setNav] = useState();

    const handleClick = () => {
        setNav(!nav)
    }

    const scrollDown = (id) => {
        const element = document.getElementById(id);
        if (!element) return;
        element.scrollIntoView({behavior: 'smooth', block: 'center'})

    }

    return (
        <div className='absolute w-full z-10 '>
            <div className='max-w-[1170px] mx-auto flex justify-between items-center px-4'>
                <div className='pt-4'>
                    <Link to="/">
                        <img className='md:w-28' src={logo} alt="/" />
                    </Link>
                </div>
                <ul className='hidden md:flex items-center gap-9'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li onClick={()=>scrollDown('about')} className='cursor-pointer'>
                        About Us
                    </li>
                    <li onClick={()=>scrollDown('projects')} className='cursor-pointer'>
                        Other Projects
                    </li>
                    <li>
                        <button>Enquire Now</button>
                    </li>
                </ul>
                <div onClick={handleClick} className='md:hidden z-10 text-white cursor-pointer'>
                    {nav ? <FaTimes size={30} /> : <GiHamburgerMenu size={30} />}
                </div>


                {/* Mobile view */}

                <div className={nav ? 'absolute left-0 top-0 w-full bg-gray-800 px-4 py-7 flex flex-col md:hidden'
                    : 'absolute left-[-100%]'}>
                    <div className='px-4'>
                        <img src={logo} alt="/" />
                    </div>
                    <ul>
                        <li className='border-b border-white text-white p-8 pb-4'>Home</li>
                        <li className='border-b border-white text-white p-8 pb-4'>
                            <button className='cursor-pointer' activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}>About Us</button>
                        </li>
                        <li className='border-b border-white text-white p-8 pb-4'>
                            <button className='cursor-pointer' activeClass="active" to="projects" spy={true} smooth={true} offset={-100} duration={500}>Other Projects</button>
                        </li>
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