import React from 'react';
import './PreviousProjects.css';

const PreviousProjects = () => {
  return (
    <div>
      <div className="container">
        <h1>Previous Projects</h1>

        <div className="project">
          <img
            src={require('./StudentCollaborationPlatform.png')}
            alt="Student Collaboration Platform"
          />
          <h2>Student Collaboration Platform</h2>
          <p>
            A web-based platform designed for university students to collaborate on group projects.
            The platform includes features like task assignment, file sharing, and group messaging.
          </p>
          <p>
            <strong>Technologies used:</strong> HTML, CSS, JavaScript
          </p>
          <a href="#">View Project</a>
        </div>

        <div className="project">
          <img
            src={require('./UTampaCampusNavigation.jpg')}
            alt="UTampa Campus Navigation"
          />
          <h2>UTampa Campus Navigation</h2>
          <p>
            A campus navigation app to help new students find their way around the University of
            Tampa. It includes building directories, real-time map updates, and event notifications.
          </p>
          <p>
            <strong>Technologies used:</strong> Java, Android Studio, Google Maps API, Firebase
          </p>
          <a href="#">View Project</a>
        </div>
      </div>
    </div>
  );
};

export default PreviousProjects;
