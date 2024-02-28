"use client";
import { press_start } from "@/app/fonts";
import * as Dialog from "@radix-ui/react-dialog";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import useSmoothScrollTo from "@/hooks/useSmoothScrollTo";
import Drawer from "./Drawer";

type MenuItem = {
  name: string;
  href: string;
};

const navigation: MenuItem[] = [
  {
    name: "Про нас",
    href: "#about",
  },
  {
    name: "Пропозиції",
    href: "#offers",
  },
  {
    name: "Контакти",
    href: "#contacts",
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScrollClick = useSmoothScrollTo();

  return (
    <motion.header
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="z-50 w-full px-2 md:px-6 flex justify-between py-[1.5vw] backdrop-blur-sm fixed items-center align-middle"
    >
      <div
        onClick={() => {
          handleScrollClick("#top");
        }}
        className="logo cursor-pointer relative z-20 flex align-middle gap-3 md:top-0 top-[0.8vw]"
      >
        <Image
          src="/HackLogo.svg"
          alt="logo"
          height={50}
          width={100}
          className="lg:w-12 w-8 ml-4 lg:ml-8"
        />
      </div>
      <div className=" hidden xl:flex gap-8 xl:gap-20 leading-none">
        {navigation.map((nav_item) => (
          <span
            onClick={() => {
              handleScrollClick(nav_item.href);
            }}
            key={nav_item.name}
            className={`${press_start.className} h-full cursor-pointer hover:scale-105 transition-all duration-500`}
          >
            {nav_item.name}
          </span>
        ))}
      </div>
      <button
        onClick={() => handleScrollClick("#about")}
        className={`${press_start.className} border-2 border-white lg:py-[1.1vw] px-2 lg:px-[1.6vw] rounded-lg h-fit leading-none lg:w-auto w-full text-white backdrop-blur-sm hover:scale-105 transition-all duration-500 relative z-30 hidden xl:flex items-center`}
      >
        Дізнатись більше
      </button>
      <Dialog.Root>
        <div className="flex xl:hidden relative top-1">
          <Dialog.Trigger asChild>
            <button
              type="button"
              className="-m-2.5 relative z-10 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
              onClick={() => setMobileMenuOpen(true)}
            >
              <HamburgerMenuIcon className="h-7 w-7" aria-hidden="true" />
            </button>
          </Dialog.Trigger>
        </div>
        <Drawer
          setMobileMenuOpen={setMobileMenuOpen}
          navigation={navigation}
          mobileMenuOpen={mobileMenuOpen}
        />
      </Dialog.Root>
    </motion.header>
  );
}
