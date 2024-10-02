import React from 'react'
import img from '../assets/millcreek-commons.png'
import { benefits } from '../data'
import Benefit from './Benefit'

const Owner = () => {
  return (
    <div className='offerings-center'>
      <img className='offerings-img' style={{height: '65vh', width: '50vw'}} src={img} alt="a picture of the Millcreek Utah Commons" />
      <div className="offerings-content">
        <div className="offerings-content-headers">
            <h1 className="offerings-content-header">What We Offer</h1>
            <p className="offerings-content-body">We offer custom built websites made to last. Our standard pricing plan (see below) includes a standard
              5 page small business site. If you need more than that then we offer custom pricing based on additional pages, time involved, and overall
              scope of the project. A contract with us includes the design, development, deployment, hosting, support, and editing of your future website.
            </p>
        </div>
        <div className="offerings-content-benefits">
          {benefits.map((singleBenefit) => {
            return <Benefit key={singleBenefit.id} {...singleBenefit} />
          })}
            
        </div>
      </div>
    </div>
  )
}

export default Owner
