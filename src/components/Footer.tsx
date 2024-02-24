import Image from "next/image";
import {
  LiaFacebook,
  LiaInstagram,
  LiaLinkedin,
  LiaTelegram,
} from "react-icons/lia";

export default function Footer() {
  return (
    <footer className="w-full relative ">
      <div className="max-w-7xl mx-auto grid grid-cols-2 justify-between align-middle items-center lg:grid-cols-3  p-6">
        <Image
          src="/BestLogo.svg"
          width={110}
          height={50}
          alt="best logo"
          className="h-14 lg:h-16 place-self-center"
        />
        <Image
          src="/HackLogo.svg"
          width={60}
          height={50}
          alt="hack logo"
          className=" h-14 lg:h-16 place-self-center"
        />
        <div className="flex mr-0 mt-4 lg:mt-0 gap-3 place-self-center self-center col-span-2 lg:col-span-1">
          <a href="https://t.me/bestlviv">
            <LiaTelegram className="h-10 w-10" />
          </a>
          <a href="https://www.linkedin.com/company/bestlviv/">
            <LiaLinkedin className="h-10 w-10" />
          </a>
          <a href="https://www.instagram.com/best_lviv/">
            <LiaInstagram className="h-10 w-10" />
          </a>
          <a href="https://www.facebook.com/BEST.Lviv/">
            <LiaFacebook className="h-10 w-10" />
          </a>
        </div>
      </div>
      <Image
        src="/EllipseGreen.png"
        width={1300}
        height={100}
        alt="ellipse green"
        className="invisible md:visible w-full bottom-0 absolute -z-10"
      />
    </footer>
  );
}
