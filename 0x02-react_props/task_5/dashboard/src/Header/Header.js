import React from 'react';
import './Header.css';
import holbertonLogo from '../assets/Holberton Logo.jpg';

function Header() {
  return (
    <div className="App-header">
      <img src={holbertonLogo} alt="Holberton Logo" />
      <h1>School dashboard</h1>
    </div>
  );
}

export default Header;