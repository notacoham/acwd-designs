import React from 'react'
import WaveBottom from '../components/WaveBottom'


const PageHead = ( { header } ) => {
  return (
      <div className="page-head-container">
        <h1 className="page-head-title">{header}</h1>
        <WaveBottom />
      </div>
  )
}

export default PageHead
