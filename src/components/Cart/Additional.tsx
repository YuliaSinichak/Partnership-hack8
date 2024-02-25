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
    heading: "Лого на плакатах",
    details:
      "Плакати про подію будуть розповсюджені на території кампусу та студмістечка.",
  },
  {
    heading: "Логотип на футболках",
    details:
      "Проєкт буде мати свій мерч, який поширюватиметься серед учасників змагання та осередку BEST Lviv. Ми розмістимо лого Вашої компанії на спині футболок.",
  },
  {
    heading: "Розсилка вакансій в телеграм боті",
    details:
      "Проєкт буде мати свого бота в телеграмі для реєстрації команд учасників (зможливістью прикріпити своє CV), розсилки важливої інформації та комунікації під час заходу.",
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
    <section className="flex flex-col items-center justify-center px-6 mx-auto w-full max-w-5xl gap-8 my-12">
      <h2
        className={`${press_start.className} text-4xl md:text-4xl mt-16 text-hack-green  text-center`}
      >
        Додаткові Опції
      </h2>
      <div className="flex flex-wrap justify-center border border-hack-green rounded-xl w-full">
        {options.map((option) => {
          return <Option key={option.name} {...option} />;
        })}
      </div>
    </section>
  );
}
