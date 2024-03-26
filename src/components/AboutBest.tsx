import Image from "next/image";

import { inter, inter_bold, press_start } from "@/app/fonts";

export default function AboutBest() {
  return (
    <section
      className="relative h-auto flex flex-col items-center justify-center max-w-6xl w-full px-6 mx-auto gap-8 lg:gap-14 mt-20"
      id="about"
    >
      <Image
            src="/BenyaBest.png"
            width={100}
            height={100}
            alt=" "
            className="absolute -top-20 self-center pointer-events-none rotate-and-bounce"
          />
      <h2
        className={`${press_start.className} text-hack-green text-2xl my-4 md:text-4xl text-center`}
      >
        Про BEST Lviv
      </h2>
      <div className="grid gap-5 w-full grid-cols-12">
        <div className="md:col-span-5 col-span-12">
          <img src="/BestLogo.svg" alt="logo" className="w-10/12 mx-auto" />
        </div>

        <p
          className={`${inter.className} text-center lg:text-left text-sm md:text-xl p-3 md:col-span-7 col-span-12 relative`}
        >
          <Image
            src="/Elipse.png"
            width={600}
            height={600}
            alt=" "
            className="absolute -left-4 lg:-left-24 -top-64 pointer-events-none animate-pulse-new"
          />
          <span className={inter_bold.className}>
            BEST Lviv (Board of European Students of Technology)
          </span>
          – осередок міжнародної неприбуткової громадської організації, який
          об’єднує студентів технічних спеціальностей. Нашою місією є розвиток
          студентів через обмін знаннями та співпраці компаній, університетів та
          студентів Європи.
        </p>
      </div>
      <div className=" min-h-screen w-full mt-20 items-center">
        <Image
          src="/Europe.png"
          width={2000}
          height={2000}
          alt="Europe"
          className="md:absolute max-w-5xl w-full "
        />
        <div
          className={`${press_start.className} grid grid-col justify-center md:justify-end ml-10 md:ml-0 lg:text-4xl text-2xl gap-5`}
        >
          <div className="flex flex-row gap-4 text-hack-green">
            85
            <span className={` text-white  text-lg lg:text-3xl`}>
              осередків
            </span>
          </div>
          <div className="flex flex-row gap-4 text-hack-green">
            30
            <span className={` text-white text-lg lg:text-3xl`}>країн</span>
          </div>
          <div className="flex flex-row gap-4 text-hack-green">
            35
            <span className={` text-white text-lg lg:text-3xl`}>
              років досвіду
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
