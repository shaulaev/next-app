import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk("users/getUsers", async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    return await res.json()
})

const userSlice = createSlice({
    name: "user",
    initialState: {
        users: [],
        pending: false,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [getUsers.pending]: (state) => {
            state.pending = true;
            state.error = null
        },
        [getUsers.fulfilled]: (state, action) => {
            state.pending = false;
            state.error = null;
            state.users = action.payload
        },
        [getUsers.rejected]: (state, action) => {
            state.pending = false;
            state.error = action.payload.error
        },
    }
})

export default userSlice.reducer