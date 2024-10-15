import React from 'react';
import './Aboutme.css';

const AboutMe = () => {
  return (
    <div className="about-container">
      <section className="profile-section">
        <div className="profile-image">
          <img 
            src="https://cdn.goodgallery.com/aff0103d-b383-4d77-a4d3-549a4ba909b4/t/2560/2b7bx8v5/business-headshot-photographer-professional-headshots-3.jpg" 
            alt="Profile Picture"
          />
        </div>
        <div className="profile-content">
          <h1>Ava Smith, <span>Web Developer</span></h1>
          <p>
            I am a passionate web developer with a keen interest in designing. My primary focus is on front-end development, where I enjoy creating visually appealing and user-friendly interfaces. I take pride in translating complex ideas into engaging designs that enhance user experiences. With a strong understanding of web technologies, I strive to build responsive and dynamic websites that not only meet the needs of users but also reflect my creative vision.
          </p>
        </div>
      </section>

      <section className="education-section">
        <h2>Education</h2>
        <div className="education-item">
          <p><strong>2019 - 2022</strong></p>
          <p><em>University of Tampa</em><br/>BSc Multimedia & Animation, GPA: 3.8</p>
        </div>
        <div className="education-item">
          <p><strong>2017 - 2018</strong></p>
          <p><em>Georgia High School</em><br/>GPA: 3.7</p>
        </div>
      </section>

      <section className="experience-section">
        <h2>Experience</h2>
        <div className="experience-item">
          <p><strong>Summer 2023</strong></p>
          <p>Web Development Intern<br/><em>Disney Universal Studios</em></p>
          <ul style={{ color: '#003366', textAlign: 'left', paddingLeft: '20px' }}>
            <li>Assisted in developing responsive web applications for the park's website.</li>
            <li>Collaborated with the design team to enhance user interface and user experience.</li>
          </ul>
        </div>
        <div className="experience-item">
          <p><strong>2019 - 2022</strong></p>
          <p>Social Media Manager<br/><em>Girls Who Code Club, University of Tampa</em></p>
          <ul style={{ color: '#003366', textAlign: 'left', paddingLeft: '20px' }}>
            <li>Created engaging content to promote club activities and events on social media.</li>
            <li>Managed social media campaigns that increased membership by 30%.</li>
          </ul>
        </div>
        <div className="experience-item">
          <p><strong>2019-2022</strong></p>
          <p>Math Peer Tutor<br/><em>University of Tampa</em></p>
          <ul style={{ color: '#003366', textAlign: 'left', paddingLeft: '20px' }}>
            <li>Provided one-on-one tutoring to students struggling with math concepts.</li>
            <li>Developed custom study materials that improved students' performance by an average of 20%.</li>
          </ul>
        </div>
      </section>

      <section className="skills-section">
        <h2>Skills</h2>
        <div className="skills-container">
          <div className="skill-category">
            <h3>On Fire</h3>
            <p>Python</p>
            <p>Critical Thinking</p>
            <p>Adobe Photoshop</p>
            <p>Adobe Illustrator</p>
            <p>Adobe InDesign</p>
          </div>
          <div className="skill-category">
            <h3>Warming Up</h3>
            <p>JavaScript</p>
            <p>CSS</p>
            <p>HTML</p>
            <p>Adobe Animate</p>
          </div>
          <div className="skill-category">
            <h3>Frozen but never forgotten</h3>
            <p>Java</p>
            <p>GUI</p>
            <p>Raspberry Pi</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
