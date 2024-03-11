import Image from "next/image"
import { press_start } from "@/app/fonts"

export default function Feedbacks(){
    return(
        <div className="relative flex flex-col justify-center items-center w-full min-h-screen mx-5 my-10 ">
            <h1 className={`${press_start.className} flex self-center text-hack-green text-2xl lg:text-4xl my-10`}>Відгуки</h1>
            <Image
                src="/feedbacks2.png"
                width={300}
                height={300}
                alt="feedbacks"
                className="hidden xl:flex absolute bottom-24 -left-12 pointer-events-none z-10 levitate-bubbles2"
            />
            <Image
                src="/feedbacks1.png"
                width={300}
                height={300}
                alt="feedbacks"
                className="hidden xl:flex absolute top-32 -right-12 pointer-events-none z-10 levitate-bubbles2"
            />
            <Image
                src="/BubblesPart1.png"
                width={500}
                height={500}
                alt=" "
                className="absolute -right-32 opacity-30 xl:opacity-100 blur-sm xl:blur-none max-w-lg pointer-events-none levitate-bubbles1 rotate-45 z-20"
            />
            <Image
                src="/BubblesPart2.png"
                width={500}
                height={500}
                alt=" "
                className="absolute -right-28 top-64 opacity-30 xl:opacity-100 blur-xs xl:blur-none max-w-lg pointer-events-none levitate-bubbles2 rotate-45 z-0"
            />
            <Image
                src="/BubblesPart1.png"
                width={500}
                height={500}
                alt=" "
                className="absolute -left-32 opacity-30 lg:opacity-100 blur-sm lg:blur-none max-w-lg pointer-events-none levitate-bubbles1 rotate-45 z-20"
            />
            <Image
                src="/BubblesPart2.png"
                width={500}
                height={500}
                alt=" "
                className="absolute -left-28 top-24 opacity-30 xl:opacity-100 blur-xs xl:blur-none max-w-lg pointer-events-none levitate-bubbles2 rotate-45 z-0"
            />
            <div className="grid grid-cols-3 gap-5 lg:gap-10 max-w-3xl m-5 items-center justify-between">
                    <Image
                        src="/partners/tskt.svg"
                        width={110}
                        height={50}
                        alt="tskt"
                        className="w-full max-w-3xl self-center col-span-1 h-30"
                    />
                <div className="border border-hack-green rounded-xl backdrop-blur-lg p-5 lg:p-12 col-span-2">
                    Все пройшло дуже гарно, учасники великі молодці і класно, що більшість були такі зацікавлені.
                </div>
                    
                <Image
                    src="/partners/Ukeess.svg"
                    width={110}
                    height={50}
                    alt="Ukeess"
                    className="w-full max-w-3xl self-center col-span-1"
                />
                <div className="border border-hack-green rounded-xl backdrop-blur-lg p-5 lg:p-12 col-span-2">
                    Сподобались активні захисти проєктів. Був хороший склад суддів і гарна організація загалом.
                </div>
                    
                <Image
                    src="/partners/keenethics.svg"
                    width={200}
                    height={70}
                    alt="keenethics"
                    className="w-full max-w-3xl self-center col-span-1"
                />
                <div className="border border-hack-green rounded-xl backdrop-blur-lg p-5 lg:p-12 col-span-2">
                        На змаганнях була крута командність і залученість людей, в яких горять очі!
                </div>
                

            </div>

        </div>
    )
}