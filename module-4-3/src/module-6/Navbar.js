import React from 'react'



export default function Navbar() {


    return (
        <div className="navbar1" >
            <div className="dropdown nav-left">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Browser all categories
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
            <div className='middle'>
                <i className="fa-sharp fa-solid fa-fire mx-2 r">Hot Deal</i>

                <ul className="link-nav">
                    <li>Home</li>
                    <li>About</li>
                    <li>Shop</li>
                    <li>Vendor</li>
                    <li>Mego menu</li>
                    <li>Blog</li>
                    <li>Pages</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="nav-right">
                <div className="icon">
                    <i className="fa-solid fa-headset j"/>
                </div>
                <div className="div">
                <h6 className="h5">1900-888</h6>
                <h6 className="h5">24/7 Support Center</h6>

                </div>
               

            </div>
        </div>

    )
}
