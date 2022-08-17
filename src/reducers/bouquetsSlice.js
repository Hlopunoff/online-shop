import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    bouquets: [],
    isLoading: true,
    isError: false,
    offset: 3
};

export const fetchBouquets = createAsyncThunk(
    'bouquets/fetchBouquets',
    async(url, {rejectWithValue}) => {
        try {
            const res = await fetch(url);
            if(!res.ok) {
                throw new Error(`Server error! While trying to get data from ${url}`);
            }

            const data = await res.json();

            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const bouquetsSlice = createSlice({
    name: 'bouquets',
    initialState,
    reducers: {
        bouquetsSortBy: (state, action) => {
            if (action.payload === 'fame') {
                state.bouquets.sort((a, b) => +b.rating - +a.rating);
            } else if (action.payload === 'price decrease') {
                state.bouquets.sort((a, b) => b.currPrice - a.currPrice);
            } else if (action.payload === 'price increase') {
                state.bouquets.sort((a, b) => a.currPrice - b.currPrice);
            } else {
                state.bouquets.sort((a, b) => {
                    let firstTitle = a.name.toLowerCase();
                    let secondTitle = b.name.toLowerCase();

                    if (firstTitle < secondTitle) {
                        return -1;
                    } else if (firstTitle > secondTitle) {
                        return 1;
                    }
                    return 0;
                });
            }
        },
        addLimit: (state) => {state.offset += 3;}
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBouquets.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchBouquets.fulfilled, (state, action) => {
            state.bouquets = action.payload;
            state.isLoading = false;
        })
        .addCase(fetchBouquets.rejected, (state) => {
            state.isError = true;
            state.isLoading = false;
        });
    }
});

const {actions, reducer} = bouquetsSlice;

export default reducer;
export const {bouquetsSortBy, addLimit} = actions;