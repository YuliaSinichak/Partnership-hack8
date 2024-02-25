import { press_start, inter } from "@/app/fonts"
import Image from "next/image"

export default function Sales(){
    return(
        <div className="relative z-0 min-h-screen w-full flex flex-col items-center justify-center">
            <Image
                src="/Elipse.png"
                width={500}
                height={500}
                alt=" "
                className="absolute -left-32 opacity-30 lg:opacity-100 blur-sm lg:blur-none max-w-lg pointer-events-none"
            />
            <Image
                src="/BubblesPart1.png"
                width={500}
                height={500}
                alt=" "
                className="absolute -left-32 opacity-30 lg:opacity-100 blur-sm lg:blur-none max-w-lg pointer-events-none levitate-bubbles1"
            />
            <Image
                src="/BubblesPart2.png"
                width={500}
                height={500}
                alt=" "
                className="absolute -left-28 opacity-30 lg:opacity-100 blur-xs lg:blur-none max-w-lg pointer-events-none levitate-bubbles2"
            />

            <Image
                src="/Elipse.png"
                width={500}
                height={500}
                alt=" "
                className="absolute -right-32 opacity-30 lg:opacity-100 blur-sm lg:blur-none max-w-lg pointer-events-none rotate-45"
            />
            <Image
                src="/BubblesPart1.png"
                width={500}
                height={500}
                alt=" "
                className="absolute -right-32 opacity-30 lg:opacity-100 blur-sm lg:blur-none max-w-lg pointer-events-none levitate-bubbles1 rotate-45"
            />
            <Image
                src="/BubblesPart2.png"
                width={500}
                height={500}
                alt=" "
                className="absolute -right-28  opacity-30 lg:opacity-100 blur-xs lg:blur-none max-w-lg pointer-events-none levitate-bubbles2 rotate-45"
            />
            <div className="flex flex-col relative z-20 justify-center items-center">
            <h1 className={`${press_start.className} text-2xl lg:text-5xl text-hack-green my-12`} >Знижки</h1>
            <p className={`${inter.className} text-2xl m-2`}><span className="text-hack-green">-5%</span> партнерам попередніх проєктів</p>
            <div className="grid grid-col text-lg">
                <p className={`${inter.className}`}>базовий + 4 додаткові опції <span className="text-hack-green">-50$</span></p>
                <p className={`${inter.className}`}>базовий + один пакет <span className="text-hack-green">-50$</span></p>
                <p className={`${inter.className}`}>базовий + два пакети <span className="text-hack-green">-150$</span></p>
            </div>
            </div>
        </div>
    )
}