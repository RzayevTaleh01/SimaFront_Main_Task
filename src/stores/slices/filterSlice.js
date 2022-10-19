import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name:"filter",
    initialState:{
        filterMode: false
    },
    reducers:{
        setFilterMode: (state)=>{
            state.filterMode = !state.filterMode
        }
    }
});
export const {setFilterMode} = filterSlice.actions;

export default filterSlice.reducer;