import { createSlice } from "@reduxjs/toolkit"
const initialState={num1:50,num2:100,num3:0}


export const PrintNumslice1=createSlice({
    name:"print",
    initialState,
    reducers:{
        printnum:(state)=>{
            state.num3=state.num1+state.num2
        },
        printnum1:(state)=>{
            state.num3=state.num1-state.num2
        },
        printnum2:(state)=>{
            state.num3=state.num1*state.num2
        },
        printnum3:(state)=>{
            state.num3=state.num1/state.num2
        },
    },
})
export const {printnum,printnum1,printnum2,printnum3}=PrintNumslice1.actions
export default PrintNumslice1.reducer