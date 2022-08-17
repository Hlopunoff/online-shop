import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    favorites: [],
    error: ''
};

export const addBouquetTo = createAsyncThunk(
    'singleBouquet/addTo',
    async ({url, id}, {rejectWithValue, dispatch, getState}) => {
        const bouquet = getState().bouquets.bouquets.find(item => item.id === id);
        try {
            const res = await fetch(`${url}/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    selected: !bouquet.selected
                })
            });
            
            if(!res.ok) {
                throw new Error(`Server error!`);
            }

            const data = await res.json();

            dispatch(addToFavorite(bouquet));

            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const singleBouquetSlice = createSlice({
    name: 'singleBouquet',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload);
        },
        addToFavorite: (state, action) => {
            state.favorites.push(action.payload);
        },
        deleteFromCart: (state, action) => {
            if(action.payload.action === 'remove') {
                return ({
                    ...state,
                    cart: state.cart.filter(item => item.id !== action.payload.id)
                })
            }
            const index = state.cart.findIndex(item => item.id === action.payload.id);
            state.cart.splice(index, 1);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(addBouquetTo.rejected, (state, action) => {
            state.error = action.payload;
        })
    }
});

const {actions, reducer} = singleBouquetSlice;

export default reducer;
export const {addToCart, addToFavorite, deleteFromCart} = actions;