import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import { printnum } from './PrintNumslice'

export function Displaynum() {
    const display=useSelector((state)=>state.print.num)
    const dispatch= useDispatch()
  return (
    <div><>

    <button onClick={()=>dispatch(printnum())}>
ggttgtgh
    </button>
    {display}
    </></div>
  )
}
