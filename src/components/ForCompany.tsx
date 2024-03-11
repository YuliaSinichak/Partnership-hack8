import { inter, press_start } from "@/app/fonts";
import Image from "next/image";

export default function ForCompany() {
  return (
    <section className="relative min-h-screen flex flex-col items-between mx-auto gap-8 lg:gap-14 my-20 px-10 lg:px-32 max-w-7xl">
      <h3
        className={`${press_start.className} text-hack-green text-2xl lg:text-3xl text-center`}
      >
        Для партнерів
      </h3>
      <Image
        src="/BubblesPart1.png"
        width={500}
        height={500}
        alt=" "
        className="absolute -right-32 -top-32 opacity-30 lg:opacity-100 blur-sm lg:blur-none max-w-lg pointer-events-none levitate-bubbles1 rotate-45 z-0"
      />
      <Image
        src="/BubblesPart2.png"
        width={500}
        height={500}
        alt=" "
        className="absolute -right-28 -top-32 opacity-30 lg:opacity-100 blur-xs lg:blur-none max-w-lg pointer-events-none levitate-bubbles2 rotate-45"
      />
      <Image
        src="/BubblesPart1.png"
        width={500}
        height={500}
        alt=" "
        className="absolute -left-32 -bottom-32 opacity-30 lg:opacity-100 blur-sm lg:blur-none max-w-lg pointer-events-none levitate-bubbles1 rotate-45 z-0"
      />
      <Image
        src="/BubblesPart2.png"
        width={500}
        height={500}
        alt=" "
        className="absolute -left-28 -bottom-32 opacity-30 lg:opacity-100 blur-xs lg:blur-none max-w-lg pointer-events-none levitate-bubbles2 rotate-45"
      />
      <div className="grid grid-row-2 lg:grid-cols-2 lg:gap-11 gap-4 h-[50vw] max-h-64 text-2xl ">
        <div className="grid grid-row-3 gap-2 text-center text-sm lg:text-lg">
          <p
            className={`border rounded-xl border-hack-green px-5 lg:px-10 py-2 z-10 flex items-center justify-center hover:scale-[102%] transition-all duration-500 backdrop-blur-lg ${inter.className}`}
          >
            Підвищення впізнаваності бренду серед студентів
          </p>
          <p
            className={`border rounded-xl border-hack-green px-5 lg:px-10 py-2 z-10 flex items-center justify-center hover:scale-[102%] transition-all duration-500 backdrop-blur-lg ${inter.className}`}
          >
            Інвестиція в амбітну й талановиту молодь
          </p>
          <p
            className={`border rounded-xl border-hack-green px-5 lg:px-10 py-2 z-10 flex items-center justify-center hover:scale-[102%] transition-all duration-500 backdrop-blur-lg ${inter.className}`}
          >
            Ефективний піар, що спрямований на цільову аудиторію
          </p>
        </div>
        <div className="relative flex items-center justify-center">
          <Image
            src="/BenyaPartners.png"
            width={150}
            height={150}
            alt=" "
            className="absolute -left-4 -bottom-16 lg:-left-28 lg:-bottom-32 pointer-events-none levitate-bubbles2 rotate-90 z-30"
          />
          <Image
            src="/ForCompany.png"
            width={450}
            height={450}
            alt="hack"
            className="w-auto z-10"
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/ForCompany2.png"
            width={400}
            height={400}
            alt="hack"
            className="w-auto hidden lg:flex z-10"
          />
        </div>
        <div className="grid grid-row-3 gap-2 text-center text-sm lg:text-lg">
          <p
            className={`border rounded-xl border-hack-green px-5 lg:px-10 py-2 z-10 flex items-center justify-center hover:scale-[102%] transition-all duration-500 backdrop-blur-lg ${inter.className}`}
          >
            Можливість відібрати ініціативних студентів із подальшою
            перспективою працевлаштування
          </p>
          <p
            className={`border rounded-xl border-hack-green px-5 lg:px-10 py-2 z-10 flex items-center justify-center hover:scale-[102%] transition-all duration-500 backdrop-blur-lg ${inter.className}`}
          >
            Підтримка Збройних сил України
          </p>
          <p
            className={`border rounded-xl border-hack-green px-5 lg:px-10 py-2 z-10 flex items-center justify-center hover:scale-[102%] transition-all duration-500 backdrop-blur-lg ${inter.className}`}
          >
            Можливість знайти креативні рішення проблем у сфері military
          </p>
        </div>
      </div>
    </section>
  );
}
