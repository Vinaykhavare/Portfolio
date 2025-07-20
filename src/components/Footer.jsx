// src/components/Footer.jsx
import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Vinay Khavare. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/vinaykhavare" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" />
            GitHub
          </a>
          <a href="https://linkedin.com/in/vinaykhavare" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
            LinkedIn
          </a>
          <a href="#contact">
            <FaEnvelope className="icon" />
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
