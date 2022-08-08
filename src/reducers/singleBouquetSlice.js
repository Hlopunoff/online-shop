import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    favorites: []
};

const singleBouquetSlice = createSlice({
    name: 'singleBouquet',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload);
        },
        addToFavorite: (state, action) => {
            state.favorites.push(action.payload);
        }
    }
});

const {actions, reducer} = singleBouquetSlice;

export default reducer;
export const {addToCart, addToFavorite} = actions;