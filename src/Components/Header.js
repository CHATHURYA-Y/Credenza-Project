import React from 'react';
import './Header.css'; 

function Header() {
  return (
    <header className="header">
      <div className="navbar">
        <div className="logo">
          <img src="assets\images\logo.png" alt="Credenza Logo" />
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#learning-science">Learning Science</a></li>
          <li><a href="#vedic-math">Learning Vedic Maths</a></li>
          <li><a href="#bespoke">Learning Bespoke</a></li>
        </ul>
        <button className="contact-btn">Contact Us</button>
      </div>
    </header>
  );
}

export default Header;