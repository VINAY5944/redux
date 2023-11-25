import { configureStore } from "@reduxjs/toolkit";
import  PrintNumslice1 from "./Printnumslice1";


export const store=configureStore({
    reducer:{
    print:PrintNumslice1,

    }
})