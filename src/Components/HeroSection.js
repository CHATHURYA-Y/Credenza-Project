import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1><span class="blue">The future of learning with</span> <span class="pblue">Credenza!</span> </h1>
        <p>Our visual approach fosters critical thinking, creativity, and a true passion for learning.</p>
        <form className="hero-form">
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Let's Talk</button>
        </form>
      </div>
      <div className="hero-image">
        <img src="/assets/images/hero-image.jpg" alt="Learning" />
      </div>
      <div className='para'>
        <p1>
        Our visual approach fosters critical thinking, creativity, 
        and a true passion for learning.
        </p1>
      </div>
    </section>
  );
};

export default HeroSection;