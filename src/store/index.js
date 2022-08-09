import { configureStore } from "@reduxjs/toolkit";

import bouquets from '../reducers/bouquetsSlice';
import singleBouquet from '../reducers/singleBouquetSlice';
import clients from '../reducers/clientsSlice';
import comments from '../reducers/commentsSlice';
import news from '../reducers/newsSlice';

const store = configureStore({
    reducer: {
        bouquets,
        clients,
        comments,
        news,
        singleBouquet,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
});

export default store;