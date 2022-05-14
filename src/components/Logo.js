import React from 'react';

import '../styles/logo.css';
import logo from '../assets/aircall_iconA_green_rgb.svg';

function Logo() {
  return (
    <>
      <a href='/' className='logoDiv'>
        <img src={logo} alt='aircall logo' style={{ width: '20%' }} />
        <h4 style={{ width: '80%' }}>Solutions Engineering</h4>
      </a>    
    </>
  )
}

export default Logo;