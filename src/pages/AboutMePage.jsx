import React from 'react';
import './aboutMePage.css';
import profilePic from '../assets/images/profilepic.png';

function AboutMePage() {
  return (
    <div className="about-container">
      <h2>About Me</h2>
        <img
          src={profilePic}
          alt="Profile"
          style={{
            height: '200px',
            width: '200px',
            borderRadius: '50%',
            marginRight: '20px',
          }}
        />
        <p>
          Hello! My name is Ernesto Aleman, and I am student studying full-stack development. 
          Over the past few months, I’ve been honing my skills in various technologies, including React, Node.js, and Express.
          <br />
          <br />
          Feel free to browse my portfolio and check out the projects I’ve worked on during my journey as a developer. Thank you for visiting!
        </p>
    </div>
  );
}

export default AboutMePage;