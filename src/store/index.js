import { configureStore } from "@reduxjs/toolkit";

import bouquets from '../reducers/bouquetsSlice';
import singleBouquet from '../reducers/singleBouquetSlice';

const store = configureStore({
    reducer: {
        bouquets,
        singleBouquet,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
});

export default store;