import { createSlice } from '@reduxjs/toolkit'
import { fetchUserData, login, signOut, register } from './authThunk';

const initialState = {
    token: null,
    loading: false,
    userData: {},
    userName: "",
    registerMessage: "",
    loginMessage: ""
};


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        resetRegisterMessage(state) {
            state.registerMessage = "";
        },
        resetLoginMessage(state) {
            state.loginMessage = "";
        }
    },
    extraReducers: {
        [signOut.fulfilled]: (state, action) => {
            state.loading = false;
            state.userData = {};
            state.token = null;
        },
        [login.pending]: (state, action) => {
            state.loginMessage = ""
            state.loading = true;
        },
        [login.fulfilled]: (state, action) => {
            const { accessToken, user, message, username } = action.payload;
            state.token = accessToken;
            state.loginMessage = message
            state.userData = user;
            state.userName = username;
            state.loading = false;
        },
        [login.rejected]: (state, action) => {
            state.loginMessage = "Login attempt was not successful. Please try again."
            state.loading = false;
        },
        [register.pending]: (state, action) => {
            state.registerMessage = "";
            state.loading = true;
        },
        [register.fulfilled]: (state, action) => {
            const { message } = action.payload;
            state.registerMessage = message;
            state.loading = false;
        },
        [register.rejected]: (state, action) => {
            state.registerMessage = "Register attempt was not successful. Please try again.";
            state.loading = false;
        },
        [fetchUserData.pending]: (state, action) => {
            state.userName = "";
        },
        [fetchUserData.fulfilled]: (state, action) => {
            const { username } = action.payload;
            state.userName = username;
        },
        [fetchUserData.rejected]: (state, action) => {
            state.userName = "";
        }
    },
})


export const { resetRegisterMessage, resetLoginMessage } = authSlice.actions;

export default authSlice.reducer;