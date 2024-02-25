import Image from "next/image"
import { press_start } from "@/app/fonts"

export default function Feedbacks(){
    return(
        <div className="relative z-20 flex flex-col min-h-screen">
            <h1 className={`${press_start.className} flex self-center text-hack-green text-2xl lg:text-4xl my-10`}>Відгуки</h1>
            <Image
                src="/feedbacks2.png"
                width={500}
                height={500}
                alt="feedbacks"
                className="absolute bottom-0 -left-96 max-w-md pointer-events-none"
            />
            <Image
                src="/feedbacks1.png"
                width={500}
                height={500}
                alt="feedbacks"
                className="absolute top-0 -right-96 max-w-md pointer-events-none"
            />

            <div className="flex flex-row gap-20 max-w-xl">
                <div className="grid grid-col gap-10">
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
                <div className="grid grid-col gap-5">
                    <div className="border border-hack-green rounded-xl p-12">
                        Все пройшло дуже гарно, учасники великі молодці і класно, що більшість були такі зацікавлені.
                    </div>
                    <div className="border border-hack-green rounded-xl p-12">
                        Сподобались активні захисти проєктів. Був хороший склад суддів і гарна організація загалом.
                    </div>
                    <div className="border border-hack-green rounded-xl p-12">
                        На змаганнях була крута командність і залученість людей, в яких горять очі!
                    </div>
                </div>

            </div>

        </div>
    )
}