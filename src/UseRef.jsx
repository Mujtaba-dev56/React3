import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'

function UseRef() {

const [name, setname] = useState('Ali') 

// it is use to manipulte dom directly

const reffirst = useRef(" ")
console.log(reffirst);

const rest=()=>{ 
  setname("")
  reffirst.current.focus();
}

const btn=()=>{
reffirst.current.style.color ="green"; 
}
  return ( <>
    <h2>UseRef</h2>
<input ref={reffirst} type="text" value={name} onChange={(e)=> setname(e.target.value)} />
  <br /> <button onClick={rest}>Submit</button>
  <button onClick={btn} > BTN</button>

    </>

  )
}

export default UseRef