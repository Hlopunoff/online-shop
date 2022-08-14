import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filters: {
        color: [],
        h: [],
        d: [],
        relativeTo: [],
        type: [],
        price: 500,
    }
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        addFilter: (state, action) => {state.filters[action.payload.filterName].push(action.payload.filter)},
        deleteFilter: (state, action) => ({
            filters: {
                ...state.filters,
                [action.payload.filterName]: state.filters[action.payload.filterName].filter(item => item !== action.payload.filter)
            }
        }),
        clearAllFilters: (state) => {
            for(let key in state.filters) {
                if(Array.isArray(state.filters[key])) {
                    state.filters[key] = [];
                } else {
                    state.filters[key] = 500;
                }
            }
        },
        addFilterByPrice: (state, action) => {state.filters.price = action.payload}
    }
});

const {actions, reducer} = filterSlice;

export default reducer;
export const {addFilter, deleteFilter, clearAllFilters, addFilterByPrice} = actions;