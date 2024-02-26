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
                className="hidden lg:flex absolute bottom-24 -left-12 pointer-events-none z-10 levitate-bubbles2"
            />
            <Image
                src="/feedbacks1.png"
                width={300}
                height={300}
                alt="feedbacks"
                className="hidden lg:flex absolute top-32 -right-12 pointer-events-none z-10 levitate-bubbles2"
            />
            <Image
                src="/BubblesPart1.png"
                width={500}
                height={500}
                alt=" "
                className="absolute -right-32 opacity-30 lg:opacity-100 blur-sm lg:blur-none max-w-lg pointer-events-none levitate-bubbles1 rotate-45 z-20"
            />
            <Image
                src="/BubblesPart2.png"
                width={500}
                height={500}
                alt=" "
                className="absolute -right-28 top-64 opacity-30 lg:opacity-100 blur-xs lg:blur-none max-w-lg pointer-events-none levitate-bubbles2 rotate-45 z-0"
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
                className="absolute -left-28 top-24 opacity-30 lg:opacity-100 blur-xs lg:blur-none max-w-lg pointer-events-none levitate-bubbles2 rotate-45 z-0"
            />
            <div className="flex flex-row gap-10 lg:gap-20 max-w-xl m-5">
                <div className="grid grid-col gap-10 z-20">
                    <Image
                        src="/partners/tskt.svg"
                        width={110}
                        height={50}
                        alt="tskt"
                        className="w-full max-w-5xl self-center"
                    />
                    <Image
                        src="/partners/Ukeess.svg"
                        width={110}
                        height={50}
                        alt="Ukeess"
                        className="w-full max-w-5xl self-center"
                    />
                    <Image
                        src="/partners/keenethics.svg"
                        width={110}
                        height={50}
                        alt="keenethics"
                        className="w-full max-w-5xl self-center"
                    />
                </div>
                <div className="grid grid-col gap-5 z-20">
                    <div className="border border-hack-green rounded-xl bg-black p-5 lg:p-12">
                        Все пройшло дуже гарно, учасники великі молодці і класно, що більшість були такі зацікавлені.
                    </div>
                    <div className="border border-hack-green rounded-xl bg-black p-5 lg:p-12">
                        Сподобались активні захисти проєктів. Був хороший склад суддів і гарна організація загалом.
                    </div>
                    <div className="border border-hack-green rounded-xl bg-black p-5 lg:p-12">
                        На змаганнях була крута командність і залученість людей, в яких горять очі!
                    </div>
                </div>

            </div>

        </div>
    )
}