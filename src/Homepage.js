import React, { useState } from 'react'; 
import './Homepage.css';
import Header from './components/Header.js';
import FallingComputer from './components/fallingComputers.js'; 

const Homepage = () => {
  const [falling, setFalling] = useState([]);

  const handleClick = () => {
    const newFalling = Array.from({ length: 10 }).map((_, index) => ({
      id: index,
      left: Math.random() * 100, // Random horizontal position (in %)
      animationDuration: Math.random() * 3 + 2, // Random duration between 2-5 seconds
    }));
    setFalling(newFalling);

    setTimeout(() => {
      setFalling([]); // resets confetti
    }, 5000);
  };

  return (
    <div className="homepage">
      <html>
      <Header />
      <section className="home">
        <div className="group">
          <div className="profile-image3">
            <img 
              src="https://cdn.goodgallery.com/aff0103d-b383-4d77-a4d3-549a4ba909b4/t/2560/2b7bx8v5/business-headshot-photographer-professional-headshots-3.jpg" 
              alt="Profile Picture" 
            />
          </div>

          <div className="content">
            <h2>
              Hi, I'm{' '}
              <span 
                onClick={handleClick} 
                style={{ cursor: 'pointer', transition: 'color 0.3s', color: 'white' }}
                onMouseEnter={e => e.target.style.color = 'red'} 
                onMouseLeave={e => e.target.style.color = 'white'}>
                Ava Smith
              </span>
            </h2>
            <h4>Frontend Developer</h4>
            <p>I'm Ava, a passionate full stack developer with a love for creating new and engaging web . With a background in design and coding, I enjoy turning complex problems into simple, beautiful solutions. When I'm not coding, you can find me exploring new tech trends, volunteering, or donating to charity!</p>
          </div>
        </div>
      </section>
      <div className="social-icons">
          <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
          <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
          <a href="#"><i className="fa-brands fa-twitter"></i></a>
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
          <a href="#"><i className="fa-brands fa-github"></i></a>
      </div>
      {falling.map(({ id, left, animationDuration }) => (
        <FallingComputer key={id} left={left} animationDuration={animationDuration} />
      ))}
      </html>
    </div>
  );
};

export default Homepage;