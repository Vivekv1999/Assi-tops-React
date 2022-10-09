import React, { useState } from 'react'

export default function Usestate() {
    const [count,setcount]=useState(0)

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>{setcount(count+1)}}>update</button>
    </div>
  )
}
