import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function UseEff() {

    const [num, setnum] = useState(1)
// useeffect just use for make any sideeffect
    useEffect(() => {
     
     console.log('opene');
}, [])
      
    // }, []
    




    const btno=()=>{
        setnum(num+2)
    }

    
    const btnt=()=>{
        setnum(num-2)
    }
  return ( <> 
    <h2>UseEff</h2>

    <h3>your num is {num}</h3>
    <button onClick={btno}>btn1</button>
    <button onClick={btnt}>btn2</button>
    </>
  )
}

export default UseEff