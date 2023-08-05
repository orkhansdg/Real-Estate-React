import React, { useState } from 'react'
import city from "../../assets/city.png"
import CountProjects from './CountProjects';
import CountLocations from './CountLocations';

const AboutUs = () => {
    const [show, setShow] = useState(false);
  
    const handleClick = () => {
      setShow(!show);
    };


  return (
    <div className='relative w-full h-[861px] mt-16' id='about'>
        <img className='w-full h-[861px]' src={city} alt="/" />
        <div className='absolute w-full h-full top-0 flex justify-center items-center '>
            <div className="max-w-[1170px] mx-auto flex flex-col sm:flex-row justify-between gap-4 px-4 ">
                <div className="max-w-[666px] flex flex-col justify-start md:items-start self-center gap-4">
                    <h4 className="text-amber-500 text-2xl md:text-[32px] font-semibold leading-10">About Us</h4>
                    <p className="text-neutral-50 text-[16px] font-normal pr-4">
                        Dream Home is a gated community with a great location. Located
                        downtown, you’re within walking distance of Parks, and the best
                        shopping, dining and entertainment Getting around is a breeze, with
                        easy access to freeways, buses and trolleys. . Laundry is available
                        on premises. {show && (
                        <span className="text-neutral-50 text-[16px] font-normal">
                        One of the advantages of living in Dream Home is the ease of
                        getting around. With convenient access to freeways, buses, and
                        trolleys, residents have multiple transportation options available
                        to explore the city and reach their desired destinations
                        efficiently. This accessibility makes commuting and traveling
                        hassle-free, allowing residents to save time and enjoy the
                        surrounding areas with ease.
                        </span>)}
                    </p>
                    <button onClick={handleClick} className="toogle_btn">
                        {!show ? "Read More" : "Read Less"}
                    </button>
                </div>
                <div className="min-w-[276px] md:w-[276px] flex flex-col text-center mt-2 md:mt-0">
                    <div>
                        <p className="flex justify-center items-center text-amber-500 text-opacity-80 text-2xl md:text-[32px] font-semibold"><CountProjects/>+</p>
                        <h6 className="text-neutral-50 text-opacity-60 text-[16px] font-semibold">Projects</h6>
                        <p className="text-neutral-50 text-opacity-50 text-[16px] font-normal">
                        Over 500 lexury villas for“Home Away From Home” experience
                        </p>
                    </div>
                    <div>
                        <p className="flex justify-center items-center text-amber-500 text-opacity-80 text-2xl md:text-[32px] font-semibold"><CountLocations/>+</p>
                        <h6 className="text-neutral-50 text-opacity-60 text-[16px] font-semibold">Locations</h6>
                        <p className="text-neutral-50 text-opacity-50 text-[16px] font-normal">
                        luxury villas and private holiday homes, from all across
                        </p>
                    </div>
                    <div>
                        <p className="text-amber-500 text-opacity-80 text-[32px] font-semibold">24/7</p>
                        <h6 className="text-neutral-50 text-opacity-60 text-[16px] font-semibold">Help</h6>
                        <p className="text-neutral-50 text-opacity-50 text-[16px] font-normal">
                        24/7 Help service for all customers to guide and support
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs