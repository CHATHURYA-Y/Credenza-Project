import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src="assets\images\logo1.png" alt="Credenza Logo" className="footer-logo" height="80px" width="238px" />
        <nav className="footer-nav">
          <a href="/">Home</a>
          <a href="/about">About us</a>
          <a href="/learning-science">Learning Science</a>
          <a href="/learning-vedic-maths">Learning Vedic Maths</a>
          <a href="/learning-bespoke">Learning Bespoke</a>
        </nav>
        <div className="footer-bottom">
          <p>© 2024 Copyright by The Credenza | Developed by <a href="https://www.valuethoughtz.com">ValueThoughtz</a></p>
          <nav className="footer-terms">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms">Terms</a>
            <a href="/cookies">Cookies</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;