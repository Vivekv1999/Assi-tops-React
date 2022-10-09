import React, { useRef } from 'react'

export default function Userefff() {
    // const inputref = useRef(null)
    const inputref = useRef(null)
    function handelsubmit() {
        console.log(inputref);
        console.log(inputref.current.value);
        inputref.current.style.color="red"
        inputref.current.style.backgroundColor="yellow"
    }
    return (
        <div>
            <h1>useRef use </h1>
            <input type="text" ref={inputref} /><br />
            <input type="text" ref={inputref} />
            <button onClick={handelsubmit}>submit</button>
        </div>
    )
}
