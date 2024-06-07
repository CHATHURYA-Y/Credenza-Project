import React from 'react';
import './SampleCatalogue.css';

const SampleCatalogue = () => {
  return (
    <section className="catalogue">
      <h2>Our Sample Catalogue</h2>
      <p>Where Learning Unfolds like a story!</p>
      <div className="catalogue-items">
        <div className="catalogue-item">
          <img src="/assets/images/sample1.jpg" alt="Protista Family" />
          <p>Protista Family</p>
        </div>
        <div className="catalogue-item">
          <img src="/assets/images/sample2.jpg" alt="Atomic Structure" />
          <p>Atomic Structure</p>
        </div>
        <div className="catalogue-item">
          <img src="/assets/images/sample3.jpg" alt="Earth Core" />
          <p>Earth Core</p>
        </div>
        <div className="catalogue-item">
          <img src="/assets/images/sample4.jpg" alt="Pollination" />
          <p>Pollination</p>
        </div>
      </div>
    </section>
  );
};

export default SampleCatalogue;