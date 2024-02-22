import Image from "next/image"
import { press_start,inter } from "@/app/fonts"
import { useState } from "react"

function Contact(){
    
}

export default function Contacts() {
    return(
        <div className="grid gap-5 md:gap-20 w-full grid-cols-1 lg:grid-cols-3 p-20" id="contacts">
            <div className="col-span-1 w-full flex flex-col justify-center items-center order-2 lg:order-1 hover:scale-105 transition-all duration-500 py-5">
            <Image src="/arrow.svg" width={50} height={50} alt="arrow" className="animate-bounce w-12 h-12 m-3" /> 
            <p className={` ${press_start.className} text-gray-300 text-xs text-center p-4 `}>відповідальний за корпоративні зв`язки</p>
            <div className="flex flex-col min-w-[250px] h-full p-5 border-2 border-hack-green rounded-xl hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-green-700">
                <Image src="/Illia.svg" width={380} height={356} alt="Illia Shestak" className="mx-auto rounded-xl m-2"/>
                <p className={`${press_start.className}  text-hack-green text-center`}>Шестак Ілля</p>
                <a className={`${inter.className} text-white flex justify-center mt-4 hover:scale-105`} href="tel:+380 66 665 84 31">
                    +380666658431
                </a>
                <a className={`${inter.className} text-white flex justify-center mb-5 hover:scale-105 `} href="mailto:illia.shestak.best@gmail.com">
                    illia.shestak.best@gmail.com
                </a>
            </div>
            </div>
            <div className="col-span-1 w-full flex flex-col justify-center items-center order-1 lg:order-1 hover:scale-105 transition-all duration-500 py-5">
            <Image src="/arrow.svg" width={50} height={50} alt="arrow" className="animate-bounce w-12 h-12 m-3" /> 
            <p className={` ${press_start.className} text-gray-300 text-xs text-center p-4 `}>головна організаторка</p>
            <div className="flex flex-col min-w-[250px] h-full p-5 border-2 border-hack-green rounded-xl hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-green-700">
                <Image src="/Tanya.svg" width={380} height={356} alt="Tetiana Panchuk" className="mx-auto rounded-xl m-2"/>
                <p className={`${press_start.className}  text-hack-green text-center`}>Тетяна Панчук</p>
                <a className={`${inter.className} text-white flex justify-center mt-4 hover:scale-105`} href="tel:+380 66 665 84 31">
                    +380978077397
                </a>
                <a className={`${inter.className} text-white flex justify-center mb-5 hover:scale-105 `} href="mailto:illia.shestak.best@gmail.com">
                    tetianapanchuk04@gmail.com 
                </a>
            </div>
            </div>
            <div className="col-span-1 w-full flex flex-col justify-center items-center order-2 lg:order-1 hover:scale-105 transition-all duration-500 py-5">
            <Image src="/arrow.svg" width={50} height={50} alt="arrow" className="animate-bounce w-12 h-12 m-3" /> 
            <p className={` ${press_start.className} text-gray-300 text-xs text-center p-4 `}>відповідальна за корпоративні зв`язки</p>
            <div className="flex flex-col min-w-[250px] h-full p-5 border-2 border-hack-green rounded-xl hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-green-700">
                <Image src="/Mariia.svg" width={380} height={356} alt="Mariia Zarvanska" className="mx-auto rounded-xl m-2"/>
                <p className={`${press_start.className}  text-hack-green text-center`}>Марія Зарванська</p>
                <a className={`${inter.className} text-white flex justify-center mt-4 hover:scale-105`} href="tel:+380 66 665 84 31">
                    +380991323749
                </a>
                <a className={`${inter.className} text-white flex justify-center mb-5 hover:scale-105 `} href="mailto:illia.shestak.best@gmail.com">
                    mariia.zarvanska@best-eu.org
                </a>
            </div>
            </div>
        </div>
    )
}
