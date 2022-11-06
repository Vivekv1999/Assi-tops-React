import React from 'react'



export default function Navbar() {
    
    
    return (
        <div classname="navbar1">
            <div className="dropdown nav-left">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Browser all categories
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
                <i className="fa-sharp fa-solid fa-fire mx-2">Hot Deal</i>
            </div>
            <div classname="nav-center">
                <ul>
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
            <i class="fa-solid fa-headset w-100"></i>
            <div className="con">
            <h5>1900-888</h5>
            <p>24/7 Support Center</p>

            </div>
            </div>
        </div>

    )
}
