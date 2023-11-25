import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import { printnum1, printnum2, printnum3 } from './Printnumslice1'
import { printnum } from './PrintNumslice'

export function Display() {
    const display=useSelector((state)=>state.print.num3)
    const dispatch= useDispatch()
  return (
    <div><>
    <h1> {display}</h1>
    <button onClick={()=>dispatch(printnum())}>
add
    </button>
    <button onClick={()=>dispatch(printnum1())}>
sub
    </button>
    <button onClick={()=>dispatch(printnum2())}>
mul
    </button>
    <button onClick={()=>dispatch(printnum3())}>
div
    </button>
   
    </></div>
  )
}
