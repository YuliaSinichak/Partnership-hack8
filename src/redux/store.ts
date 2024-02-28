import { configureStore } from '@reduxjs/toolkit';

import sponsorshipReducer from './sponsorshipSlice';
import optionalPacketsReducer from './optionalSlice';
import modalReducer from './modalSlice';
import legoPointsSliceReducer from './legoSlice'

const store = configureStore({
    reducer: {
        sponsorship: sponsorshipReducer,
        optionalPackets: optionalPacketsReducer,
        modal: modalReducer,
        lego: legoPointsSliceReducer
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
