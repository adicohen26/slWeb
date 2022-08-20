import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink , HashRouter} from "react-router-dom";
import "./Navbar.css";
import SideBar from "./SideBar";
import {Link} from 'react-scroll';
// {{hash: "/about"}}
import { HashLink } from 'react-router-hash-link';

function Navbar(){
    const [isOpen,setIsOpen]=useState(false);
   
    function toggle(){
        setIsOpen((pervValue) => (!pervValue));
    }

    return <div className="navbar">
        <nav className="navbar">
            <HashLink className="nav-link logo" smooth to="/#top">
                שרון ולירון
            </HashLink>
            <MenuIcon className="bar" onClick={toggle} />
            {isOpen && <SideBar isOpen={isOpen} toggle={toggle} />}
            <div className="nav-menu">
                <HashLink className="nav-link" smooth to="/#about">
                    אודות
                </HashLink>
                <NavLink className="nav-link"  to="/services">
                     החוויות שלנו
                </NavLink>
                <NavLink className="nav-link" to="/">
                    צור קשר
                </NavLink>
            </div>
        </nav>
         
    </div>
}

export default Navbar;