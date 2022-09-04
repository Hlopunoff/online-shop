import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    user: {
        id: null,
        userName: null,
        email: null,
        token: null,
        phone: null,
        location: null,
        birthday: null,
    }
};

export const createUser = createAsyncThunk(
    'user',
    async (user, {rejectWithValue}) => {
        try {
            const data = await fetch('http://localhost:3001/users', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            });
            if(!data.ok) {
                throw new Error(`Could not create user`);
            }
            return user;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action)  => {state.user = action.payload},
        removeUser: (state) => {
            for(let key in state.user) {
                state.user[key] = null;
            }
        }
    },
    extraReducers: builder => {
        builder.addCase(createUser.fulfilled, (state, action) => {
            return {
                ...state.user,
                userName: action.userName,
                phone: action.phone,
                location: action.location,
                birthday: action.birthday,
            }
        })
        .addCase(createUser.rejected, (state, action) => {
            console.log(action.payload);
        })
    }
});

export default userSlice.reducer;
export const {setUser, removeUser} = userSlice.actions;