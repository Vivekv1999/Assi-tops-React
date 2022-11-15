import React from 'react'

export default function Top2() {
    return (
        <div className='container'>
            <div className="top2-left">
                <i className="fa-solid fa-dove"></i>
                <h5>Nest</h5>
                <h5>something ppp</h5>
            </div>
            <div className="top2-center">
                <div>
                    <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Search" />
                </div>
            </div>
            <div className="top2-right" >
                <ul>
                    <li><button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Your Location
                    </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    
                    <i class="fa-regular fa-circle">Compare</i>
                    <i class="fa-solid fa-heart">wishlist</i>
                    <i class="fa-sharp fa-solid fa-cart-shopping">cart</i>
                    <i class="fa-regular fa-user">Account</i>
                    {/* -- valu circle no avu */}
                    <li></li>
                </ul>

            </div>
        </div>
    )
}

