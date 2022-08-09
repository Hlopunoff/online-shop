import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    comments: [],
    isLoading: true,
    isError: false
};

const commentSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        commentsFetching: (state) => {state.isLoading = true},
        commentsFetched: (state, action) => {
            state.comments = action.payload;
            state.isLoading = false;
        },
        commentsError: (state) => {
            state.isLoading = false;
            state.isError = true;
        }
    }
});

const {actions, reducer} = commentSlice;

export default reducer;
export const {commentsError, commentsFetched, commentsFetching} = actions;