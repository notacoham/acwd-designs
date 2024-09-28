import React from 'react';
import icon1 from '../assets/icons/icons8-smartphone-96.png'
import icon2 from '../assets/icons/icons8-utah-96.png'
import icon3 from '../assets/icons/icons8-search-engine-optimization-96.png'

const WhatWeDo = () => {
  return (
    <div className="what-center">
      <div className="what-content">
        <h1 className="what-title">What We Do</h1>
        <p className="what-body">
          At ACWD Designs, we work with small businesses to develop websites
          here in Millcreek, Utah. We write each line of code by hand to ensure
          the best performance and bring more customers to your storefront. We
          take care of the hosting and manage the edits so you have more time to
          focus on what really matters.
        </p>
      </div>
      <div className="what-list">
        <div className="what-item">
          <img src={icon1} alt="" className="what-img" />
          <h2 className="what-item-title">Responsive Design</h2>
          <p className="what-item-body">
            We make sure to build your site with all sizes of screens in mind so
            visitors can access your site from anywhere and see your beautiful website no matter what device they're using.
          </p>
          <button className="what-btn">Get Started</button>
        </div>
        <div className="what-item">
          <img src={icon2} alt="" className="what-img" />
          <h2 className="what-item-title">Support Local</h2>
          <p className="what-item-body">
            ACWD Designs is a local web development company based in Millcreek, Utah. We're committed to helping businesses in our community thrive by making professional website development accessible to all, regardless of size or budget
          </p>
          <button className="what-btn">Get Started</button>
        </div>
        <div className="what-item">
          <img src={icon3} alt="" className="what-img" />
          <h2 className="what-item-title">Boost your Visibility w/ SEO</h2>
          <p className="what-item-body">
            Supercharge your local presence with our SEO expertise. We'll optimize your website to attract more eyes, climb search rankings, and turn online visibility into real-world customers. From Millcreek to beyond, we'll put your business on the digital map and drive more traffic - both online and through your door.
          </p>
          <button className="what-btn">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
