import React from 'react'

const Features = () => {
    const data = [
        {
            id: 1,
            svg: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="icon-park-outline:elevator">
                    <g id="Group">
                    <path id="Vector" d="M3 7H45M3 41H45M24 7V41M33 20V28M6 7H42V41H6V7Z" stroke="#FFFBFB" stroke-opacity="0.65" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path id="Vector_2" d="M30 23L33 20L36 23M15 28V20M12 25L15 28L18 25" stroke="#FFFBFB" stroke-opacity="0.65" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    </g>
                </svg>,
            title: "Elevator"
        },
        {
            id: 2,
            svg: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="ic:outline-local-laundry-service">
                    <path id="Vector" d="M36 4.02L12 4C9.78 4 8 5.78 8 8V40C8 42.22 9.78 44 12 44H36C38.22 44 40 42.22 40 40V8C40 5.78 38.22 4.02 36 4.02ZM36 40H12L11.98 8H36V40Z" fill="#FFFBFB" fill-opacity="0.65"/>
                    <path id="Vector_2" d="M16 14C17.1046 14 18 13.1046 18 12C18 10.8954 17.1046 10 16 10C14.8954 10 14 10.8954 14 12C14 13.1046 14.8954 14 16 14Z" fill="#FFFBFB" fill-opacity="0.65"/>
                    <path id="Vector_3" d="M22 14C23.1046 14 24 13.1046 24 12C24 10.8954 23.1046 10 22 10C20.8954 10 20 10.8954 20 12C20 13.1046 20.8954 14 22 14Z" fill="#FFFBFB" fill-opacity="0.65"/>
                    <path id="Vector_4" d="M24 38C29.52 38 34 33.52 34 28C34 22.48 29.52 18 24 18C18.48 18 14 22.48 14 28C14 33.52 18.48 38 24 38ZM28.72 23.28C31.32 25.88 31.32 30.12 28.72 32.72C26.12 35.32 21.88 35.32 19.28 32.72L28.72 23.28Z" fill="#FFFBFB" fill-opacity="0.65"/>
                    </g>
                </svg>,
            title: "Laundry Facilities"
        },
        {
            id: 3,
            svg: <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="iconoir:closet">
                    <g id="Group">
                    <path id="Vector" d="M18.5 28H16.5M32.5 28H30.5" stroke="#FFFBFB" stroke-opacity="0.65" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path id="Vector_2" d="M24.5 4H41.3C41.6183 4 41.9235 4.12643 42.1485 4.35147C42.3736 4.57652 42.5 4.88174 42.5 5.2V42.8C42.5 43.1183 42.3736 43.4235 42.1485 43.6485C41.9235 43.8736 41.6183 44 41.3 44H24.5M24.5 4H7.7C7.38174 4 7.07652 4.12643 6.85147 4.35147C6.62643 4.57652 6.5 4.88174 6.5 5.2V42.8C6.5 43.1183 6.62643 43.4235 6.85147 43.6485C7.07652 43.8736 7.38174 44 7.7 44H24.5M24.5 4V44" stroke="#FFFBFB" stroke-opacity="0.65" stroke-width="3"/>
                    </g>
                    </g>
                </svg>,
            title: "Walk in Closet"
        },
        {
            id: 4,
            svg: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="akar-icons:fire">
                    <g id="Group">
                    <path id="Vector" d="M24 44C14.06 44 6 38.836 6 30V29.824C6 25.588 8.676 22.2 12.75 20C16.648 17.896 18.952 14.02 18.376 10L17.25 4L21.422 5.59C28.936 8.45 35.194 13.414 39.25 19.722C41.0333 22.4622 41.9882 25.6587 42 28.928V30C42 33.124 40.992 35.79 39.25 37.93" stroke="#FFFBFB" stroke-opacity="0.65" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path id="Vector_2" d="M24 44C20.686 44 18 41.134 18 37.6C18 34.8 20.032 32.558 21.82 30.504L24 28L26.18 30.504C27.968 32.56 30 34.8 30 37.6C30 41.134 27.314 44 24 44Z" stroke="#FFFBFB" stroke-opacity="0.65" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    </g>
                </svg>,
            title: "FirePlaces"
        },
        {
            id: 5,
            svg: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="ic:baseline-balcony">
                    <path id="Vector" d="M20 20V24H16V20H20ZM32 24V20H28V24H32ZM42 28V44H6V28H8V20C8 11.16 15.16 4 24 4C32.84 4 40 11.16 40 20V28H42ZM14 32H10V40H14V32ZM22 32H18V40H22V32ZM22 8.16C16.32 9.12 12 14.06 12 20V28H22V8.16ZM26 28H36V20C36 14.06 31.68 9.12 26 8.16V28ZM30 32H26V40H30V32ZM38 32H34V40H38V32Z" fill="#FFFBFB" fill-opacity="0.65"/>
                    </g>
                </svg>,
            title: "Balcony"
        },
        {
            id: 6,
            svg: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="ic:outline-park">
                    <path id="Vector" d="M34 24H38L24 4L10.1 24H14L6.19995 36H20.04V44H27.94V36H42L34 24ZM13.58 32L21.38 20H17.76L24.02 11L30.32 20H26.52L34.52 32H13.58Z" fill="#FFFBFB" fill-opacity="0.65"/>
                    </g>
                </svg>,
            title: "Garden"
        }
    ]

  return (
    <div className='max-w-[1170px] mx-auto my-14 px-4'>
        <h4 className="text-amber-500 text-2xl md:text-[32px] font-semibold leading-10 mb-4 md:mb-8">Features</h4>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-[30px]'>
            {data.map((item, index)=>(
                <div key={index} className='border-[3px] border-[var(--grey--light)] rounded-lg flex flex-col justify-center items-center py-7'>
                    <div>
                        {item.svg}
                    </div>
                    <p className='text-[14px] text-[var(--white2)] font-semibold mt-[10px] text-center'>{item.title}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Features