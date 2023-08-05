import React, { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import ImageModal from "./ImageModal";

const HouseSlide = ({ images }) => {
  const [slide, setSlide] = useState(0);
  const [active, setActive] = useState(false)
  const length = images.length;

  const prevSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };

  const nextSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };
  return (
    <>
      <div onClick={prevSlide} className="absolute text-2xl text-white cursor-pointer bg-[var(--bloe)] flex h-[450px] justify-center items-center arrow rounded-tl-lg z-10 left-0 px-3">
        <SlArrowLeft />
      </div>
      <div onClick={nextSlide} className="absolute text-2xl text-white cursor-pointer bg-[var(--bloe)] flex h-[450px] justify-center items-center arrow rounded-tr-lg z-10 right-0 px-3">
        <SlArrowRight />
      </div>
      {images.map((image, index) => (
        <div className={`relative ${index === slide ? "opacity: 100" : "opacity: 0"}`} key={index}>
          {index === slide && (
            <img onClick={() => setActive(true)} className="w-full object-cover h-[450px] rounded-t-md select-none" src={image} alt="/" />)}
        </div>
      ))}
      {active && <ImageModal images={images} active={active} setActive={setActive} />}
    </>
  );
};

export default HouseSlide;