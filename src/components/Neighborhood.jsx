import React from 'react'

const Neighborhood = () => {

    return (
        <div className='max-w-[1170px] mx-auto px-4'>
            <div className='mb-8'>
                <h4 className="text-amber-500 text-2xl md:text-[32px] font-semibold leading-10">Neighborhood</h4>
                <p className="text-neutral-50 text-opacity-50 text-sm md:text-base font-normal">Deam home villas San Diego, CA, USA</p>
            </div>
            <div className='h-[300px] sm:h-[400px] md:h-[600px]'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24308.405522692854!2d49.86453847275389!3d40.39664973771896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1saz!2saz!4v1687471442993!5m2!1saz!2saz" 
                    width="100%" 
                    height="100%"
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    )
}

export default Neighborhood