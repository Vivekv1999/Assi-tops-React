import React, { useState } from 'react'

export default function Onclick() {
    const [count,setcount]=useState(0)

    function handeldec(){
        setcount(count-1);
    }

    const mystyle={

    }
    
  return (
    <>
    <div className='container-1 '>
        <h1>React Web</h1>
        <h2>{count}</h2>

        <button onClick={()=>{setcount(count+1)}}>Increment</button>
        <button onClick={handeldec}>Decrement</button><br />
        <button onClick={()=>{setcount(0)}}>Reset</button>
    </div>
    </>
  )
}
