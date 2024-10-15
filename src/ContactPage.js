import React from 'react';
import ContactForm from './components/ContactForm'; 
import ContactInfo from './components/ContactInfo';
import './ContactPage.css'; 

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1>Contact Me</h1>
      <div className="contact-content">
        <div className="contact-image">
          <img 
            src="https://cdn.goodgallery.com/aff0103d-b383-4d77-a4d3-549a4ba909b4/t/2560/2b7bx8v5/business-headshot-photographer-professional-headshots-3.jpg"
            alt="Contact"
          />
        </div>
        <ContactForm />
      </div>
      <ContactInfo />
    </div>
  );
};

export default ContactPage;