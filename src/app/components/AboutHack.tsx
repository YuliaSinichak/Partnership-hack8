import Image from "next/image";
import AnimatedElement from "@/hooks/AnimatedElement";
import Carousel from "./Carousel";

import { inter, press_start, inter_bold } from "../fonts";

export default function AboutHack() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center max-w-6xl lg:mx-auto my-12 mx-10" id='about'>
            <h3 className={`${press_start.className} text-hack-green text-2xl md:text-4xl text-center`}>Hackath0n - це...</h3>
            <div className="flex grid-rows gap-4 items-center p-2 lg:text-left text-center">
                <div className={`${inter.className} col-span-2 p-5`}>
                    <p className="pb-5">BEST::HACKath0n — це захід, під час якого студенти IT-спеціальностей у командах створюють новий програмний продукт протягом 24 годин у форматі non-stop programming.</p>
                    <p>BEST Lviv вже ввосьме організовує BEST::HACKath0n, надаючи можливість студентам українських університетів продемонструвати та вдосконалити свої професійні навички у сфері ІТ, роботи в команді, познайомитися з однодумцями й поспілкуватися з представниками компаній.</p>            
                </div>
                <Image src="/Helmet.svg" width={700} height={700} alt="helmet" className=" hidden w-4xl lg:flex col-span-1 object-left-top " />
                
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-11 items-center">
                    
                    <div className=" pl-6">
                        <Carousel />
                    </div>
                   

                <div className="lg:text-left text-center">
                    <h1 className={`${press_start.className} text-2xl text-hack-green pb-5`}>Тема:</h1>
                    {/* <AnimatedElement direction="right" delay={0.2}> */}
                    <p className={`${inter_bold.className} pb-4`}>Military (військова) </p>
                    <p className="">На меті учасників – створення MVP (Minimal Viable Product) інноваційної онлайн-платформи, яка стане в нагоді у цей непростий час для допомоги військовим/цивільним на окупованих територіях.</p>
                </div>
            </div>
        </section>
    )
}