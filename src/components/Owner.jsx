import React from 'react'
import ownerImg from '../assets/alex-cottam-profile-img.jpg'

const Owner = () => {
  return (
    <div className='owner-center'>
      <img style={{height: '100vh', width: '40vw'}} src={ownerImg} alt="Pictured here is Owner and Developer of ACWD Designs Alex Cottam" className="owner-img" />
      <div className="owner-content">
        <div className="owner-content-headers">
            <h1 className="owner-content-header">What We Offer</h1>
            <p className="owner-content-body">We offer custom built websites made to last. Our standard pricing plan (see below) includes a standard
              5 page small business site. If you need more than that then we offer custom pricing based on additional pages, time involved, and overall
              scope of the project. A contract with us includes the design, development, deployment, hosting, support, and editing of your future website.
            </p>
        </div>
        <div className="owner-content-benefits">
            <div className="benefit">
                <h2 className="benefit-header">100% Secure</h2>
                <p className="benefit-body">Our sites are just static HTML and CSS code, meaning there’s literally nothing that can be hacked.</p>
            </div>
            <div className="benefit">
                <h2 className="benefit-header">100% Secure</h2>
                <p className="benefit-body">Our sites are just static HTML and CSS code, meaning there’s literally nothing that can be hacked.</p>
            </div>
            <div className="benefit">
                <h2 className="benefit-header">100% Secure</h2>
                <p className="benefit-body">Our sites are just static HTML and CSS code, meaning there’s literally nothing that can be hacked.</p>
            </div>
            <div className="benefit">
                <h2 className="benefit-header">100% Secure</h2>
                <p className="benefit-body">Our sites are just static HTML and CSS code, meaning there’s literally nothing that can be hacked.</p>
            </div>
            <div className="benefit">
                <h2 className="benefit-header">100% Secure</h2>
                <p className="benefit-body">Our sites are just static HTML and CSS code, meaning there’s literally nothing that can be hacked.</p>
            </div>
            <div className="benefit">
                <h2 className="benefit-header">100% Secure</h2>
                <p className="benefit-body">Our sites are just static HTML and CSS code, meaning there’s literally nothing that can be hacked.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Owner
