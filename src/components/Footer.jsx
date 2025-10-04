// components/Footer.js
import React from 'react';
import './footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Khushi Verma</h3>
            <p>MERN Stack Developer</p>
          </div>
          
          <div className="footer-links">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-social">
            <a href="https://www.linkedin.com/in/khushiiverma/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/khushi-verma07" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-github"></i>
            </a>
            
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Khushi Verma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;