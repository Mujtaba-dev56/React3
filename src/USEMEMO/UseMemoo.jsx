import React, { useMemo } from 'react'
import { useState } from 'react'

function UseMemoo() {
 const [adds, setadds] = useState(0)
const [subtr , setsubtr] = useState(100)


const multiply=useMemo(function multi(){
  console.log( 1,2,4,5.);
  
  return adds*10 },[adds])
  



  return (
    <>
    <h3>UseMemo {multiply}</h3>
    <button onClick={()=> setadds(adds+1)}  > add = {adds}</button> <br />
    <button onClick={()=> setsubtr(subtr-1)} > subtract = {subtr} </button>
    
    </>
  )
}
export default UseMemoo;