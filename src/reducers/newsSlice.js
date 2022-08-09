import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    news: [],
    isLoading: true,
    isError: false,
};

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        newsFetching: (state) => {state.isLoading = true},
        newsFetched: (state, action) => {
            state.news = action.payload;
            state.isLoading = false;
        },
        newsError: (state) => {
            state.isError = true;
            state.isLoading = false;
        }
    }
});

const {actions, reducer} = newsSlice;

export default reducer;
export const {newsFetching, newsFetched, newsError} = actions;