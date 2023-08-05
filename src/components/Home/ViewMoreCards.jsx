import React from "react";
import { MdOutlineBed } from "react-icons/md";
import { FaBath } from "react-icons/fa";
import HouseSlide from "./HouseSlide";

export default function ViewMoreCards() {
  const data = [
    {
        id: 5,
        img: [
          "./images/img2.4.jpg",
          "/images/img2.2.jpg",
          "/images/img2.3.jpg",
          "/images/img2.1.jpg",
          "/images/img2.5.jpg"
        ],
        price: "390.000",
        bedroom: "2 Bedrooms",
        bath: "3 Baths",
        square: 1000
      },
      {
        id: 6,
        img: [
          "./images/img2.3.jpg",
          "/images/img2.5.jpg",
          "/images/img2.1.jpg",
          "/images/img2.4.jpg",
          "/images/img2.2.jpg"
        ],
        price: "390.000",
        bedroom: "2 Bedrooms",
        bath: "3 Baths",
        square: 1000
      }
  ];

  return (
    <div className="max-w-[1170px] mx-auto grid md:grid-cols-2 px-4 gap-4">
      {data.map((item) => (
        <div className="relative h-full" key={item.id}>
            <HouseSlide images={item.img}/>
            <div className="mb-6 bg-[var(--black2)] p-4 rounded-b-lg">
              <div className="flex items-center justify-between">
                <p className="text-[var(--white2)] text-2xl font-semibold select-none">
                  {item.price} $
                </p>
                <button>View Details</button>
              </div>
              <div className="flex justify-evenly items-center text-[var(--grey--dark)] border 
                    border-[var(--grey--light)] rounded-lg mt-4">
                <div className="flex items-center justify-center">
                  <MdOutlineBed />
                  <p className="text-neutral-50 text-opacity-60 text-[14px] font-semibold leading-tight">{item.bedroom}</p>
                </div>
                <div className="flex items-center border border-y-0 border-[var(--grey--light)] py-3">
                  <FaBath />
                  <p className="ml-1">{item.bath}</p>
                </div>
                <div className="flex items-center">
                  <p>{item.square} sq ft</p>
                </div>
              </div>
          </div>
        </div>
      ))}
    </div>
  );
}
