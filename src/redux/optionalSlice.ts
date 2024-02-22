import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { iOptional } from '@/types';

const options: iOptional[] = [
    {
        name: 'Участь у креативній загадці «Define solution»',
        active: false,
        price: 150,
    },
    {
        name: 'Розсилка вакансій в телеграм боті',
        active: false,
        price: 80,
    },
    {
        name: 'Номінація від компанії',
        active: false,
        price: 80,
    },
    {
        name: 'Розміщення банера компаній під час хакатону',
        active: false,
        price: 60,
    },
    {
        name: 'Доступ до бази CV учасників',
        active: false,
        price: 60,
    },
]

const initialState = options


const optionalPacketsSlice = createSlice({
    name: 'optional',
    initialState,
    reducers: {
        toggleOptionActive: (state, action: PayloadAction<{ name: string }>) => {
            const { name } = action.payload;
            const option = state.find(sp => sp.name === name);
            if (option) {
                option.active = !option.active;
            }

        },
    },
});

export const { toggleOptionActive } = optionalPacketsSlice.actions;

export default optionalPacketsSlice.reducer;
