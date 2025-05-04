import React from 'react';
import { githubIcon, linkedinIcon } from '../assets/images/links';
import './footer.css'

const Footer = () => {
  const links = [
    {
      href: 'https://google.com',
      imgSrc: githubIcon,
      alt: 'GitHub',
    },
    {
      href: 'https://google.com',
      imgSrc: linkedinIcon,
      alt: 'LinkedIn',
    },
  ];
  
  return (
    <footer className="footer">
      <div className="footer-icons">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={link.imgSrc} alt={link.alt} className="footer-icon" />
          </a>
        ))}
      </div>
    </footer>
  );
};
  
export default Footer;