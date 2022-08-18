import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import SideBar from "./SideBar";
import {Link} from 'react-scroll';

function Navbar(){
    const [isOpen,setIsOpen]=useState(false);
   
    function toggle(){
        setIsOpen((pervValue) => (!pervValue));
    }

    return <div className="navbar">
        <nav className="navbar">
            <NavLink className="nav-link logo" to="/">
                שרון ולירון
            </NavLink>
            <MenuIcon className="bar" onClick={toggle} />
            {isOpen && <SideBar isOpen={isOpen} toggle={toggle} />}
            <div className="nav-menu">
                <NavLink className="nav-link"  to="/#about" >
                    אודות
                </NavLink>
                <NavLink className="nav-link"  to="/services">
                     החוויות שלנו
                </NavLink>
                <Link className="nav-link" to="/">
                    צור קשר
                </Link>
            </div>
        </nav>
         
    </div>
}

export default Navbar;