import React from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    return (
        <div className='navbar-container'> 
            <div className='navbar-sub-container'>  

                <div className="food-menu" >
                <GiHamburgerMenu className='food-menu-icon '/>
                    <p> Sort by Department</p>


                </div>

                <div className='navbar'>
                    <ul className='anime-nav'>
                        <li><a href="#!">Home</a></li>
                        <li><a href="#!">Shop</a></li>
                        <li><a href="#!">Page</a></li>
                        <li><a href="#!">Contact</a></li>



                    </ul>


                </div>


            </div>
        </div>
    );
};

export default Navbar;
