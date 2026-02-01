import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./uiSlice";
import taskReducer from "./tasksSlice"

export const store = configureStore({
    reducer: {
        ui: uiReducer,
        tasks: taskReducer,
    }
})