import { inter, press_start } from "@/app/fonts";
import Image from "next/image";

interface ContactProps {
  name: string;
  imageSrc: string;
  phoneNumber: string;
  email: string;
  role: string;
  className?: string;
}

const Contact = ({
  name,
  imageSrc,
  phoneNumber,
  email,
  role,
  className = "",
}: ContactProps) => {
  return (
    <div
      className={`${className} col-span-1 w-full flex flex-col justify-center items-center order-2 lg:order-1 hover:scale-105 transition-all duration-500 `}
    >
      <Image
        src="/arrow.svg"
        width={50}
        height={50}
        alt="arrow"
        className="animate-bounce w-12 h-12 m-3 invisible lg:visible"
      />
      <p
        className={`${press_start.className} text-gray-300 text-xs text-center p-4 `}
      >
        {role}
      </p>
      <div className="flex flex-col min-w-[250px] h-full p-5 border-2 border-hack-green rounded-xl hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-green-700">
        <Image
          src={imageSrc}
          width={380}
          height={356}
          alt={name}
          className="mx-auto rounded-xl m-2"
        />
        <p className={`${press_start.className}  text-hack-green text-center`}>
          {name}
        </p>
        <a
          className={`${inter.className} text-white flex justify-center mt-4 hover:scale-102`}
          href={`tel:${phoneNumber}`}
        >
          {phoneNumber}
        </a>
        <a
          className={`${inter.className} text-white flex justify-center mb-5 hover:scale-102 `}
          href={`mailto:${email}`}
        >
          {email}
        </a>
      </div>
    </div>
  );
};

export default function Contacts() {
  return (
    <div
      className="grid gap-10 md:gap-x-20 w-full grid-cols-1 lg:grid-cols-3 p-5 lg:p-20"
      id="contacts"
    >
      <Contact
        name="Шестак Ілля"
        imageSrc="/Ilia.png"
        phoneNumber="+380666658431"
        email="illia.shestak@best-eu.org"
        role="відповідальний за корпоративні зв'язки"
        className="order-1"
      />
      <Contact
        name="Тетяна Панчук"
        imageSrc="/Tetiana.png"
        phoneNumber="+380978077397"
        email="tetiana.panchuk@best-eu.org"
        role="головна організаторка"
        className="order-first lg:order-1"
      />
      <Contact
        name="Марія Зарванська"
        imageSrc="/Mariia.png"
        phoneNumber="+380991323749"
        email="mariia.zarvanska@best-eu.org"
        role="відповідальна за корпоративні зв'язки"
        className="order-3"
      />
    </div>
  );
}
