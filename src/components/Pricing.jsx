import React from 'react'
import { NavLink } from 'react-router-dom'

const Pricing = () => {
  return (
    <div className='pricing-center'>
      <div className="pricing-header-container">
      <h1 className="pricing-header">Aggressive Pricing With Small Business In Mind</h1>
      <p className="pricing-body">Here at ACWD Designs, we want to empower every small business with an affordable, professional website. We want to expand your digital reach without expanding your budget.</p>
      <NavLink className="price-btn">Get Started</NavLink>
      </div>
      <div className="pricing-card">
        <h2 className="pricing-card-title">Lump Sum Pricing</h2>
        <ul className="pricing-features-list">
          <li className="pricing-feature">Design And Development</li>
          <li className="pricing-feature">$25/mo Hosting</li>
          <li className="pricing-feature">$100 Per Page after 5</li>
          <li className="pricing-feature">Edits and Support</li>
        </ul>
        <h2 className="price">Starting at $1200</h2>
        <NavLink className="price-btn">Get Started</NavLink>
        <NavLink className="what-btn pricing-btn">Pricing Details</NavLink>
      </div>
    </div>
  )
}

export default Pricing
