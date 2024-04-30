import React from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import technologiesData, { IconData } from '../../app/components/data/tecno';



export const Techs: React.FC = () => {
    return (
        <>
        <div className='pb-20 pt-10 flex items-center justify-center text-center'>
            <h2 className='text-4xl font-bold bg-gradient-to-r from-yellow-100 to-amber-500 text-transparent bg-clip-text'>Technologies</h2>
        </div>
            <Swiper
                id='devs-swiper'
                modules={[Autoplay]}
                freeMode={true}
                slidesPerView={5}
                loop={true}
                spaceBetween={20}
                speed={5000}
                grabCursor={true}
                direction={'horizontal'}
                autoplay={{
                    delay: 1,
                    disableOnInteraction: false,
                }}
            >
                {technologiesData.map((icon: IconData, index: number) => (
                    <SwiperSlide key={index} className=' gap-10 flex flex-col items-center justify-center mx-auto text-center drop-shadow-lg'>
                        {<icon.component  />}
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
