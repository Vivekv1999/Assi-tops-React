import React from 'react'
import { useState } from 'react'

export default function Asseemnt() {
    const [count, setcount] = useState(0)
    const [count2, setcount2] = useState(0)
    const [count3, setcount3] = useState(0)

    const handlechnage = () => {
        setcount(count + 1)
    }
    const handlechnage2 = () => {
        setcount2(count2 + 1)
    }
    const handlechnage3 = () => {
        setcount3(count3 + 1)
    }
    return (
        <>
            <div>
                <button className='w-100 btn btn-success' onClick={handlechnage}>accordition-1</button>
                {count % 2 === 0 ?
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum sapiente in odio tempora dolorum nesciunt rerum? Debitis, voluptatum, suscipit totam esse sequi repellat dignissimos quaerat impedit vitae quas quo expedita qui nihil temporibus fugit nam error tenetur. Vel sed nostrum perspiciatis deserunt amet cumque sunt molestias soluta perferendis exercitationem hic, harum quia?</p>
                    : null}
            </div>
            <div>
                <button className='w-100 btn btn-success' onClick={handlechnage2}>accordition-2</button>
                {count2 % 2 === 0 ?
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum sapiente in odio tempora dolorum nesciunt rerum? Debitis, voluptatum, suscipit totam esse sequi repellat dignissimos quaerat impedit vitae quas quo expedita qui nihil temporibus fugit nam error tenetur. Vel sed nostrum perspiciatis deserunt amet cumque sunt molestias soluta perferendis exercitationem hic, harum quia?</p>
                    : null}
            </div>
            <div>
                <button className='w-100 btn btn-success' onClick={handlechnage3}>accordition-3</button>
                {count3 % 2 === 0 ?
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum sapiente in odio tempora dolorum nesciunt rerum? Debitis, voluptatum, suscipit totam esse sequi repellat dignissimos quaerat impedit vitae quas quo expedita qui nihil temporibus fugit nam error tenetur. Vel sed nostrum perspiciatis deserunt amet cumque sunt molestias soluta perferendis exercitationem hic, harum quia?</p>
                    : null}
            </div>
        </>
    )
}
