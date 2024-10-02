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
          <p className="contact-body">Complete our form and share with us your website vision and needs.
             We will get back to you with next steps and we respond within 24 hours. You can even
             include your business address for an in-person meeting! As a local, I enjoy on-site consultations for a seamless experience.
             Outside Salt Lake? No problem, we'll connect via Google Meet. Let's bring your ideas to life!
          </p>
        </div>
          <ContactForm />
      </div>
    </div>
  )
}

export default Contact
