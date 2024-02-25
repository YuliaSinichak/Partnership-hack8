"use client";
// Import Swiper React components
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import Image from "next/image";

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
      className="rounded-lg lg:rounded-2xl"
    >
      <SwiperSlide>
        <Image
          src="/Carusel1.png"
          alt="hack"
          width={600}
          height={450}
          className="rounded-3xl mx-auto"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/Carusel2.png"
          alt="hack"
          width={600}
          height={450}
          className="rounded-3xl mx-auto"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/Carusel3.png"
          alt="hack"
          width={600}
          height={450}
          className="rounded-3xl mx-auto"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/Carusel4.png"
          alt="hack"
          width={600}
          height={450}
          className="rounded-3xl mx-auto"
        />
      </SwiperSlide>
    </Swiper>
  );
}
