import React from "react";
import "./Header.css";
import logo from "../Assets/image-1.png";
import { BiSearchAlt, BiUser } from "react-icons/bi";
import { BsHeartFill, BsCart2 } from "react-icons/bs";
import callicon from "../Assets/Call icon.png";

const Header = () => {
    return (
        <div className="header-container">
            <div className="logo-search-cont">
                <img src={logo} alt="" />
            </div>
            <div className='search-cont'>
                <BiSearchAlt className="icon" />
                <input type="text" placeholder='Search Products' />
            </div>
            <div className="contact-social-cont">
                <div className="contact">
                    <img src={callicon} alt=""/> 
                    <p>contact us  <span>+44123456789</span></p>
                </div>
                
                <div className= 'social-icon-cont'>
                    <div className="headerIcon">
                        <BiUser className="headerIcon -size" />
                    </div>
                    <div className="headerIcon">
                        <BsHeartFill className="headerIcon -size" />
                    </div>
                    <div className="headerIcon">
                        <BsCart2 className="headerIcon -size"  />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
