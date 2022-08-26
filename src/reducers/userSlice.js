import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        id: null,
        userName: null,
        email: null,
        token: null
    }
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action)  => {state.user = action.payload},
        removeUser: (state) => {
            state.user.id = null;
            state.user.email = null;
            state.user.token = null;
            state.user.userName = null;
        }
    }
});

export default userSlice.reducer;
export const {setUser, removeUser} = userSlice.actions;