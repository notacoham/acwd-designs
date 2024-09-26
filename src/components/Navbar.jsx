import React from 'react';
import logo from '../assets/logo-acwd-white.png';

const Navbar = () => {
  return (
    <div className="nav-center">
      <div className="nav-logo">
        <img src={logo} alt="Nav Logo" />
      </div>
      <div className="nav-links">
        <a className="nav-link" href="#home">
          Home
        </a>
        <a className="nav-link" href="#about">
          About
        </a>
        <a className="nav-link" href="#contact">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
