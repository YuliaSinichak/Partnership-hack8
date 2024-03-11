import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { iOptional } from "@/types";

const options: iOptional[] = [
  {
    name: "Розсилка вакансій у Telegram боті",
    active: false,
    price: 80,
  },
  {
    name: "Розміщення банера компаній під час Хакатону",
    active: false,
    price: 60,
  },
  {
    name: "Доступ до бази CV учасників",
    active: false,
    price: 60,
  },
  {
    name: "Номінація від компанії",
    active: false,
    price: 80,
  },
  {
    name: "Участь у креативній загадці «Define solution» (3 залишилось)",
    active: false,
    price: 150,
  },
];

const initialState = options;

const optionalPacketsSlice = createSlice({
  name: "optional",
  initialState,
  reducers: {
    toggleOptionActive: (state, action: PayloadAction<{ name: string }>) => {
      const { name } = action.payload;
      const option = state.find((sp) => sp.name === name);
      if (option) {
        option.active = !option.active;
      }
    },
  },
});

export const { toggleOptionActive } = optionalPacketsSlice.actions;

export default optionalPacketsSlice.reducer;
