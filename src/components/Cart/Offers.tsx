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
      heading: "Логотип компанії на бренд-волл та на сайті проєкту",
      details:
        "Розміщення логотипа компанії-партнера на бренд-волл проєкту, а також на сайті Хакатону.",
    },
    {
      heading: "Промоція в соціальних мережах (інформація про компанію)",
      details:
        "Розміщення інформації про компанію в соціальних мережах: згадка в Instagram-story, 1 пост в LinkedIn, Пост-дайджест у Telegram-каналі.",
    },
    {
      heading: "Логотип та згадка про компанію у постпроєктному відео",
      details:
        "Додавання логотипа компанії у відео, яке буде створено та виставлено в інстаграмі після успішного завершення Хакатону. Вказівка на компанію та її внесок у захід також буде присутня в цьому відео.",
    },
    {
      heading: "Участь у нетворкінгу",
      details:
        "Нетворкінг —  це зустрічі між учасниками, організаторами та представниками компанії в неформальній обстановці, що може стати відмінною нагодою для студентів знайти роботу або стажування, а для компаній - надати ці можливості. Час проведення орієнтовно година.",
    },
  ],
  Preceptor: [
    {
      heading: "Можливість залучення ментора та/або судді до змагань.",
      details:
        "Ментор – це людина, яка має досвід та знання в галузі, в якій працює команда. Він допомагає учасникам розв'язати проблеми, які виникають під час розробки проєкту. Під час івенту буде три менторські сесії дві з яких в перший день проведення події і одна сесія на другий день. Суддя – це людина, що оцінює проєкти, які були розроблені командами під час хакатону. Його відповідальністю буде оцінювання якості реалізації, відповідності тематиці хакатону, інноваційності, практичної цінності та інших параметрів. Відповідальний за цю посаду повинен бути присутнім у другий день події, щоб оцінити роботу команд.",
    },
    {
      heading: "Можливість провести воркшоп або тренінг серед учасників",
      details:
        "Воркшоп – це тип інтерактивного навчання, де учасники виконують низку навчальних дій. Наприклад, це може бути демонстраційний показ, практичне заняття або дискусійний клуб.	Тренінг - це певний вид навчання, який спрямований на підвищення рівня знань та навичок учасників. Його головною метою є навчання технік, прийомів та стратегій, які можуть бути корисними для вирішення конкретних завдань. Наприклад, тренінг з техніки комунікації, управління проєктами, web технологій і т.д..",
    },
    {
      heading: "Логотип на футболках усіх учасників та організаторів",
      details:
        "На спинах футболок всіх присутніх на заході людей, які вони отримають на відкритті Хакатону, буде надруковано логотип Вашої компанії.",
    },
    {
      heading: "Пост про компанію в Instagram",
      details:
        "Ми опублікуємо пост про Вашу компанію на нашій сторінці в Instagram, який буде доступний назавжди. В цьому пості ми надамо інформацію про Вашу компанію та зазначимо, що Ви є одним з наших основних партнерів на цьому хакатоні.",
    },
  ],
  AdVantage: [
    {
      heading: "World cafe",
      details:
        "World cafe — це метод взаємодії групи людей, спрямований на спільне творення та обмін ідеями шляхом розмов на заздалегідь визначену тему в невимушеній атмосфері. Компанії буде виділено 30 хвилин на взаємодію з учасниками.",
    },
    {
      heading: "Інтерактивні Instagram-story",
      details:
        "Спільно з нашою командою буде створено контент для промоції Instagram story на сторінці організації*. Приклади інтерактиву: рубрика “Питання-відповідь”; рубрика “Як проходить день нашого працівника” та інше. У компанії буде можливість створити максимум 5 таких інстаграм сторіз.",
    },
    {
      heading: "Логотип на плакатах",
      details:
        "на кожному плакаті, який буде розвішуватися містом буде надруковане лого Вашої компанії",
    },
    {
      heading: "Гра «Treasure hunt»",
      details:
        "Під час тижня живої реклами, яка буде проводитися за місяць до проєкту в Національному університеті “Львівська політехніка”, на території навчального закладу будуть розміщені подарунки (мерч), які надає Ваша компанія, і у форматі Instagram-story будуть розміщені підказки для пошуку. Після того як учасники знайдуть подарунки буде завантажено Instagram-story з переможцями і позначкою вашої компанії. Компанія може надати до трьох подарунків.",
    },
  ],
  LEGO: [
    {
      heading: "World cafe",
      details:
        "World cafe — це метод взаємодії групи людей, спрямований на спільне творення та обмін ідеями шляхом розмов на заздалегідь визначену тему в невимушеній атмосфері. Компанії буде виділено 30 хвилин на взаємодію з учасниками.",
    },
    {
      heading: "Гра «Treasure hunt»",
      details:
        "Під час тижня живої реклами, яка буде проводитися за місяць до проєкту в Національному університеті “Львівська політехніка”, на території навчального закладу будуть розміщені подарунки (мерч), які надає Ваша компанія, і у форматі Instagram-story будуть розміщені підказки для пошуку. Після того як учасники знайдуть подарунки буде завантажено Instagram-story з переможцями і позначкою вашої компанії. Компанія може надати до трьох подарунків.",
    },
    {
      heading: "Можливість залучення ментора та/або судді до змагань.",
      details:
        "Ментор – це людина, яка має досвід та знання в галузі, в якій працює команда. Він допомагає учасникам розв'язати проблеми, які виникають під час розробки проєкту. Під час івенту буде три менторські сесії дві з яких в перший день проведення події і одна сесія на другий день. Суддя – це людина, що оцінює проєкти, які були розроблені командами під час хакатону. Його відповідальністю буде оцінювання якості реалізації, відповідності тематиці хакатону, інноваційності, практичної цінності та інших параметрів. Відповідальний за цю посаду повинен бути присутнім у другий день події, щоб оцінити роботу команд.",
    },
    {
      heading: "Пост про компанію в Instagram",
      details:
        "Ми опублікуємо пост про Вашу компанію на нашій сторінці в Instagram, який буде доступний назавжди. В цьому пості ми надамо інформацію про Вашу компанію та зазначимо, що Ви є одним з наших основних партнерів на цьому хакатоні.",
    },
    {
      heading: "Участь у креативній загадці «Define solution»",
      details:
        "Завдання на декілька рівнів, яке потенційні учасники проєкту розв’язуватимуть самостійно. Загадка розпочнеться за місяць до проєкту, під час реєстрації учасників, і триватиме до початку Хакатону. Завдання буде формуватися вашою компанією з допомогою нашої команди та буде націлено на пошук перспективних ініціативних студентів, що володіють важливими для Вас навичками. Ви зможете ознайомитися із CV переможців, зв’язатися з ними, а також на закритті змагань нагородити їх своїм мерчем.",
    },
    {
      heading: "Розсилка вакансій у Telegram боті",
      details:
        "Піврічна розсилка вакансій та активностей(курсів, стажувань) від компанії у Telegram боті.",
    },
    {
      heading: "Розміщення банера компаній під час Хакатону",
      details:
        "Банер надається компанією",
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
        className={`cursor-pointer rounded-2xl w-full backdrop-blur-lg bg-black bg-opacity-30 flex flex-col border-grey justify-between gap-3 md:gap-5 p-8 lg:p-8 border-2 ${
          active ? "border-hack-green " : "border-neutral-500"
        }`}
      >
        <div className="flex w-full justify-between items-start max-w-xl ">
          <h5
            className={`${press_start.className} text-xl md:text-3xl self-center`}
          >
            {name}
          </h5>
          <button
            className={`${press_start.className} ${
              compulsory ? "cursor-auto" : "cursor-auto"
            } text-lg md:text-xl bg-black rounded-xl border-2 w-fit border-hack-green text-hack-green px-4 lg:px-10 py-2 self-center ml-5`}
          >{`${price}$`}</button>
        </div>
        <div className="w-full">
          {services.map((s, index) => (
            <li key={index} className={`${inter.className} text-md md:text-ld`}>
              {s}
            </li>
          ))}
        </div>
        <div className="flex flex-row-reverse justify-between items-end md:gap-4 gap-1 z-20">
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
            <span className="text-gray-400 bg-black border border-gray-400 text-xs md:text-md md:py-3 py-1.5 md:px-4 px-2 rounded-lg h-fit">
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
      className=" relative min-h-screen flex flex-col justify-center items-center px-6 mx-5 w-full gap-8 my-10"
      id="offers"
    >
      <h2
        className={`${press_start.className} text-3xl text-hack-green my-16  md:text-5xl text-center self-center`}
      >
        Пропозиції
      </h2>
      <div className="flex flex-col-reverse lg:flex-row-reverse gap-10 items-start">
      <div className="flex flex-col justify-center text-left lg:max-w-lg">
        <h2 className={`${press_start.className} text-white text-xl`}>10% отриманих коштів підуть на допомогу ЗСУ</h2>
        <p className={`${inter.className} text-gray-500 font-italic text-sm`}>*Оплата буде здійснюватися за курсом НБУ</p>
        <p className={`${inter.className} text-gray-300 my-5`}>Кожен партнер проєкту має змогу долучитись до благодійного збору-розіграшу для ЗСУ в наших соціальних мережах. Серед людей, що задонатять, випадковим чином оберуться переможці, які отримають подарунки від компаній-партнерів.</p>
        <p className={`${inter.className} text-gray-300`}>Також після успішного завершення хакатону вам надається фото та відеозвіт від організаторів.</p>
      </div>
      <Image
          src="/Elipse.png"
          width={1000}
          height={1000}
          alt=" "
          className="hidden lg:flex absolute -right-32 bottom-12 pointer-events-none z-0"
       />
       <Image
          src="/BenyaOffers.png"
          width={600}
          height={600}
          alt=" "
          className="hidden lg:flex absolute -right-4 bottom-64 pointer-events-none levitate-bubbles2 z-0"
       />
       <Image
          src="/Hearts.png"
          width={300}
          height={300}
          alt=" "
          className="hidden lg:flex absolute right-80 bottom-24 pointer-events-none z-0 levitate-bubbles1"
       />
      <div className="flex flex-col self-center items-center justify-center gap-4 z-20">
        {sellingPoints.map((sp) => {
          return <Card key={sp.name} handleModal={handleModal} {...sp} />;
        })}
      </div>
      </div>
    </section>
  );
}
