import { createSlice } from '@reduxjs/toolkit'
import { gettasks, createtask, deactivatetask, markdone, markundone } from './tasksThunk'
const initialState = {
    loading: false,
    taskList: {},
    createTaskMessage: "",
    markDoneMessage: "",
    markUnDoneMessage: "",
    markDeActivateMessage: ""
};


export const tasksSlices = createSlice({
    name: 'tasks',
    initialState,
    reducers: {},
    extraReducers: {
        [gettasks.pending]: (state, action) => {
            state.loginMessage = ""
            state.loading = true;
        },
        [gettasks.fulfilled]: (state, action) => {
            const { data } = action.payload;
            state.taskList = data
            state.loading = false;
        },
        [gettasks.rejected]: (state, action) => {
            state.loginMessage = "Couldnot get the list."
            state.loading = false;
        },
        [createtask.pending]: (state, action) => {
            state.loading = true;
        },
        [createtask.fulfilled]: (state, action) => {
            const { data } = action.payload;
            state.taskList = data
            state.loading = false;
        },
        [createtask.rejected]: (state, action) => {
            state.createTaskMessage = "Couldnot add task."
            state.loading = false;
        },
        [deactivatetask.pending]: (state, action) => {
            state.markDeActivateMessage = ""
            state.loading = true;
        },
        [deactivatetask.fulfilled]: (state, action) => {
            const { data } = action.payload;
            state.taskList = data
            state.loading = false;
        },
        [deactivatetask.rejected]: (state, action) => {
            state.markDeActivateMessage = "Couldnot delete task."
            state.loading = false;
        },
        [markdone.pending]: (state, action) => {
            state.markDoneMessage = ""
            state.loading = true;
        },
        [markdone.fulfilled]: (state, action) => {
            const { data } = action.payload;
            state.taskList = data
            state.loading = false;
        },
        [markdone.rejected]: (state, action) => {
            state.markDoneMessage = "Couldnot change task."
            state.loading = false;
        },
        [markundone.pending]: (state, action) => {
            state.markUnDoneMessage = ""
            state.loading = true;
        },
        [markundone.fulfilled]: (state, action) => {
            const { data } = action.payload;
            state.taskList = data
            state.loading = false;
        },
        [markundone.rejected]: (state, action) => {
            state.markUnDoneMessage = "Couldnot change task."
            state.loading = false;
        },
    },
})


export const { } = tasksSlices.actions;

export default tasksSlices.reducer;