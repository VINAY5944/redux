import { createSlice } from "@reduxjs/toolkit"
const initialState={num:1}

export const PrintNumslice=createSlice({
    name:"print",
    initialState,
    reducers:{
        printnum:(state)=>{
            state.num=state.num*3
        },
    },
})
export const {printnum}=PrintNumslice.actions
export default PrintNumslice.reducer