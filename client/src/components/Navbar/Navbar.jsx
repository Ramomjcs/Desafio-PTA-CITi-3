import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Navbar.css';
import logo from '../assets/logo.png'


function Navbar (){
    return(
        <>
        <div className="nav">
            <img src={logo} alt="Logo" />
        </div>
        </>
    );
}

export default Navbar;