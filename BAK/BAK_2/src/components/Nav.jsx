import React from 'react';
import { Link } from "react-router-dom";



const Nav = () => {

    const myStyle={
        color: "white",
        
    }
    return (<nav className="navbar navbar-expand-lg navbar-light bg-primary">
       
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <Link to="/">
                <li className="nav-item active">
                    <a className="nav-link"  style= {myStyle}  href="#">Users <span className="sr-only"></span></a>
                </li>
                </Link>

                <Link to="/About">
                <li className="nav-item">
                    <a className="nav-link"  style= {myStyle}  href="#">About</a>
                </li>
             </Link>
            </ul>
        </div>
    </nav>);
}

export default Nav;