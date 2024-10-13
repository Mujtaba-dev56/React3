import React from 'react'
let itms=['bag' , 'shoes' , 'cloths'  , 'food' , 'water' , 'camera']


const btn= ()=>{
    alert('clicked')
}
function Maping(props) {

  return (
    <>

    <h1> Maping</h1>
  
    {itms.map(itm => <li key={itm}>{itm}</li> )}
  {props.news} <br />
    <button onClick={btn}>click</button>
    </>
  )
}

export default Maping