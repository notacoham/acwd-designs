import React from 'react'
import logo from '../assets/logo-acwd-white.png'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer-center'>
      <div className="footer-main">
        <img style={{height: '100px', width: '100px'}} className='footer-logo' src={logo} alt="ACWD Designs LLC Logo for the Footer" />
        <p className="footer-body">We believe in doing our best to help small businesses. Just because you're a small
            business, doesn't mean your website needs to be small too. Let's work together to build your site today.
        </p>
        <NavLink className='btn footer-btn'>Get Started Today</NavLink>
      </div>
      <div className="footer-links">
        <h2 className="footer-links-header">Quick Links</h2>
        <NavLink className='footer-link'>Home</NavLink>
        <NavLink className='footer-link'>About</NavLink>
        <NavLink className='footer-link'>Contact</NavLink>
      </div>
      <div className="footer-contacts">
        <p className="footer-contact">(801) 719-1411</p>
        <p className="footer-contact">acwddesigns@gmail.com</p>
        <p className="footer-contact">Millcreek, UT</p>
      </div>
    </footer>
  )
}

export default Footer
