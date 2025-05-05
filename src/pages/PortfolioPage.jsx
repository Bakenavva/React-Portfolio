import React from 'react';
import Project from '../components/Project';
import './portfolioPage.css';

// Comment on first project object determines how to read lines

function PortfolioPage() {
  // Placeholder project data
  const projects = [
    {
      name: 'Kanban Board',
      repo: 'https://github.com/Bakenavva/Kanban-Board', // GitHub repo link
      link: 'https://kanban-board-mlms.onrender.com/', // Deployed app, if available; else shows Demo 
      description: 'Kanban Board to practice JWT authentication',
      imgName: 'KanbanBoardPreview', // Image key for Kanban Board
    },
    {
      name: 'Book Search Engine',
      repo: 'https://github.com/Bakenavva/Book-Search-Engine',
      link: 'https://book-search-engine-hv58.onrender.com/',
      description: 'Converted RESTful API to GraphQL API',
      imgName: 'BookSearchPreview', 
    },
    {
      name: 'SQL Employee Tracker',
      repo: 'https://github.com/Bakenavva/SQL-Employee-Tracker',
      link: 'https://drive.google.com/file/d/1Pv4RtcTY-5ilZx9uhk4nQSpXpwyym8fh/view',
      description: 'PostgreSQL database to manage employees',
      imgName: 'EmployeeDatabasePreview', 
    },
    {
      name: 'Git Candidate Search',
      repo: 'https://github.com/Bakenavva/Git-Candidate-Search',
      link: 'https://git-candidate-search-18kv.onrender.com/',
      description: 'GitHub API to search for candidates',
      imgName: 'CandidateSelectionPreview', 
    },
    {
      name: 'API Weather Dashboard',
      repo: 'https://github.com/Bakenavva/API-Weather-Dashboard',
      link: 'https://api-weather-dashboard-6tbm.onrender.com/',
      description: 'Weather dashboard using OpenWeather API',
      imgName: 'WeatherDashPreview', 
    },
    {
      name: 'Tech Quiz Testing',
      repo: 'https://github.com/Bakenavva/Tech-Quiz-Testing',
      link: 'https://drive.google.com/file/d/13Sp4HPOhethdsF_LIVo7Gz3KzzZBqEzO/view',
      description: 'Configured Cypress testing for a quiz app',
      imgName: 'CypressTestingPreview', 
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