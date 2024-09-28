import React from 'react';
import heroImg from '../assets/acwd-designs-hero-img.png';

const Hero = () => {
  return (
    <div className="hero-center">
      <div className="hero-content">
        <div className="hero-title-container">
        <h1 className="hero-title">Small Business</h1>
        <h1 className="hero-title">Web Design</h1>
        </div>
        <p className="hero-body">
          We Specialize in Delivering Custom, Hand Coded Websites to give your
          Business the Boost it Needs.
        </p>
        <button className="btn">Get A Quote Today!</button>
      </div>
      <div className="hero-img">
        <img src={heroImg} alt="Hero Img" />
      </div>
    </div>
  );
};

export default Hero;
