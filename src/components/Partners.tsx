import { press_start } from "@/app/fonts";
import Image from "next/image";

const partnersData = [
  {
    imgSrc: "/partners/soft.svg",
    alt: "softserve",
  },
  {
    imgSrc: "/partners/tskt.svg",
    alt: "Tskt",
  },
  {
    imgSrc: "/partners/GlobalLogic.svg",
    alt: "GlobalLogic",
  },
  {
    imgSrc: "/partners/Leobit.svg",
    alt: "Leobit",
  },
  {
    imgSrc: "/partners/sombra.svg",
    alt: "Sombra",
  },
  {
    imgSrc: "/partners/SiTime.svg",
    alt: "SiTime",
  },
  {
    imgSrc: "/partners/Lionwood.svg",
    alt: "Lionwood",
  },
  {
    imgSrc: "/partners/osfdigital.svg",
    alt: "osfdigital",
  },
  {
    imgSrc: "/partners/qubstudio.svg",
    alt: "qubstudio",
  },
  {
    imgSrc: "/partners/DataArt.svg",
    alt: "DataArt",
  },
  {
    imgSrc: "/partners/Comptools.svg",
    alt: "Comptools",
  },
  {
    imgSrc: "/partners/Ukeess.svg",
    alt: "Ukeess",
  },
  {
    imgSrc: "/partners/keepit.svg",
    alt: "keepit",
  },
  {
    imgSrc: "/partners/keenethics.svg",
    alt: "keenethics",
  },
];

const Partner = ({
  imgSrc,
  alt,
}: {
  imgSrc: string;
  className?: string;
  alt: string;
}) => {
  return (
    <Image
      src={imgSrc}
      alt={alt}
      height={128}
      width={208}
      className="h-32 hover:scale-105 transition-all duration-500"
    />
  );
};

export default function Partners() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center max-w-7xl w-full px-6 mx-auto gap-8 lg:gap-14 mt-20">
      <h2
        className={`${press_start.className} text-hack-green text-2xl lg:text-4xl my-2 text-center`}
      >
        Нас підтримували
      </h2>

      <div className="gap-10 flex flex-wrap w-full justify-center">
        {partnersData.map((p, index) => (
          <Partner imgSrc={p.imgSrc} alt={p.alt} />
        ))}
      </div>
    </section>
  );
}
