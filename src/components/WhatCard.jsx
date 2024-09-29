import React from 'react'
import { NavLink } from 'react-router-dom'

const WhatCard = ({ img, title, description, buttonText, destination}) => {
  return (
    <div>
      <div className="what-item">
          <img src={img} alt={title} className="what-img" />
          <h2 className="what-item-title">{title}</h2>
          <p className="what-item-body">
            {description}
          </p>
          <NavLink className="what-btn" to={destination}>{buttonText}</NavLink>
        </div>
    </div>
  )
}

export default WhatCard
