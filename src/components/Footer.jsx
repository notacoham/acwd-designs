import React from 'react'
import logo from '../assets/logo-acwd-white.png'
import { NavLink } from 'react-router-dom'
import WaveTop from './WaveTop'

const Footer = () => {
  return (
    <footer className='footer-center'>
      <WaveTop />
      <div className="footer-main">
        <img style={{height: '100px', width: '100px'}} className='footer-logo' src={logo} alt="ACWD Designs LLC Logo for the Footer" />
        <p className="footer-body">We believe in doing our best to help small businesses. Just because you're a small
            business, doesn't mean your website needs to be small too. Let's work together to build your site today.
        </p>
        <NavLink className='btn footer-btn' to='/contact'>Get Started Today</NavLink>
      </div>
      <div className="footer-links">
        <h2 className="footer-links-header">Quick Links</h2>
        <NavLink className='footer-link' to='/'>Home</NavLink>
        <NavLink className='footer-link' to='/about'>About</NavLink>
        <NavLink className='footer-link' to='/contact'>Contact</NavLink>
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
