import { inter, inter_bold, press_start } from "@/app/fonts";
import Image from "next/image";
import {
  LiaFacebook,
  LiaInstagram,
  LiaLinkedin,
  LiaTelegram,
} from "react-icons/lia";

export default function Statistic() {
  return (
    <div className=" flex flex-col w-auto p-4 lg:p-21 mx-5 my-20 lg:mx-10 justify-center">
      <h1
        className={` ${press_start.className} flex text-3xl lg:text-5xl text-hack-green my-12 self-center`}
      >
        Статистика
      </h1>
      <div className="relative flex flex-col lg:flex-row gap-4">
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 text-center text-lg lg:text-xl">
          <div className="flex flex-row h-auto border border-white rounded-lg p-2 px-4 justify-between w-auto lg:w-52 lg:gap-6 items-center hover:scale-[102%] transition-all duration-500">
              <a href="https://www.instagram.com/best_lviv/">
                <LiaInstagram className="h-10 w-10 lg:h-14 lg:w-14" />
              </a>
            <h2 className={`${inter_bold.className} text-xl lg:text-3xl`}>2700+</h2>
          </div>
          <div className="flex flex-row h-auto border border-white rounded-lg p-2 px-4 justify-between w-auto lg:w-52 lg:gap-6 items-center hover:scale-[102%] transition-all duration-500">
              <a href="https://t.me/bestlviv">
                <LiaTelegram className="h-10 w-10 lg:h-14 lg:w-14" />
              </a>
            <h2 className={`${inter_bold.className} text-xl lg:text-3xl`}>800+</h2>
          </div>
          <div className="flex flex-row h-auto border border-white rounded-lg p-2 px-4 justify-between w-auto lg:w-52 lg:gap-6 items-center hover:scale-[102%] transition-all duration-500">
              <a href="https://www.linkedin.com/company/bestlviv/">
                <LiaLinkedin className="h-10 w-10 lg:h-14 lg:w-14" />
              </a>
            <h2 className={`${inter_bold.className} text-xl lg:text-3xl`}>270+</h2>
          </div>
          <div className="flex flex-row h-auto border text-white border-white rounded-lg p-2 px-4 justify-between w-auto lg:w-52 lg:gap-6 items-center hover:scale-[102%] transition-all duration-500">
              <a href="https://www.facebook.com/BEST.Lviv/">
                <LiaFacebook className="h-10 w-10 lg:h-14 lg:w-14" />
              </a>
            <h2 className={`${inter_bold.className} text-xl lg:text-3xl`}>2100+</h2>
          </div>
        </div>
        <Image
                src="/Elipse.png"
                width={600}
                height={600}
                alt=" "
                className="hidden lg:flex lg:absolute -right-64 -top-0 pointer-events-none z-0 rotate-90 animate-pulse-new"
            />
        <div
          className={`${inter.className} relative flex items-center bg-black flex-col py-5 lg:py-20 px-5 lg:px-14 border rounded-xl border-hack-green max-w-xl z-10`}
        >
           <Image
                src="/BenyaStat.png"
                width={200}
                height={200}
                alt=" "
                className="absolute -right-16 -bottom-36 md:-bottom-12 pointer-events-none z-20 levitate-bubbles2 "
            />
          
          <h2
            className={`${press_start.className} flex text-hack-green mb-5 text-lg lg:text-xl`}
          >
            Статистика минулого хаку
          </h2>
          <div className="text:md lg:text-lg flex gap-3 flex-col">
            <li>
              Кількість переглядів на постах про відкриття реєстрації на наших
              сторінках: <span className="text-hack-green">14.4k+</span>
            </li>
            <li>
              Користувачі, що пройшли повну реєстрацію:{" "}
              <span className="text-hack-green">304</span>{" "}
            </li>
            <li>
              Зареєстрованих команд: <span className="text-hack-green">41</span>
            </li>
            <li>
              Команди, які пройшли відбір:{" "}
              <span className="text-hack-green">15</span>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}
