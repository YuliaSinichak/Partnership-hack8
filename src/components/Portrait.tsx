import Image from "next/image"
import { press_start,inter } from "@/app/fonts"

export default function Portrait() {
    return (
        <div className="relative min-h-screen flex flex-col justify-center items-center w-full">
            <h1 className={`${press_start.className} flex self-center text-center text-2xl lg:text-3xl text-hack-green m-10`}>
                Портрет учасника
            </h1>
            <Image
                src="/BubblesPart1.png"
                width={500}
                height={500}
                alt=" "
                className="absolute -left-32 bottom-16 opacity-30 lg:opacity-100 blur-sm lg:blur-none max-w-lg pointer-events-none levitate-bubbles1"
            />
            <Image
                src="/BubblesPart2.png"
                width={500}
                height={500}
                alt=" "
                className="absolute -left-28 bottom-8 opacity-30 lg:opacity-100 blur-xs lg:blur-none max-w-lg pointer-events-none levitate-bubbles2"
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
        <div className="justify-between align-middle items-center gap-5">
                <Image
                src="/HackPhoto.png"
                width={350}
                height={350}
                alt="hack"
                className="absolute -right-12 bottom-36 w-auto hidden lg:flex z-10 "
                />
            <div className="flex flex-col gap-4 items-center justify-center self-center ">
                <div className="border border-hack-green p-10 text-center text-xl rounded-xl w-80 hover:scale-102 backdrop-blur-lg">
                    <p className={`${press_start.className}`}>Для кого?</p>
                </div>
                <Image
                    src="/arrow.svg"
                    width={50}
                    height={50}
                    alt="arrow"
                    className="animate-bounce w-12 h-12 m-3 visible flex self-center"
                />
                <div className="border border-hack-green p-10 text-center rounded-xl w-80 hover:scale-102 backdrop-blur-lg">
                    <p className={`${inter.className}`}>Для креативної та ініціативної молоді, що зацікавлена розвиватись в IT</p>
                </div>
            </div>
          <Image
            src="/HackPhoto.png"
            width={350}
            height={350}
            alt="hack"
            className="absolute -left-12 bottom-36 w-auto hidden lg:flex z-10 rounded-xl"
          />
        </div>   
        </div>
    )
}