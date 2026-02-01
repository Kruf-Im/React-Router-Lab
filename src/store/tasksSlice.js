import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTasksByUserId = createAsyncThunk(
    'tasks/fetchTasksByUserId',
    async (userId)=>{
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
        if(!response.ok){
            throw new Error("Error loading API", {status: response.status})
        }
        return await response.json();
    }
)

export const taskSlice = createSlice({
    name:'tasks',
    initialState:{
        items:[],
        deleted:[],
        currentFilter: 'all',
        isLoading:false,
        error:null
    },
    reducers:{
        setLoading: (state) => {
            state.isLoading = true;
        },
        setTasks: (state, action)=>{
            state.items = action.payload;
            state.isLoading = false;
        },
        setError:(state, action)=>{
            state.error = action.payload;
        },
        toggleStatus:(state,action)=>{
            const task = state.items.find(task=>task.id === action.payload);
            if(task){
                task.completed = !task.completed;
            }
        },
        deleteTask:(state,action)=>{
            const task = state.items.find(task=>task.id === action.payload);
            if(task){
                state.deleted.push(task);
                state.items = state.items.filter(t => t.id !== task.id)
            }
        },
        restoreTask:(state,action)=>{
            const task = state.deleted.find(task=>task.id === action.payload);
            if(task){
                state.items.push(task);
                state.deleted = state.deleted.filter(t => t.id !== task.id)
            }
        },
        setFilter:(state,action)=>{
            state.currentFilter = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTasksByUserId.fulfilled, (state, action) => {
            state.isLoading = false;
            state.items = action.payload;
        }).addCase(fetchTasksByUserId.pending, (state) =>{
            state.isLoading = true;
        }).addCase(fetchTasksByUserId.rejected, (state, action) =>{
            state.isLoading = false;
            state.error = action.error.message;
        })
    }
})
export const {
    setLoading,
    setTasks,
    setError,
    toggleStatus,
    deleteTask,
    restoreTask,
    setFilter
} = taskSlice.actions;
export default taskSlice.reducer;