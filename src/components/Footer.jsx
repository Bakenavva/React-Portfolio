import React from 'react';
import { githubIcon, linkedinIcon } from '../assets/images/links';
import './footer.css'

const Footer = () => {
  const links = [
    {
      href: 'https://github.com/Bakenavva',
      imgSrc: githubIcon,
      alt: 'GitHub',
    },
    {
      href: 'https://www.linkedin.com/in/ernesto-aleman-8036942a3/',
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