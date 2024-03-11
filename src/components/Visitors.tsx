"use client"
import { Doughnut } from 'react-chartjs-2'
import {Chart, Tooltip, Title, ArcElement, Legend, plugins} from 'chart.js'
import { press_start, inter } from '@/app/fonts'
import Image from 'next/image'
import { text } from 'stream/consumers'
Chart.register(
    Tooltip, Title, ArcElement, Legend
)

const dataCourses = {
    datasets: [{
        data: [27, 53, 11, 6, 3],
        
        backgroundColor:[
        'rgb(108, 232, 109)',
        'rgb(68, 213, 65)',
        'rgb(61, 186, 45)',
        'rgb(47, 152, 51)',
        'rgb(49, 110, 62)',
        ],

        borderWidth: 0,

        hoverOffset: 5,

        circumference: 360,
    
    }],
    
    labels: [
        'I курс',
        'II курс',
        'III курс',
        'IV курс',
        'Магістратура'
    ],
};

const dataLang = {
    datasets: [{
        data: [45, 20, 7, 15, 13],

        backgroundColor:[
            'rgb(108, 232, 109)',
            'rgb(68, 213, 65)',
            'rgb(61, 186, 45)',
            'rgb(47, 152, 51)',
            'rgb(49, 110, 62)',
        ],

        borderWidth: 0,

        hoverOffset: 10,
    }],

    labels: [
        'JavaScript/TypeScript',
        '.NET',
        'Java',
        'Python',
        'Інше'
    ]
};


export default function Visitors(){
    return (
        <div className="relative min-h-screen w-full">
            <h2 className={`${press_start.className} text-hack-green text-2xl lg:text-4xl my-2 text-center`}>
            Хто відвідує Хакатон?
            </h2>
            <div className='gap-10 lg:gap-20 flex flex-wrap w-full justify-center'>
                <div className='flex flex-col items-center justify-center max-w-md m-5 p-5 lg:mx-16'>
                    <h1 className={`${press_start.className} texl-xl, text-white my-10 text-center`}>Статистика по курсах університету</h1>
                    <Doughnut data={dataCourses} />
                </div>
                <div className='flex flex-col items-center justify-center max-w-md m-5 p-5 lg:mx-16'>
                    <h1 className={`${press_start.className} texl-xl, text-white my-10 text-center`}>Статистика по мовах програмування</h1>
                    <Doughnut data={dataLang} />
                </div>
                <div className='flex flex-col items-center justify-center max-w-md'>
                    <h1 className={`${press_start.className} texl-xl, text-white my-10 text-center`}>Спеціальності на яких навчаються учасники</h1>
                    <div>
                        <li>Інженерія програмного забезпечення</li>
                        <li> Кібербезпека</li>
                        <li>Комп’ютерні науки</li>
                        <li>Інтернет речей</li>
                        <li>Системи штучного інтелекту</li>  
                        <li>Системний аналіз</li>
                    </div>
                </div>
                <Image
                src="/BubblesPart1.png"
                width={500}
                height={500}
                alt=" "
                className="absolute -right-32 bottom-0 opacity-30 lg:opacity-100 blur-sm lg:blur-none max-w-lg pointer-events-none levitate-bubbles1 rotate-45 z-0"
                />
                <Image
                    src="/BubblesPart2.png"
                    width={500}
                    height={500}
                    alt=" "
                    className="absolute -right-28 bottom-0  opacity-30 lg:opacity-100 blur-xs lg:blur-none max-w-lg pointer-events-none levitate-bubbles2 rotate-45 z-0"
                />
                <Image
                src="/BubblesPart1.png"
                width={500}
                height={500}
                alt=" "
                className="absolute -left-32 bottom-0 opacity-30 lg:opacity-100 blur-sm lg:blur-none max-w-lg pointer-events-none levitate-bubbles1 z-0"
                />
                <Image
                    src="/BubblesPart2.png"
                    width={500}
                    height={500}
                    alt=" "
                    className="absolute -left-28 bottom-0  opacity-30 lg:opacity-100 blur-xs lg:blur-none max-w-lg pointer-events-none levitate-bubbles2 z-0"
                />
            </div>
           
        </div>
    )
}