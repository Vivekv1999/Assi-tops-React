import React from 'react'

export default function Listview() {
    const list=['use Array.map','not a for loop','Give each item a unique key','Avoid using array index as a key']
    const webprt=list.map((element)=>{
        return<h1 className='listviii' key={list.element} style={{padding:"2px",}}>{element}</h1>
    })
    return (
        <>
        <div className='listcont'>
        <h1>The React Way To Render a List</h1>
        {webprt}
        </div>

        
        </>
    )
}
