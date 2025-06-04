import React from 'react';
import './contcat.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function ContactUs() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-left">
          <h2>Get in Touch</h2>
          <p><strong>✉ Email  :</strong> kusumanetti2420@gmail.com</p>
          <p><strong>☎ Phone  :</strong> 1224200923</p>
          <p><strong>📍 Address :</strong> Ashok Nagar, Hyderabad, India</p>
          <p><strong>Follow Us</strong></p>
          <div className="social-icons">
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
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
}

export default ContactUs;
