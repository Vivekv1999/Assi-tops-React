import React from 'react'
import { useState } from 'react'

export default function Tabelsearch() {
    const user = [
        {
            Name: "Allen solly",
            price: "50$",
            Catagoery: 'Fashion'
        },
        {
            Name: "Peter england",
            price: "70$",
            Catagoery: 'Fashion'
        },
        {
            Name: "Levi's",
            price: "65$",
            Catagoery: 'clothing'
        },
        {
            Name: "Roadster",
            price: "90$",
            Catagoery: 'Fashion'
        }
    ]

    const [search, setSearch] = useState(user)
    const [sss, setsss] = useState(" ")
    const [filterdata, setfilterdada] = useState()
    // console.log(search);

    const handlefilter = (e) => {
        setsss((e.target.value).toLowerCase())
        if (sss != " ") {
            const filterdataaa = user.filter((item)=>{                
                return Object.values(item).join(" ").toLowerCase().includes(sss)
            })            
            setfilterdada(filterdataaa)
        }

        }

    return (
        <>
            <h1>Search product list</h1>
            <div className="container">
                <form className="col-2 my-3 d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" name='search' onChange={handlefilter} />
                    {/* <button className='btn btn-primary'>Create product</button> */}
                </form>


                <table className="table table-bordered" style={{ border: "2px solid grey" }}>
                    <thead >

                        <tr>
                            <th className="col-2" scope="col">Name</th>
                            <th className="col-2" scope="col">Price</th>
                            <th className="col-2" scope="col">Catagoery</th>
                            <th className="col-4" scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sss.length>1?
                        (filterdata && filterdata.map((item) =>

                                <tr>
                                    <td>{item.Name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.Catagoery}</td>
                                    <td>
                                        <button className='btn btn-primary mx-2'>Read</button>
                                        <button className='btn btn-info mx-2'>Edit</button>
                                        <button className='btn btn-danger mx-2'>Delate</button>
                                    </td>
                                </tr>
                            ))
                            :


                            (search.map((item) =>

                                <tr>
                                    <td>{item.Name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.Catagoery}</td>
                                    <td>
                                        <button className='btn btn-primary mx-2'>Read</button>
                                        <button className='btn btn-info mx-2'>Edit</button>
                                        <button className='btn btn-danger mx-2'>Delate</button>
                                    </td>
                                </tr>
                            ))
                        }
                        

                    </tbody>
                </table>

            </div>

        </>
    )
}
