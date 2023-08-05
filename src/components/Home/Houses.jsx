import React, { useState } from "react";

import { MdOutlineBed } from "react-icons/md";
import { FaBath } from "react-icons/fa";
import { Link } from "react-router-dom";
import HouseSlide from "./HouseSlide";
import BtnViewMore from "./BtnViewMore";

const Houses = ({houses}) => {
  const [isAll, setIsAll] = useState(false);

  function handleClick() {
    setIsAll(!isAll)
  }

  return (
    <div className="mb-8">
      <div className="max-w-[1170px] mx-auto grid md:grid-cols-2 px-4 gap-4">
        {(isAll ? houses : houses.slice(0, 6)).map((item) => (
          <div className="relative h-full" key={item.id}>
              <HouseSlide images={item.img}/>
              <div className="bg-[var(--black2)] p-4 rounded-b-lg">
                <div className="flex items-center justify-between">
                  <p className="text-[var(--white2)] text-2xl font-semibold select-none">
                    {item.price} $
                  </p>
                  <Link to={`/details/${item.id}`}>
                    <button>View Details</button>
                  </Link>
                </div>
                <div className="h-[42px] grid grid-cols-3 divide-x divide-[var(--grey--dark)] text-[var(--grey--dark)] border border-[var(--grey--light)] rounded-lg mt-4 ">
                  <div className="flex items-center justify-center">
                    <MdOutlineBed />
                    <p className="text-[14px] font-semibold leading-tight ml-1">{item.bedroom}</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <FaBath />
                    <p className="ml-1">{item.bath}</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <p>{item.square} sq ft</p>
                  </div>
                </div>
            </div>
          </div>
        ))}
      </div>
      <BtnViewMore isAll={isAll} onClick={handleClick}/>
    </div>
  );
};

export default Houses;