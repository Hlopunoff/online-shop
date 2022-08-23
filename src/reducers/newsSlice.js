import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    news: [],
    isLoading: true,
    isError: false,
};

export const fetchNews = createAsyncThunk(
    'news/fetchNews',
    async (url, {rejectWithValue}) => {
        try {
            const res = await fetch(url);

            if(!res.ok) {
                throw new Error(`Could not fetch this url: ${url}`);
            }
            const data = await res.json();
            return data;
        } catch (error) {
            rejectWithValue(error.message);
        }
    }
);

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchNews.pending, (state) => {state.isLoading = true})
        .addCase(fetchNews.fulfilled, (state, action) => {
            state.news = action.payload;
            state.isLoading = false;
        })
        .addCase(fetchNews.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        })
    }
});

const {reducer} = newsSlice;

export default reducer;