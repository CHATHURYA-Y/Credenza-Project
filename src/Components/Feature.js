// Feature.js
import React from 'react';
import './Feature.css';

function Feature({ title, description, image, reverse }) {
  return (
    <div className={`feature ${reverse ? 'reverse' : ''}`}>
      <img src={image} alt={title} className="feature-image" />
      <div className="feature-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="read-more">Read more</button>
      </div>
    </div>
  );
}

export default Feature;
