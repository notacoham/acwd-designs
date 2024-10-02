import React from 'react'
import testimonialImg from '../assets/zwicoat-testimonial-img.png'
import WaveBottom from './WaveBottom'
import WaveTop from './WaveTop'

const Testimonials = () => {
  return (
    <div className='testimonials-center'>
      <WaveTop />
      <div className="testimonials-head">
        <h2 className="testimonials-subtitle">Testimonials</h2>
        <h1 className="testimonials-title">Don't just take our word for it</h1>
        <h2 className="testimonials-subtitle">Here's our most recent customer</h2>
      </div>
      <div className="testimonial-container">
        <img src={testimonialImg} alt="a picture of a recent customer's website, Zwicoat Materials Innovations" className="testimonial-img" style={{height: '60vh', width: '60vw'}} />
        <div className="testimonial-quote">
          <h2 className="testimonial-company">ZwiCoat Materials Innovation</h2>
          <p className="testimonial-body">"I hired Alex to make a website for our biotech company. He put together
            a site that was better than anything I'd envisioned by the end of one week, and here I was thinking it would
            take months! Alex is a one-stop shop for design, creation, and deployment. I fully recommend him to anyone, especially
            to business owners looking to get the most out of their online presence."</p>
          <h2 className="testimonial-name">- Kameron R. Hansen | CTO and President</h2>
        </div>
      </div>
      <WaveBottom />
    </div>
  )
}

export default Testimonials
