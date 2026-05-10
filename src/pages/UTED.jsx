import React from 'react';
import '../style.css';

const UTED = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="proto-hero">
        <div className="proto-hero-bg"></div>
        <div className="container proto-hero-content">
          <h1 className="proto-hero-title">UT & ED</h1>
          <p className="proto-hero-desc">
            Usability Testing & Experiment Design
          </p>
          <p className="proto-hero-tag">
            <i className="fa-solid fa-microscope"></i> Research & Evaluation
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section proto-section">
        <div className="container">
          <h2 className="proto-section-title">
            <span className="proto-section-num">01</span>
            Coming Soon
          </h2>
          <div className="proto-card">
            <p className="proto-card-text" style={{ textAlign: 'center', padding: '60px 20px' }}>
              Content will be added soon...
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="proto-footer">
        <div className="container">
          <p>ClimbLink Research | HCI Research Project | Suzhou University</p>
          <p className="footer-date">October 2024</p>
        </div>
      </footer>
    </>
  );
};

export default UTED;