import React from 'react'
import profileImg from '../assets/alex-cottam-profile-img-edited.png'
import { NavLink } from 'react-router-dom'
import Pricing from '../components/Pricing'
import PageHead from '../components/PageHead'

const About = () => {
  return (
    <div className='about-center'>
      <PageHead header={'About Us'}/>
      <div className="about-me-center">
        <img src={profileImg} alt="" className="about-me-img" />
        <div className="about-me-content">
          <h2 className="about-me-subtitle">ACWD Designs</h2>
          <h1 className="about-me-title">A Passion For Design and Small Business</h1>
          <p className="about-me-body">My name is Alex, owner and lead developer of ACWD Designs. My passion for technology and art naturally led me to web development, where I found the perfect blend of creativity and technical skill.
            Throughout my life, I've cherished the unique charm of small businesses - those hidden gems that make our communities special. However, I noticed a troubling trend: many of these businesses struggle to afford professional, functional websites that truly showcase their value.
          </p>
          <p className="about-me-body">That's why I created ACWD Designs. Our mission is to provide small businesses with stunning, effective websites at prices they can afford. Starting at just $1,200, we're making professional web design accessible to all.
            At ACWD Designs, we're not just building websites - we're helping small businesses shine online, one pixel at a time.
          </p>
          <NavLink to='/contact' className="price-btn">Get Started</NavLink>
        </div>
      </div>
    </div>
  )
}

export default About
