import axios from 'axios'

const baseURL = 'http://192.168.1.102:10001/';

const api = axios.create({
    baseURL
})

export default api;