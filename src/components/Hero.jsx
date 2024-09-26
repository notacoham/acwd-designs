import React from 'react';
import heroImg from '../assets/acwd-designs-hero-img.png';

const Hero = () => {
  return (
    <div className="hero-center">
      <div className="hero-content">
        <h1 className="hero-title">Small Business Web Design</h1>
        <p className="hero-body">
          We Specialize in Delivering a Custom, Hand Coded Website to give your
          Business the Boost it Needs.
        </p>
      </div>
      <div className="hero-img">
        <img src={heroImg} alt="Hero Img" />
      </div>
    </div>
  );
};

export default Hero;
