import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bouquets: [],
    isLoading: true,
    isError: false
};

const bouquetsSlice = createSlice({
    name: 'bouquets',
    initialState,
    reducers: {
        bouquetsFetching: (state) => {state.isLoading = true},
        bouquetsFetched: (state, action) => {
            state.bouquets = action.payload;
            state.isLoading = false;
        },
        bouquetsError: (state) => {
            state.isLoading = false;
            state.isError = true;
        },
    }
});

const {actions, reducer} = bouquetsSlice;

export default reducer;
export const {bouquetsFetching, bouquetsFetched, bouquetsError} = actions;