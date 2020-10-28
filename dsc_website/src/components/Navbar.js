import React from "react";
import {Link} from "react-router-dom"

function Navbar () {
    return (
         <nav className="navbar bg-white navbar-expand-sm fixed-top">
            <div className="container my-2">
                <a href="/" className="navbar-brand text-dark font-weight-bold">
                <h2>DSC-LOGO</h2></a>            
                <button className="navbar-toggler"
                        data-toggle = "collapse"
                        data-target = "#collapseNav"                
                >
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse flex-grow-0" id="collapseNav">
                    <div className="navbar-nav">
                        <Link to="/" className="nav-item nav-link text-dark h6 my-auto">Home</Link>
                        <Link to="/about" className="nav-item nav-link text-dark h6 my-auto">About</Link>
                        <Link to="/" className="nav-item nav-link text-dark h6 my-auto">Events</Link>
                        <Link to="/" className="nav-item nav-link text-dark h6 my-auto">Team</Link>
                    </div>
                </div>                
            </div>   
        </nav>
    );
}

export default Navbar;