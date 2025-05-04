import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Header, Footer } from './components';
import { AboutMePage, ContactPage, PortfolioPage, ResumePage } from './pages';
import './App.css';

function App() {
  return (
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            {/* <Route path="/" element={<AboutMePage />} /> */}
            <Route path="/about" element={<AboutMePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/" element={<Navigate to="/about" />} />
          </Routes>
        </main>
        <Footer />
      </div>
  );
}

export default App;