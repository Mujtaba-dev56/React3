import React, { useContext } from 'react'
import { data,data1 } from '../App';


function Child3() {

  const fname =useContext(data);
  const city=useContext(data1);
  return ( <>

      <h2>my name is {fname} and my city is {city} </h2>

  </>
  )
}

export default Child3;