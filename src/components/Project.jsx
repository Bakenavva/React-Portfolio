import React from 'react';
import images from '../assets/images/projects';
import './project.css';

function Project({ project }) {
  const { name, repo, link, description, imgName } = project;
  
  return (
    <div className="project-card">
      <img
        src={images[imgName]} // Dynamically access the image
        alt={imgName}
        className="project-image"
      />
      <div className="overlay">
        <h3>
          <a href={link} target="_blank" rel="noopener noreferrer">{name}</a>
        </h3>
        <p>{description}</p>
        <a href={repo} target="_blank" rel="noopener noreferrer" className="github-link">
          View Code
        </a>
      </div>
    </div>
  );
}
  
export default Project;