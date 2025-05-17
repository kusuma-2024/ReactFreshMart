import React from 'react'
import './contcat.css';

function ContactUs() {
 return (
     <div className="contact-page">
      <div className="contact-container">
        <div className="contact-left">
          <h2>Get in Touch</h2>
          <p><strong>✉ Email:</strong> kusumanetti2420@gmail.com</p>
          <p><strong> ☎ Phone:</strong> 1224200923</p>
          <p><strong>Address:</strong> Ashok Nagar, Hyderabad, India</p>
          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
          </div>
        </div>

        <div className="contact-right">
          <h2>Send Us a Message</h2>
          <form>
            <label>Name</label>
            <input type="text" placeholder="Enter your name" />
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
            <label>Message</label>
            <textarea placeholder="Your message"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs