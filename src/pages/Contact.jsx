import React from 'react'
import PageHead from '../components/PageHead'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <div className='contact-center'>
      <PageHead header={'Contact Us'}/>
      <div className="contact-form-container">
        <div className="contact-content">
          <h1 className="contact-title">Lets Talk</h1>
          <p className="contact-body">Just fill out the form and let us know everything you want out of a new site. We respond to all
            inquiries within 24 hours of contacting us. Feel free to include your business address and we can meet in person! Being 
            a local, I love to meet on location for a more seamless experience. We can accommodate those outside of the Salt Lake area
            as well over Google Meets.
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Contact
