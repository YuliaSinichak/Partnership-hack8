
import React from "react";
import Image from "next/image";

import { inter, press_start } from "../fonts";
import AnimatedElement from '@/hooks/AnimatedElement'

export default function Report() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center max-w-7xl w-full px-6 mx-auto gap-8 lg:gap-14">
            <h2 className={`${press_start.className} text-hack-green text-2xl lg:text-4xl my-2 text-center`}>Наші партнери</h2>
            <Image src="/Partners.svg" width={1200} height={800} alt="Partners" className="mx-auto rounded-xl m-2"/>
           
        </section>
    )
}