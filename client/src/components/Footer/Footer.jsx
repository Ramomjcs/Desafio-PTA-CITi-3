import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Footer.css';
import logo from '../assets/logo.png'


function Footer (){
    return(
        <>
        <div className="footer">
            <div className="textoFooter">Made with &lt; / &gt; and &lt;3 CITi</div>
        </div>
        </>
    );
}

export default Footer;