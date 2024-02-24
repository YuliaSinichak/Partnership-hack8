"use client";
import { press_start } from "@/app/fonts";
import Image from "next/image";

import useSmoothScrollTo from "@/hooks/useSmoothScrollTo";

export default function Hero() {
  const handleScrollClick = useSmoothScrollTo();
  return (
    <section className="min-h-screen w-full flex flex-col mt-32" id="top">
      <div className="flex flex-row items-end ">
        <div className="flex mx-auto items-center self-start p-6">
          <Image
            src="/BenyaHero.svg"
            height={700}
            width={700}
            alt="hero logo"
            className="lg:absolute bottom-0 left-36 mx-5 w-5xl "
          />
        </div>
        <div className="flex flex-col mx-20 text-hack-green text-right gap-3">
          <p className={`${press_start.className}`}>
            Тема: мілітарі (військова)
          </p>
          <h1
            className={`${press_start.className} align-top items-center text-5xl`}
          >
            BEST::HACKath0n
          </h1>
          <p className={`${press_start.className}`}>11-12 травня</p>
          <Image
            src="/BubblesHero.svg"
            height={500}
            width={500}
            alt="bubbles"
            className="lg:absolute top-56 right-0 duration-100  w-xl "
          />
          <button
            onClick={() => handleScrollClick("#offers")}
            className={`${press_start.className} flex self-end border-2 border-hack-green lg:py-[1.4vw] px-2 lg:px-[1.6vw] rounded-lg leading-none max-w-xs text-center w-full text-hack-green backdrop-blur-sm hover:scale-105 transition-all duration-500 relative z-30 xl:flex top-[1vw] justify-center`}
          >
            Стати партнером
          </button>
        </div>
      </div>
      <Image
        src="/arrow.svg"
        width={50}
        height={50}
        alt="arrow"
        className="absolute  cursor-pointer animate-bounce w-12 h-12 m-3 self-center bottom-0"
        onClick={() => handleScrollClick("#about")}
      />
    </section>
  );
}
