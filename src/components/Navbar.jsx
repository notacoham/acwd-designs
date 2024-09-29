import React from 'react';
import logo from '../assets/logo-acwd-white.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="nav-center">
      <div className="nav-logo">
        <img src={logo} alt="ACWD Designs LLC Logo for the Navigation bar." />
      </div>
      <div className="nav-links">
        <NavLink className="nav-link" to='/'>
          Home
        </NavLink>
        <NavLink className="nav-link" to='/about'>
          About
        </NavLink>
        <NavLink className="nav-link" to='/contact'>
          Contact
        </NavLink>
        <NavLink className="btn" to='/contact'>Get Started</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
