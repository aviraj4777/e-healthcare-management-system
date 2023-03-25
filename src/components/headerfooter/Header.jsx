import React from 'react';
import "../../style/Home.css"
import logo from "../../assets/logo_avah.png"
function Header() {
    return (
        <div>
            <nav className="navbar">
                <div className="nav-logo">
                 <img src={logo} alt="AVA-H Logo" style={{width:"50px", height:"50px",marginLeft:"15px"}}/>
                <div className="nav-title">AVA-H</div>
                </div>
            </nav>
        </div>
    );
}

export default Header;