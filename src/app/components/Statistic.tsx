import Image from "next/image"
import { press_start, inter, inter_bold } from "../fonts"
import {CiFacebook} from "react-icons/ci"

export default function Statistic() {
    return(
        <div className=" flex flex-col w-auto p-36 mx-40 justify-center">
            <h1 className={` ${press_start.className } flex text-5xl text-hack-green my-12 self-center`}>Статистика</h1>
            <div className="flex flex-row gap-4">
                <div className="grid grid-col-4 gap-4 text-center text-lg lg:text-xl">
                    <div className="flex flex-row h-auto border border-white rounded-lg p-2 px-4 justify-between w-52 gap-6 items-center hover:scale-[102%] transition-all duration-500">
                        <Image src="/instagram.svg" width={30} height={30} alt="instagram" className=" w-16"/>
                        <h2 className={`${inter_bold.className} text-3xl`}>2700+</h2>
                    </div>
                    <div className="flex flex-row h-auto border border-white rounded-lg p-2 px-4 justify-between w-52 gap-6 items-center hover:scale-[102%] transition-all duration-500">
                        <Image src="/telegram.svg" width={30} height={30} alt="instagram" className="w-16"/>
                        <h2 className={`${inter_bold.className} text-3xl`}>800+</h2>
                    </div>
                    <div className="flex flex-row h-auto border border-white rounded-lg p-2 px-4 justify-between w-52 gap-6 items-center hover:scale-[102%] transition-all duration-500">
                        <Image src="/linkedin.svg" width={30} height={30} alt="instagram" className=" w-16"/>
                        <h2 className={`${inter_bold.className} text-3xl`}>270+</h2>
                    </div>
                    <div className="flex flex-row h-auto border text-white border-white rounded-lg p-2 px-4 justify-between w-52 gap-6 items-center hover:scale-[102%] transition-all duration-500">
                        <CiFacebook className="h-12 w-auto"/>
                        
                        <h2 className={`${inter_bold.className} text-3xl`}>2100+</h2>
                    </div>
                </div>
                <div className={`${inter.className} flex items-center flex-col py-20 px-14 border rounded-xl border-hack-green`}>
                    <h2 className={`${press_start.className} flex text-hack-green mb-5 text-xl`}>Статистика минулого хаку</h2>
                        <div className="text-lg flex gap-3 flex-col">
                            <li>
                                 Кількість переглядів на постах про відкриття реєстрації на наших сторінках: <span className="text-hack-green">14.4k+</span>
                            </li>
                            <li>Користувачі, що пройшли повну реєстрацію: <span className="text-hack-green">304</span> </li>
                            <li>Зареєстрованих команд: <span className="text-hack-green">41</span></li>
                            <li>Команди, які пройшли відбір: <span className="text-hack-green">15</span></li>
                        </div>
                </div>
            </div>
        </div>
        
    )
}