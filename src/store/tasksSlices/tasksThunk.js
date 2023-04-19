import { createAsyncThunk } from '@reduxjs/toolkit'
import { getToken } from '../../utils/HelperFunctions';
import api from '../../services/api';

export const gettasks = createAsyncThunk('task/gettasks', async (payload) => {

    const accessToken = await getToken();
    try {
        api.defaults.headers.Authorization = `Bearer ${accessToken}`;
        const response = await api.get('/task/gettasks');
        return response.data;
    } catch (e) {
        return null;
    }
});


export const createtask = createAsyncThunk('task/createtask', async (payload) => {
    const accessToken = await getToken();
    api.defaults.headers.Authorization = `Bearer ${accessToken}`;
    const response = await api.post('/task/createtask', payload);
    return response.data;
});

export const deactivatetask = createAsyncThunk('task/deactivatetask', async (payload) => {
    const accessToken = await getToken();
    api.defaults.headers.Authorization = `Bearer ${accessToken}`;
    const response = await api.post('/task/deactivatetask', payload);
    return response.data;
});

export const markdone = createAsyncThunk('task/markdone', async (payload) => {
    const accessToken = await getToken();
    api.defaults.headers.Authorization = `Bearer ${accessToken}`;
    const response = await api.post('/task/markdone', payload);
    return response.data;
});

export const markundone = createAsyncThunk('task/markundone', async (payload) => {
    const accessToken = await getToken();
    api.defaults.headers.Authorization = `Bearer ${accessToken}`;
    const response = await api.post('/task/markundone', payload);
    return response.data;
});