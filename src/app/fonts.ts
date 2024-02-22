import { Press_Start_2P, Inter } from "next/font/google";
import LocalFont from 'next/font/local'


export const press_start = Press_Start_2P({
    preload: true,
    weight: "400",
    subsets: ['cyrillic', 'latin']
});
export const inter = Inter({
    preload: true,
    weight: "400",
    subsets: ['cyrillic', 'latin']
});
export const inter_bold = Inter({
    preload: true,
    weight: "700",
    subsets: ['cyrillic', 'latin']
});
