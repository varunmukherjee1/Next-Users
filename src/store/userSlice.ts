import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
    },
    reducers: {
        setUser: (state,action) => {
            state .user = action.payload;
        },
        clearUser: (state) => {
            state.user = null;
        }
    }
})

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;