import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    soon: [],
    isLoading: true,
    isError: false,
};

const incomingSlice = createSlice({
    name: 'soon',
    initialState,
    reducers: {
        soonFetching: (state) => {state.isLoading = true},
        soonFetched: (state, action) => {
            state.soon = action.payload;
            state.isLoading = false;
        },
        soonError: (state) => {
            state.isLoading = false;
            state.isError = true;
        }
    }
});

const {actions, reducer} = incomingSlice;

export default reducer;
export const {soonFetching, soonFetched, soonError} = actions;