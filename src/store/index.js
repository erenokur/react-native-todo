import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlices/auth'
import tasksReducer from "./tasksSlices/tasks";

let store = configureStore({
    reducer: {
        auth: authReducer,
        tasks: tasksReducer
    }
})

export default store