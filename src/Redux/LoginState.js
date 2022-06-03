import { createSlice } from "@reduxjs/toolkit";


const loggedInSlice = createSlice({
    name: "auth",
    initialState: { isLoggedIn: false },
    reducers: {
        login(state, action) {
            state.isLoggedIn = action.payload.isLogIn;
            localStorage.setItem("authToken", action.payload.token);
        },
        logout(state) {
            state.isLoggedIn = false;

            localStorage.removeItem("authToken");
            localStorage.removeItem("loginUser");
            localStorage.removeItem("path");
        },
    }
})

export const loggedInAction = loggedInSlice.actions;
export default loggedInSlice.reducer;