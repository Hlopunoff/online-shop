import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: true,
    clients: [],
    isError: false
};

const clientsSlice = createSlice({
    name: 'clients',
    initialState,
    reducers: {
        clientsFetching: (state) => {state.isLoading = true},
        clientsFetched: (state, action) => {
            state.clients = action.payload;
            state.isLoading = false;
        },
        clientsError: (state) => {
            state.isLoading = false;
            state.isError = true;
        }
    }
});

const {actions, reducer} = clientsSlice;

export default reducer;
export const {clientsFetching, clientsFetched, clientsError} = actions;