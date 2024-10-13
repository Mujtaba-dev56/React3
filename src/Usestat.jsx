import React from 'react'
import { useState } from 'react'


function Usestat() {

    const [val, setval] = useState(-10)
   const inc =()=>{
     setval(val+1);
       
    }

    const dec =()=>{
       setval(val-1);
         
      }

      const btn= ()=>{
        alert('clicked')
    }
  return (
    <> 
    <h1>UseState</h1>
    <h2>Count : {val}</h2>
    <button onClick={inc}>increase</button> <br />
<br />
    <button onClick={dec}>decrease</button>
    </>
  )
}

export default Usestat;