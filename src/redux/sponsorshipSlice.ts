import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { iSellingPoint } from '@/types';

const sellingPoints: iSellingPoint[] = [
    {
        compulsory: true,
        active: true,
        name: 'Basic',
        price: 300,
        annotation: 'Цей пакет є обов`язковим!',
        services: [
            `Логотип компанії на бренд-волл та на сайті проєкту`,
            `Промоція в соціальних мережах (інформація про компанію)`,
            `Логотип та згадка про компанію у постпроєктному відео`,
            `Участь у нетворкінгу`
        ]
    },
    {
        compulsory: false,
        active: false,
        name: 'Preceptor',
        price: 700,
        annotation: "1 залишився",
        services: [
            'Можливість залучення судді та/або ментора до змагань',
            `Можливість провести воркшоп або тренінг серед учасників`,
            `Логотип на футболках усіх учасників та організаторів`,
            `Пост про компанію в Instagram`,
        ]
    },
    {
        compulsory: false,
        active: false,
        name: 'AdVantage',
        price: 300,
        annotation: '4 залишилось',
        services: [
            `World cafe`,
            `Інтерактивні Instagram story`,
            `Логотип на плакатах`,
            `Гра «Treasure hunt»`,
        ]
    },
    {
        compulsory: false,
        active: false,
        name: 'LEGO',
        price: 500,
        annotation: 'Ви можете обрати будь-які 4 опції з 9 можливих',
        services: [
            `World cafe`,
            `Гра «Treasure hunt»`,
            `Можливість залучення ментора та/або судді`,
            `Пост про компанію в Instagram`,
            `Розсилка вакансій у Telegram боті`,
            `Розміщення банера компаній під час хакатону`,
            `Доступ до бази CV учасників`,
            `Номінація від компанії`,
            `Участь у креативній загадці «Define solution»`
        ]
    },
]

// Initialize chosenSponsorships with compulsory items
const initialState = sellingPoints

const sponsorshipSlice = createSlice({
    name: 'sponsorship',
    initialState,
    reducers: {
        toggleSponsorship: (state, action: PayloadAction<{ name: string }>) => {
            const { name } = action.payload;
            const sponsorship = state.find(sp => sp.name === name);

            if (sponsorship && !sponsorship.compulsory) {
                sponsorship.active = !sponsorship.active;
            }
        },
    },
});

export const { toggleSponsorship } = sponsorshipSlice.actions;

export default sponsorshipSlice.reducer;
