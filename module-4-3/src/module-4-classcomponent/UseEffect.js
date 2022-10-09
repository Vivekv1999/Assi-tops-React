import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    const [count,setcount]=useState(0)
    useEffect(()=>{
        console.log('useefect running');
        document.title=`you clcik ${count} times`
    })
  return (
    <div>
      <h1>useeffect runing...</h1>
      <h1>{count}</h1>
      <button onClick={()=>{setcount(count+1)}}>sus</button>
    </div>
  )
}
