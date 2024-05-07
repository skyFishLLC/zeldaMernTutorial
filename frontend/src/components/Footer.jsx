import React from 'react';

import logo from '../assets/footer-logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer-box'>
        <center><img src={logo} alt='zelda logo' height='100px' /></center>
    </div>
  )
}

export default Footer