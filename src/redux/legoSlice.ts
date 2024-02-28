import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { iLego } from "@/types";

const legoPoints: iLego[] = [
  {
    name: "World cafe",
    active: false,
    id: 1,
  },
  {
    name: "Гра «Treasure hunt»у",
    active: false,
    id:2
  },
  {
    name: "Можливість залучення ментора та/або судді",
    active: false,
    id:3,
  },
  {
    name: "Пост про компанію в Instagram",
    active: false,
    id:4,
  },
  {
    name: "Розсилка вакансій у Telegram боті",
    active: false,
    id: 5,
  },
  {
    name: "Розміщення банера компаній під час хакатону",
    active: false,
    id: 6,
  },
  {
    name: "Доступ до бази CV учасників",
    active: false,
    id: 7,
  },
  {
    name: "Номінація від компанії",
    active: false,
    id: 8,
  },
  {
    name: "Участь у креативній загадці «Define solution»",
    active: false,
    id: 8,
  },
  
];

const initialState = legoPoints;

const legoPointsSlice = createSlice({
  name: "lego",
  initialState,
  reducers: {
    togglePointActive: (state, action: PayloadAction<{ name: string }>) => {
      const { name } = action.payload;
      const point = state.find((sp) => sp.name === name);
      if (point) {
        point.active = !point.active;
      }
    },
  },
});

export const { togglePointActive } = legoPointsSlice.actions;

export default legoPointsSlice.reducer;
