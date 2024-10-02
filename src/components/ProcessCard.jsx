import React from 'react'

const ProcessCard = ( {id, title, description} ) => {
  return (
    <div className="about-process-card">
        <h2 className="process-card-step">Step {id}</h2>
        <div className="process-card-content">
            <h1 className="process-card-title">{title}</h1>
            <p className="process-card-body">{description}</p>
        </div>
    </div>
  )
}

export default ProcessCard
