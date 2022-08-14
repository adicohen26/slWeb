import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Grid';

function Navbar(){


    console.log("in navbar");
    return <div className="navbar">
         <MenuIcon />
         <p id="logo">שרון ולירון</p>
    </div>
}

export default Navbar;