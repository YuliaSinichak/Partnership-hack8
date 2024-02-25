"use client";
import { inter, press_start } from "@/app/fonts";
import { toggleModal } from "@/redux/modalSlice";
import { toggleSponsorship } from "@/redux/sponsorshipSlice";
import { RootState } from "@/redux/store";
import { CardProps, ModalParams, dataItem } from "@/types";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

//TODO: тут треба описати вибіркові пакети
const explanation: {
  Basic: dataItem[];
  Preceptor: dataItem[];
  AdVantage: dataItem[];
  LEGO: dataItem[];
} = {
  Basic: [
    {
      heading: "Логотип компанії на банері та на сайті проєкту",
      details:
        "Логотип компанії на банері та на сайті проєкту —  розміщення логотипа компанії-партнера на бренд-волл проєкту, а також на сайті Хакатону.",
    },
    {
      heading: "Промоція в соціальних мережах",
      details:
        "Поширення 2 сторіс в Instagram @best_lviv у день відкриття, закриття або після події. Контент складатиметься з відзнятого нами матеріалу та ресурсами, наданими компанією.",
    },
    {
      heading: "Логотип та згадка про компанію у постпроєктному відео",
      details:
        "Для додаткового ознайомлення студентів з нашими партнерами, ми додамо до сайту BEC Ваше лого. Воно буде розміщене на сайті bec2023.vercel.app",
    },
    {
      heading: "Участь у нетворкінгу",
      details:
        "Під час події буде розміщений brand wall — великий банер,  на якому знаходяться логотипи всіх партнерів.",
    },
  ],
  Preceptor: [
    {
      heading: "Завдання для CS/ID",
      details:
        "Компанія може надати завдання для Case Study або Innovative Design. Вони будуть обговорюватись командою організаторів разом із компанією, що їх надає. Пропозиція обмежена: компанія може надати до одного завдання на один з напрямків: Case Study або Innovative Design. Загалом, від всіх спонсорів категорія може містити не більше 2 завдань.",
    },
    {
      heading: "Надання судді, ментора",
      details:
        "Компанія може надати суддю або/і ментора для Case Study/Innovative Design. Вони повинні орієнтуватися в темах завдань, а також володіти англійською мовою рівня B1. Обмеження на кількість наданих менторів немає.",
    },
    {
      heading: "Тренінг, воркшоп для учасників",
      details:
        "Під час офіційного відкриття представник компанії отримає можливість провести тренінг або воркшоп тривалістю до 1 години. Партнер обирає будь-яку тему, яка може зацікавити та розвинути студентів або ж допомогти їм під час виконання завдання. Теми будуть обговорюватись командою організаторів разом із компанією, що їх надає.",
    },
    {
      heading: "Номінація від компанії ",
      details:
        "Це можливість обрати власну номінацію на змаганнях. Переможця у ній визначаєте Ви та нагороджуєте призом. Номінація може стосуватись використання певних технологій або інших особливостей роботи команди на Ваш вибір.",
    },
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
  ],
  AdVantage: [
    {
      heading: "Розміщення банера компанії під час події",
      details:
        "Впродовж змагання (25-27 листопада), Ви матимете змогу розмістити банер Вашої компанії на місці проведення.",
    },
    {
      heading: "Розіграш на інфостійках",
      details:
        "Інфостійки — це стенди, на яких розміщується рекламна інформація товарів, заходів чи брендів. Вони відбудуться в корпусах НУ “ЛП” за місяць до події. На них буде оголошено розіграш призів від Вашої компанії. Для цього повідомте, будь ласка, які саме призи Ви готові надати та які умови для участі у розіграші Вас цікавлять: підписка на сторінку компанії у соцмережах, поширення на своїй сторінці, коментування поста або виконання інших умов, які будуть визначені за домовленістю з Вами.",
    },
    {
      heading: "День з компанією",
      details:
        "Впродовж одного дня, після проведення події, сторіс нашої сторінки в Instagram BEST Lviv буде наповнений контентом про Вашу компанію. Ви надішлете відео про Вашу компанію або ж зможете провести різні рубрики в сторіс для взаємодії з аудиторією. Загалом таких сторіс буде до 5-ти.",
    },
    {
      heading: "Публікація на нашій сторінці LinkedIn ",
      details:
        "Поширення поста на сторінці LinkedIn BEST Lviv з короткою інформацією про Вашу компанію, досягненнями компанії та інформацією про партнерство. Текст надсилається Вашою компанією та публікується під час змагань або після проведення події.",
    },
    {
      heading: "Пост у нашому Telegram-каналі",
      details:
        "Пост у Telegram-каналі BEST Lviv Students, який міститиме інформацію про діяльність Вашої компанії. Наповнення надається [надсилається Вашою компанією] та публікується перед змаганнями або після проведення події.",
    },
  ],
  LEGO: [
    {
      heading: "Розміщення банера компанії під час події",
      details:
        "Впродовж змагання (25-27 листопада), Ви матимете змогу розмістити банер Вашої компанії на місці проведення.",
    },
    {
      heading: "Розіграш на інфостійках",
      details:
        "Інфостійки — це стенди, на яких розміщується рекламна інформація товарів, заходів чи брендів. Вони відбудуться в корпусах НУ “ЛП” за місяць до події. На них буде оголошено розіграш призів від Вашої компанії. Для цього повідомте, будь ласка, які саме призи Ви готові надати та які умови для участі у розіграші Вас цікавлять: підписка на сторінку компанії у соцмережах, поширення на своїй сторінці, коментування поста або виконання інших умов, які будуть визначені за домовленістю з Вами.",
    },
    {
      heading: "День з компанією",
      details:
        "Впродовж одного дня, після проведення події, сторіс нашої сторінки в Instagram BEST Lviv буде наповнений контентом про Вашу компанію. Ви надішлете відео про Вашу компанію або ж зможете провести різні рубрики в сторіс для взаємодії з аудиторією. Загалом таких сторіс буде до 5-ти.",
    },
    {
      heading: "Публікація на нашій сторінці LinkedIn ",
      details:
        "Поширення поста на сторінці LinkedIn BEST Lviv з короткою інформацією про Вашу компанію, досягненнями компанії та інформацією про партнерство. Текст надсилається Вашою компанією та публікується під час змагань або після проведення події.",
    },
    {
      heading: "Пост у нашому Telegram-каналі",
      details:
        "Пост у Telegram-каналі BEST Lviv Students, який міститиме інформацію про діяльність Вашої компанії. Наповнення надається [надсилається Вашою компанією] та публікується перед змаганнями або після проведення події.",
    },
  ],
};

const Card = ({
  name,
  price,
  services,
  annotation,
  active,
  compulsory,
  handleModal,
}: CardProps) => {
  const dispatch = useDispatch();

  const handleTogglePacket = () => {
    if (!compulsory) {
      dispatch(toggleSponsorship({ name }));
    }
  };

  return (
    <div className={"flex w-full"}>
      <div
        onClick={(e) => {
          e.stopPropagation();
          handleTogglePacket();
        }}
        className={`cursor-pointer rounded-2xl w-full backdrop-blur-lg bg-black bg-opacity-30 flex flex-col border-grey justify-between gap-3 md:gap-5 p-4 lg:p-8 border-2 ${
          active ? "border-hack-green " : "border-neutral-500"
        }`}
      >
        <div className="flex w-full justify-between items-start max-w-xl">
          <h5
            className={`${press_start.className} text-xl md:text-4xl self-center`}
          >
            {name}
          </h5>
          <button
            className={`${press_start.className} ${
              compulsory ? "cursor-not-allowed" : "cursor-auto"
            } text-xl md:text-xl bg-black rounded-xl border-2 w-fit border-hack-green text-hack-green px-4 lg:px-10 py-2 self-center`}
          >{`${price}$`}</button>
        </div>
        <div className="w-full">
          {services.map((s, index) => (
            <li key={index} className={`${inter.className} text-md md:text-ld`}>
              {s}
            </li>
          ))}
        </div>
        <div className="flex flex-row justify-between items-end md:gap-4 gap-1">
          <button
            onClick={() => {
              handleModal({ name, modalData: explanation[name] as any });
            }}
          >
            <Image
              src="/info.svg"
              width={50}
              height={50}
              alt="info"
              className="md:w-12 w-8"
            />
          </button>
          {annotation && (
            <span className="text-white bg-black border border-white text-ms md:text-md md:py-3 py-1.5 md:px-4 px-2 rounded-lg h-fit">
              {annotation}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Offers() {
  const sellingPoints = useSelector((state: RootState) => state.sponsorship);

  const dispatch = useDispatch();

  const handleModal = ({ name, modalData }: ModalParams) =>
    dispatch(toggleModal({ name, modalData }));

  return (
    <section
      className="min-h-screen flex flex-col items-start justify-center px-6 mx-5 w-full gap-8 my-10"
      id="offers"
    >
      <h2
        className={`${press_start.className} text-3xl text-hack-green my-16  md:text-5xl text-center self-center`}
      >
        Пропозиції
      </h2>
      <div className="flex flex-col justify-center gap-4">
        {sellingPoints.map((sp) => {
          return <Card key={sp.name} handleModal={handleModal} {...sp} />;
        })}
      </div>
    </section>
  );
}
