import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
    name:'ui',
    initialState:{
        theme:'dark',
        isModalOpen:false,
    },
    reducers:{
        toggleTheme: (state)=>{
            state.theme = state.theme === 'dark' ? 'light' : 'dark';
        },
        setModalOpen: (state, action)=>{
            state.isModalOpen = action.payload;
        },
    },
});

export const {
    toggleTheme,
    setModalOpen,
} = uiSlice.actions;
export default uiSlice.reducer;