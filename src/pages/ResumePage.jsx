import React from 'react';
import './resumePage.css';

function ResumePage() {
  return (
    <div className="resume-container">
      <h2>Resume</h2>
      <a href="/path-to-resume.pdf" download className="resume-download">
        Download My Resume
      </a>
      <div className="proficiencies">
        <div className="proficiency-section">
          <h3>Front-End Proficiencies</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>
        <div className="proficiency-section">
          <h3>Back-End Proficiencies</h3>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>RESTful APIs</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ResumePage;