import React from 'react'
import { MdOutlineBed } from "react-icons/md";
import { FaBath } from "react-icons/fa";
import DetailsMainSlide from './DetailsMainSlide';

const DetailsMain = ({ details }) => {
    return (
        <div className="w-full mx-auto pt-32">
            <div className="flex w-full flex-col">
                <DetailsMainSlide details={details} />
                <div className='self-center max-w-[1170px] w-full flex justify-between mt-3 px-4'>
                    <div className='flex flex-col gap-4'>
                        <p className="text-[var(--white2)] text-xl md:text-2xl font-semibold select-none">{details.price} $</p>
                        <div className='flex gap-6 text-neutral-50 text-opacity-60 text-base sm:text-xl md:text-2xl font-semibold'>
                            <div className="flex items-center">
                                <p>{details.square} sq ft</p>
                            </div>
                            <div className="flex items-center justify-center">
                                <MdOutlineBed />
                                <p className="leading-tight ml-1">{details.bedroom}</p>
                            </div>
                            <div className="flex items-center justify-center">
                                <FaBath />
                                <p className="ml-1">{details.bath}</p>
                            </div>
                        </div>
                        <button className='w-[170px]'>Enquire</button>
                    </div>
                    <div>
                        <svg className='cursor-pointer' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="ant-design:share-alt-outlined">
                                <path id="Vector" d="M23.5 20.75C22.6094 20.75 21.7875 21.0625 21.1437 21.5844L14.6687 16.9C14.7772 16.3049 14.7772 15.6951 14.6687 15.1L21.1437 10.4156C21.7875 10.9375 22.6094 11.25 23.5 11.25C25.5687 11.25 27.25 9.56875 27.25 7.5C27.25 5.43125 25.5687 3.75 23.5 3.75C21.4313 3.75 19.75 5.43125 19.75 7.5C19.75 7.8625 19.8 8.20937 19.8969 8.54062L13.7469 12.9937C12.8344 11.7844 11.3844 11 9.75 11C6.9875 11 4.75 13.2375 4.75 16C4.75 18.7625 6.9875 21 9.75 21C11.3844 21 12.8344 20.2156 13.7469 19.0063L19.8969 23.4594C19.8 23.7906 19.75 24.1406 19.75 24.5C19.75 26.5687 21.4313 28.25 23.5 28.25C25.5687 28.25 27.25 26.5687 27.25 24.5C27.25 22.4313 25.5687 20.75 23.5 20.75ZM23.5 5.875C24.3969 5.875 25.125 6.60312 25.125 7.5C25.125 8.39688 24.3969 9.125 23.5 9.125C22.6031 9.125 21.875 8.39688 21.875 7.5C21.875 6.60312 22.6031 5.875 23.5 5.875ZM9.75 18.75C8.23438 18.75 7 17.5156 7 16C7 14.4844 8.23438 13.25 9.75 13.25C11.2656 13.25 12.5 14.4844 12.5 16C12.5 17.5156 11.2656 18.75 9.75 18.75ZM23.5 26.125C22.6031 26.125 21.875 25.3969 21.875 24.5C21.875 23.6031 22.6031 22.875 23.5 22.875C24.3969 22.875 25.125 23.6031 25.125 24.5C25.125 25.3969 24.3969 26.125 23.5 26.125Z" fill="#FFFBFB" />
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsMain