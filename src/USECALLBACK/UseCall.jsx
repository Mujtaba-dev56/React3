import React from 'react'
import { useState } from 'react'
function UseCall() {
    const [count, setcount] = useState(0)
  return (
    <>
    <h3> use callback </h3> 
   <center> {count} </center><br />
    <button onClick={()=>setcount(count+1)}>adding</button>
    </>
  )
}

export default UseCall