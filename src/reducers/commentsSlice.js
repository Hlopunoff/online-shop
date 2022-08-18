import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    comments: [],
    isLoading: true,
    isError: false
};

export const fetchComments = createAsyncThunk(
    'comments/fetchComments',
    async (url, {rejectWithValue}) => {
        try {
            const res = await fetch(url);
            if(!res.ok) {
                throw new Error(`Could not fetch this url:${url}`);
            }
            const data = await res.json();
            return data;
        } catch (error) {
            rejectWithValue(error.message);
        }
    }
);

const commentSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchComments.pending, (state) => {state.isLoading = true})
        .addCase(fetchComments.fulfilled, (state, action) => {
            state.comments = action.payload;
            state.isLoading = false;
        })
        .addCase(fetchComments.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
    }
});

const { reducer} = commentSlice;

export default reducer;