"use client";
import { press_start } from "@/app/fonts";
import Image from "next/image";

import useSmoothScrollTo from "@/hooks/useSmoothScrollTo";

export default function Hero() {
  const handleScrollClick = useSmoothScrollTo();

  return (
    <section className="min-h-screen relative w-full flex flex-col pt-32" id="top">
      <div className="flex flex-col xl:flex-row">
        <div className="flex mx-auto  p-6">
          <Image
            src="/BenyaHero.png"
            height={700}
            width={700}
            alt="hero logo"
            className="mx-5 w-5xl z-20"
          />
        </div>
        <div className="flex flex-col mx-5 text-hack-green self-center xl:self-center text-center xl:text-right gap-3">
          <p className={`${press_start.className}`}>
            Тема: military (військова)
          </p>
          <h1
            className={`${press_start.className} align-top items-center text-xl lg:text-5xl`}
          >
            BEST::HACKath0n
          </h1>
          <p className={`${press_start.className} `}>11-12 травня</p>
          
          <button
            onClick={() => handleScrollClick("#offers")}
            className={`${press_start.className} flex self-center xl:self-end border-2 border-hack-green py-4 lg:py-[1.4vw] px-2 lg:px-[1.6vw] rounded-lg leading-none max-w-xs text-center w-full text-hack-green backdrop-blur-xl bg-black hover:scale-105 transition-all duration-500 z-40 xl:flex justify-center`}
          >
            Стати партнером
          </button>
          <div className="max-w-screen-2xl overflow-hidden">
          <Image
                src="/Elipse.png"
                width={1000}
                height={1000}
                alt=" "
                className="hidden lg:flex absolute -right-64 top-24 max-w-3xl pointer-events-none z-0 rotate-45 overflow-hidden"
            />
          <Image
                src="/BubblesPart1.png"
                width={500}
                height={500}
                alt=" "
                className="absolute -right-24 bottom-0 opacity-30 lg:opacity-70 blur-sm lg:blur-none max-w-lg pointer-events-none levitate-bubbles1 z-30 overflow-hidden"
            />
            <Image
                src="/BubblesPart2.png"
                width={500}
                height={500}
                alt=" "
                className="absolute -right-16 bottom-0  opacity-30 lg:opacity-70 blur-xs lg:blur-none max-w-lg pointer-events-none levitate-bubbles2 z-30 overflow-hidden"
            />
            <Image
                src="/Elipse.png"
                width={1000}
                height={1000}
                alt=" "
                className="hidden lg:flex lg:absolute -left-96 top-8 max-w-4xl pointer-events-none z-0 overflow-hidden"
            />
            <Image
                src="/BubblesPart1.png"
                width={500}
                height={500}
                alt=" "
                className="hidden md:flex absolute -left-24 bottom-0 opacity-30 lg:opacity-70 blur-sm lg:blur-none max-w-lg pointer-events-none levitate-bubbles1 rotate-45 z-30 overflow-hidden"
            />
            <Image
                src="/BubblesPart2.png"
                width={500}
                height={500}
                alt=" "
                className="hidden md:flex absolute -left-16 bottom-0 opacity-30 lg:opacity-70 blur-xs lg:blur-none max-w-lg pointer-events-none levitate-bubbles2 rotate-45 z-30 overflow-hidden"
            />
          </div>
         
        </div>
      </div>
      <Image
        src="/arrow.svg"
        width={50}
        height={50}
        alt="arrow"
        className="xl:absolute cursor-pointer animate-bounce w-12 h-12 m-10 xl:m-3 self-center bottom-32 z-40"
        onClick={() => handleScrollClick("#about")}
      />
    </section>
  );
}