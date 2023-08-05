import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const DetailsMainSlide = ({ details }) => {
  console.log(details)
  return (
    <div className="swiper_container w-full">
      <Swiper
        slidesPerView={1}
        spaceBetween={3}
        loop={true}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2
          }
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          details.img.map((image, i) => (
            <SwiperSlide key={i}>
              <img src={image} alt="/" className="w-full rounded-lg border-4 border-[var(--white2)] object-cover" />
            </SwiperSlide>
          ))
        }
      </Swiper>

    </div>
  )
}

export default DetailsMainSlide