import { createAsyncThunk } from '@reduxjs/toolkit'
import { getToken, removeToken, setToken } from '../../utils/HelperFunctions';
import api from '../../services/api';

export const fetchUserData = createAsyncThunk('auth/fetchUserData', async (payload) => {
    const accessToken = await getToken();
    api.defaults.headers.Authorization = `Bearer ${accessToken}`;
    const response = await api.get('/auth/getuserdata');
    return response.data;
});

export const login = createAsyncThunk('auth/login', async (payload) => {
    const response = await api.post('/auth/login', payload);
    setToken(response.data.accessToken);
    return response.data;
});

export const register = createAsyncThunk('auth/register', async (payload) => {
    const response = await api.post('/auth/register', payload);
    return response.data;
});


export const signOut = createAsyncThunk('auth/signOut', async () => {
    removeToken();
});