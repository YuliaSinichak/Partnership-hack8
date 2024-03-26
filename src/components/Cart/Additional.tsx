"use client";
import Image from "next/image";

import { toggleModal } from "@/redux/modalSlice";
import { toggleOptionActive } from "@/redux/optionalSlice";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

import { dataItem, iOptional, ModalParams } from "@/types";

import { press_start } from "@/app/fonts";

import { Checkbox } from "@/components/ui/checkbox";

//TODO: тут треба описати вибіркові пакети

const explanation: dataItem[] = [
  {
    heading: "Розсилка вакансій у Telegram боті",
    details:
      "Піврічна розсилка вакансій та активностей(курсів, стажувань) від компанії у Telegram боті.",
  },
  {
    heading: "Розміщення банера компаній під час Хакатону",
    details:
      " ",
  },
  {
    heading: "Доступ до бази CV учасників",
    details:
      "Це можливість отримати доступ до бази даних CV учасників, що пройшли відбір на хакатон.",
  },
  {
    heading: "Номінація від компанії",
    details:
      "Ви можете обрати власну номінацію на змаганнях, яка буде закріплена за Вашою компанією. Ви визначаєте у ній переможця та нагороджуєте призом. Номінація може стосуватись використання певних технологій або інших особливостей роботи команди на Ваш вибір.",
  },
  {
    heading: "Участь у креативній загадці «Define solution»",
    details:
      "Завдання на декілька рівнів, яке потенційні учасники проєкту розв’язуватимуть самостійно. Загадка розпочнеться за місяць до проєкту, під час реєстрації учасників, і триватиме до початку Хакатону. Завдання буде формуватися вашою компанією з допомогою нашої команди та буде націлено на пошук перспективних ініціативних студентів, що володіють важливими для Вас навичками. Ви зможете ознайомитися із CV переможців, зв’язатися з ними, а також на закритті змагань нагородити їх своїм мерчем.",
  },
];

const Option = ({ name, price, active }: iOptional) => {
  const dispatch = useDispatch();

  const handleToggleOption = () => {
    dispatch(toggleOptionActive({ name }));
  };

  const handleModal = ({ name, modalData }: ModalParams) =>
    dispatch(toggleModal({ name, modalData }));

  return (
    <div
      className={`flex w-full justify-between items-center md:py-4 py-2 px-2 sm:px-4 md:px-8 `}
    >
      <div className="flex items-center ">
        <Checkbox
          id={name}
          onCheckedChange={handleToggleOption}
          checked={active}
        />
        <label
          className="px-3 lg:text-2xl leading-none text-white cursor-pointer"
          htmlFor={name}
        >
          {name}
        </label>
      </div>

      <div className="right flex gap-2 md:gap-4 lg:px-4 align-middle">
        <div
          className={`${press_start.className} text-center md:text-md text-hack-green rounded-lg border-2 w-24 border-hack-green py-2 self-center`}
        >
          {`$${price}`}
        </div>

        <button
          onClick={() =>
            handleModal({ name: "Optional", modalData: explanation })
          }
        >
          <Image
            src="/info.svg"
            width={50}
            height={50}
            alt="info"
            className="h-12 w-12 min-w-[3rem]"
          />
        </button>
      </div>
    </div>
  );
};

export default function Offers() {
  const options = useSelector((state: RootState) => state.optionalPackets);

  return (
    <section className=" relative flex flex-col items-center justify-center px-6 mx-auto w-full max-w-5xl gap-8 my-12">
      <h2
        className={`${press_start.className} text-4xl md:text-4xl mt-16 text-hack-green  text-center z-10`}
      >
        Додаткові Опції
      </h2>
      <Image
        src="/Elipse.png"
        width={1000}
        height={1000}
        alt=" "
        className="hidden lg:flex absolute self-center -top-64 opacity-100 pointer-events-none z-0"
      />
      <div className="flex flex-wrap justify-center border bg-black border-hack-green rounded-xl w-full z-10">
        {options.map((option) => {
          return <Option key={option.name} {...option} />;
        })}
      </div>
    </section>
  );
}
