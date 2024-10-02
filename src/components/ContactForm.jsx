import React from 'react'
import { toast } from 'react-toastify';


const ContactForm = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "10040e4d-4da7-4fbb-ba27-0a3b897b01f5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Can't Wait To Work With You!");
      toast.success('Form Submitted!')
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
      <div className='form-center'>
      <form className='form' onSubmit={onSubmit}>
        <h1 className="form-title">Make An Appointment</h1>

        <div className="form-input-container">
        <h2 className="form-subheader">Name</h2>
        <input className='form-input' type="text" name="name" required placeholder='Name'/>
        </div>
        <div className="form-input-container">
        <h2 className="form-subheader">Email</h2>
        <input className='form-input' type="email" name="email" required placeholder='Email'/>
        </div>
        <div className="form-input-container">
        <h2 className="form-subheader">Message</h2>
        <textarea className='form-input-body' name="message" required placeholder='Message'></textarea>

        </div>
        <button className='btn submit-btn' type="submit">Submit</button>

      </form>
      <span>{result}</span>

    </div>
  )
}

export default ContactForm
