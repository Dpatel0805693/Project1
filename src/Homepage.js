import React from 'react';
import './Homepage.css';
import Header from './components/Header.js';

const Homepage = () => {
  return (
    <div>
      {/* Use the Header component */}
      <Header />

      <section className="home">
        <div className="profile-image">
          <img 
            src="https://cdn.goodgallery.com/aff0103d-b383-4d77-a4d3-549a4ba909b4/t/2560/2b7bx8v5/business-headshot-photographer-professional-headshots-3.jpg" 
            alt="Profile Picture" 
          />
        </div>

        <div className="content">
          <h2>Hi, Im <span>Ava Smith</span></h2>
          <h4>Frontend Developer</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A esse totam provident voluptas similique.
              Impedit incidunt atque recusandae rem quam.</p>
        </div>

        <div className="social-icons">
          <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
          <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
          <a href="#"><i className="fa-brands fa-twitter"></i></a>
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
          <a href="#"><i className="fa-brands fa-github"></i></a>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
