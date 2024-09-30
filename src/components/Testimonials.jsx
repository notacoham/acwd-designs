import React from 'react'
import testimonialImg from '../assets/zwicoat-testimonial-img.png'

const Testimonials = () => {
  return (
    <div className='testimonials-center'>
      <div className="testimonials-head">
        <h2 className="testimonials-subtitle">Testimonials</h2>
        <h1 className="testimonials-title">Don't just take our word for it</h1>
        <h2 className="testimonials-subtitle">Here's our most recent customer</h2>
      </div>
      <div className="testimonial-container">
        <img src={testimonialImg} alt="" className="testimonial-img" style={{height: '60vh', width: '60vw'}} />
        <div className="testimonial-quote">
          <h2 className="testimonial-company">ZwiCoat Materials Innovation</h2>
          <p className="testimonial-body">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Non itaque natus blanditiis, rerum veritatis vel error et tempore adipisci fugiat soluta, commodi perferendis explicabo dolores."</p>
          <h2 className="testimonial-name">- Kameron R. Hansen | CTO and President</h2>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
