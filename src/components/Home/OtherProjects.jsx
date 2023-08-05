import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Keyboard, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const OtherProjects = () => {
  const data = [
    {
      id: 1,
      img: "/images/slide5.jpg",
      city: "Estaing",
      country: "France"
    },
    {
      id: 2,
      img: "/images/slide2.jpg",
      city: "Malaqa",
      country: "Spain"
    },
    {
      id: 3,
      img: "/images/slide3.jpg",
      city: "Zutendaal",
      country: "Belgium"
    },
    {
      id: 4,
      img: "/images/slide4.jpg",
      city: "Segura",
      country: "Spain"
    },
    {
      id: 5,
      img: "/images/img1.1.jpg",
      city: "Ashland",
      country: "USA"
    }
  ];

  return (
    <div className='mt-16' id='projects'>
      <h4 className="text-amber-500 text-2xl md:text-[32px] font-semibold text-center mb-1">Other Projects</h4>
      <p className="text-white text-opacity-50 text-sm md:text-base font-normal text-center mb-8">Other projects by us in different locations</p>
      <div className="project_container">
        <Swiper
          effect='coverflow'
          grabCursor={true}
          slidesPerView={1}
          spaceBetween={34}
          centeredSlides={true}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: -50,
            depth: 100,
            modifier: 2.5
          }}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true
          }}
          breakpoints={{
            769: {
              slidesPerView: 2
            }
          }}
          navigation={true}
          modules={[EffectCoverflow, Keyboard, Pagination, Navigation]}
          className="mySwiper"
        >
          {data.map((item, i) => (
            <SwiperSlide>
              <div key={i} className="h-[416px]">
                <img src={item.img} alt="" className='relative w-full h-full rounded-lg border-4 border-[var(--white2)]'/>
                <div className="absolute bottom-6 left-6 flex flex-col justify-center items-center gap-1">
                  <p className='text-center text-neutral-50 text-[24px] font-semibold'>{item.city}</p>
                  <p className='text-center text-neutral-50 text-opacity-60 text-[14px] font-bold uppercase'>{item.country}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default OtherProjects