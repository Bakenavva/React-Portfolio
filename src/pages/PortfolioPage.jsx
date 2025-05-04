import React from 'react';
import Project from '../components/Project';
import './portfolioPage.css';

function PortfolioPage() {
  // Placeholder project data
  const projects = [
    {
      name: 'Project 1',
      repo: 'https://google.com',
      link: 'https://google.com',
      description: 'This is a placeholder description for Project 1.',
      imgName: 'placeholder1', // Placeholder for image key
    },
    {
      name: 'Project 2',
      repo: 'https://google.com',
      link: 'https://google.com',
      description: 'This is a placeholder description for Project 2.',
      imgName: 'placeholder2', // Placeholder for image key
    },
    {
      name: 'Project 3',
      repo: 'https://google.com',
      link: 'https://google.com',
      description: 'This is a placeholder description for Project 3.',
      imgName: 'placeholder3', // Placeholder for image key
    },
    {
      name: 'Project 4',
      repo: 'https://google.com',
      link: 'https://google.com',
      description: 'This is a placeholder description for Project 4.',
      imgName: 'placeholder4', // Placeholder for image key
    },
    {
      name: 'Project 5',
      repo: 'https://google.com',
      link: 'https://google.com',
      description: 'This is a placeholder description for Project 5.',
      imgName: 'placeholder5', // Placeholder for image key
    },
    {
      name: 'Project 6',
      repo: 'https://google.com',
      link: 'https://google.com',
      description: 'This is a placeholder description for Project 6.',
      imgName: 'placeholder6', // Placeholder for image key
    },
  ];

  return (
    <div className="portfolio-container">
      <h2>My Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </div>
  );

}

export default PortfolioPage;