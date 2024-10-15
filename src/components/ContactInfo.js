import React from 'react';
import './ContactInfo.css';

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <h3>My Contact Information</h3>
      <p>Email: avasmith@gmail.com</p>
      <p>Number: (123) 456-7890</p>
      <div className="social-links">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
      <h3>My Location</h3>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14098.336787556658!2d-82.47623334414288!3d27.945389622453916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c486790540f7%3A0x4bbb221fd92c55d9!2sThe%20University%20of%20Tampa!5e0!3m2!1sen!2sus!4v1728873415242!5m2!1sen!2sus"
          width="160"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactInfo;