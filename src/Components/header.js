import React from 'react';
import Logo from '../assert/logo.png';
import '../App.css';


function Header() {
    return (
      <div>
          <header >
          <img src={Logo} alt="Logo" className="Logo" />
          </header>
      </div>
    );
  }
  
  export default Header;
  
