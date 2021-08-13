import React from 'react';
import WincLogo from '../../assets/winc-logo.jpeg';
import './Header.css';

function Header() {
  return (
    <div>
        <header className='header'>
          <img id='winc-logo' src={WincLogo} alt='problem?' />
          <h1>Student Dashboard</h1>
        </header>
    </div>
  );
}

export default Header;
