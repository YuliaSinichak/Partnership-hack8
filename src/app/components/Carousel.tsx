'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';


import Image from 'next/image';

export default function Carousel() {
    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={1}
            loop
            modules={[Autoplay]}
            autoplay={{
                delay: 2500,
                disableOnInteraction: true,
            }}
            className='rounded-2xl'
        >
            <SwiperSlide>
                <Image src='/Carusel5.svg' alt="hack" width={600} height={450} className="rounded-3xl mx-auto" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src='/Carusel2.svg' alt="hack" width={600} height={450} className="rounded-3xl mx-auto" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src='/Carusel3.svg' alt="hack" width={600} height={450} className="rounded-3xl mx-auto" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src='/Carusel4.svg' alt="hack" width={600} height={450} className="rounded-3xl mx-auto" />
            </SwiperSlide>

        </Swiper>
    )
}