import React from "react";

export default function BtnViewMore({isAll, onClick}) {

  return (
    <div id="more" className="flex flex-col justify-center items-center gap-1 mt-4">
      {isAll ? (
        <svg onClick={onClick} className="cursor-pointer translate rotate-180" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="akar-icons:circle-chevron-down-fill">
                <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M24 2C11.85 2 2 11.85 2 24C2 36.15 11.85 46 24 46C36.15 46 46 36.15 46 24C46 11.85 36.15 2 24 2ZM17.414 19.586C17.0368 19.2217 16.5316 19.0201 16.0072 19.0247C15.4828 19.0292 14.9812 19.2395 14.6104 19.6104C14.2395 19.9812 14.0292 20.4828 14.0247 21.0072C14.0201 21.5316 14.2217 22.0368 14.586 22.414L22.586 30.414C22.9611 30.7889 23.4697 30.9996 24 30.9996C24.5303 30.9996 25.0389 30.7889 25.414 30.414L33.414 22.414C33.7783 22.0368 33.9799 21.5316 33.9753 21.0072C33.9708 20.4828 33.7605 19.9812 33.3896 19.6104C33.0188 19.2395 32.5172 19.0292 31.9928 19.0247C31.4684 19.0201 30.9632 19.2217 30.586 19.586L24 26.172L17.414 19.586Z" fill="#FFFBFB" fill-opacity="0.65"/>
            </g>
        </svg>
      ) : (
        <svg onClick={onClick} className="cursor-pointer" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="akar-icons:circle-chevron-down-fill">
                <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M24 2C11.85 2 2 11.85 2 24C2 36.15 11.85 46 24 46C36.15 46 46 36.15 46 24C46 11.85 36.15 2 24 2ZM17.414 19.586C17.0368 19.2217 16.5316 19.0201 16.0072 19.0247C15.4828 19.0292 14.9812 19.2395 14.6104 19.6104C14.2395 19.9812 14.0292 20.4828 14.0247 21.0072C14.0201 21.5316 14.2217 22.0368 14.586 22.414L22.586 30.414C22.9611 30.7889 23.4697 30.9996 24 30.9996C24.5303 30.9996 25.0389 30.7889 25.414 30.414L33.414 22.414C33.7783 22.0368 33.9799 21.5316 33.9753 21.0072C33.9708 20.4828 33.7605 19.9812 33.3896 19.6104C33.0188 19.2395 32.5172 19.0292 31.9928 19.0247C31.4684 19.0201 30.9632 19.2217 30.586 19.586L24 26.172L17.414 19.586Z" fill="#FFFBFB" fill-opacity="0.65"/>
            </g>
        </svg>
      )}
      <p className="text-neutral-50 text-[14px] font-medium leading-tight">{isAll ? "View Less" : "View More"}</p>
    </div>
  );
}
