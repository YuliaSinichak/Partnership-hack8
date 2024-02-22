import Image from "next/image";
import { inter, press_start } from "../fonts";
import AnimatedElement from '@/hooks/AnimatedElement';


export default function ForCompany() {
    return (
        <section className="min-h-screen flex flex-col items-between mx-auto gap-8 lg:gap-14 my-20 px-32 max-w-7xl">
            <h3 className={`${press_start.className} text-hack-green text-2xl lg:text-3xl text-center`}>Для партнерів</h3>
                <div className="grid grid-row-2 lg:grid-cols-2 lg:gap-11 gap-4 h-[50vw] max-h-64 text-2xl ">
                    <div className="grid grid-row-3 gap-2 text-center text-sm lg:text-lg">
                        <p className={`border rounded-xl border-hack-green px-5 lg:px-10 py-2 z-10 flex items-center justify-center hover:scale-[102%] transition-all duration-500 ${inter.className}`}>Підвищення впізнаваності бренду серед студентів.</p>
                        <p className={`border rounded-xl border-hack-green px-5 lg:px-10 py-2 z-10 flex items-center justify-center hover:scale-[102%] transition-all duration-500 ${inter.className}`}>Інвестиція в амбітну й талановиту молодь.</p>
                        <p className={`border rounded-xl border-hack-green px-5 lg:px-10 py-2 z-10 flex items-center justify-center hover:scale-[102%] transition-all duration-500 ${inter.className}`}>Ефективний піар, що спрямований на цільову аудиторію.</p>
                    </div>
                    <div className="flex items-center justify-center">
                    <Image src="/ForPartners1.svg" width={450} height={450} alt="hack" className="w-auto" />
                    </div> 
                    <div className="flex items-center justify-center">
                    <Image src="/ForPartners2.svg" width={400} height={400} alt="hack" className="w-auto hidden lg:flex " /> 
                    </div>
                    <div className="grid grid-row-3 gap-2 text-center text-sm lg:text-lg">
                        <p className={`border rounded-xl border-hack-green px-5 lg:px-10 py-2 z-10 flex items-center justify-center hover:scale-[102%] transition-all duration-500 ${inter.className}`}>Можливість відібрати ініціативних студентів із подальшою перспективою працевлаштування.</p>
                        <p className={`border rounded-xl border-hack-green px-5 lg:px-10 py-2 z-10 flex items-center justify-center hover:scale-[102%] transition-all duration-500 ${inter.className}`}>Підтримка Збройних сил України.</p>
                        <p className={`border rounded-xl border-hack-green px-5 lg:px-10 py-2 z-10 flex items-center justify-center hover:scale-[102%] transition-all duration-500 ${inter.className}`}>Можливість знайти креативні рішення проблем у сфері military.</p>
                    </div>
                    
            </div>
        
        </section>
    )
}