import { press_start } from "@/app/fonts";
import Image from "next/image";

const partnersData = [
  {
    imgSrc: "/partner1.svg",
    alt: "partner1",
  },
  {
    imgSrc: "/partner2.svg",
    alt: "partner2",
  },
  {
    imgSrc: "/partner3.svg",
    alt: "partner3",
  },
  {
    imgSrc: "/partner4.svg",
    alt: "partner4",
  },
  {
    imgSrc: "/partner5.svg",
    alt: "partner5",
  },
  {
    imgSrc: "/partner6.svg",
    alt: "partner6",
  },
  {
    imgSrc: "/partner7.svg",
    alt: "partner7",
  },
  {
    imgSrc: "/partner8.svg",
    alt: "partner8",
  },
  {
    imgSrc: "/partner9.svg",
    alt: "partner9",
  },
  {
    imgSrc: "/partner10.svg",
    alt: "partner10",
  },
  {
    imgSrc: "/partner11.svg",
    alt: "partner11",
  },
  {
    imgSrc: "/partner12.svg",
    alt: "partner12",
  },
  {
    imgSrc: "/partner13.svg",
    alt: "partner13",
  },
  {
    imgSrc: "/partner14.svg",
    alt: "partner14",
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
      className="h-32 w-52 hover:scale-105 transition-all duration-500"
    />
  );
};

export default function Partners() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center max-w-7xl w-full px-6 mx-auto gap-8 lg:gap-14">
      <h2
        className={`${press_start.className} text-hack-green text-2xl lg:text-4xl my-2 text-center`}
      >
        Наші партнери
      </h2>

      <div className="gap-5 flex flex-wrap w-full justify-center">
        {partnersData.map((p, index) => (
          <Partner imgSrc={p.imgSrc} alt={p.alt} />
        ))}
      </div>
    </section>
  );
}
