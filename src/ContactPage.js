import React from 'react';
import ContactForm from './components/ContactForm'; 
import './ContactPage.css'; 

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1>Contact Me</h1>
      <ContactForm />
    </div>
  );
};

export default ContactPage;