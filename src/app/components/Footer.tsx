import Image from "next/image"

export default function Footer() {
    return <footer className="w-full p-4">
        <div className="max-w-7xl mx-auto h-full flex flex-col md:flex-row justify-between items-center gap-5 lg:gap-0">
            <Image src="/EllipseGreen.png" width={1300} height={100} alt=" " className="invisible md:visible p-0 w-full absolute left-0" />
            <Image src="/BestLogo.svg" width={110} height={50} alt="best logo" className="w-40 h-16" />
            <Image src="/HackLogo.svg" width={60} height={50} alt="hack logo" className="w-40 h-16" />
            <div className="flex w-40 justify-between"> 
                <a href="https://t.me/bestlviv">
                    <Image src="/telegram.svg" width={30} height={30} alt="telegram" className=""/>
                </a>
                <a href="https://www.linkedin.com/company/bestlviv/">
                    <Image src="/linkedin.svg" width={30} height={30} alt="linkedin"/>
                </a>
                <a href="https://www.instagram.com/best_lviv/">
                    <Image src="/instagram.svg" width={30} height={30} alt="instagram"/>
                </a>
                <a href="https://www.facebook.com/BEST.Lviv/">
                    <Image src="/facebook.svg" width={30} height={30} alt="facebook"/>
                </a>
            </div>
        </div>
    </footer>
}