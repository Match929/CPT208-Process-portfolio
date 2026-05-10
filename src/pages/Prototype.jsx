import React, { useState } from 'react';
import '../style.css';

const Prototype = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);

  const ImageModal = ({ src, alt, caption, onClose }) => {
    if (!src) return null;
    return (
      <div className="image-modal" onClick={onClose}>
        <div className="image-modal-content">
          <span className="image-modal-close" onClick={onClose}>&times;</span>
          <img src={src} alt={alt} />
          {caption && <p className="image-caption">{caption}</p>}
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Hero Section */}
      <section className="proto-hero">
        <div className="proto-hero-bg"></div>
        <div className="container proto-hero-content">
          <h1 className="proto-hero-title">ClimbLink Prototype Design & Iteration</h1>
          <p className="proto-hero-desc">
            This section documents the iterative design process of ClimbLink, a one-stop service platform for indoor climbers in Suzhou. From initial hand-drawn wireframes to fully interactive prototypes, each iteration reflects our commitment to user-centered design and practical functionality.
          </p>
          <p className="proto-hero-tag">
            <i className="fa-solid fa-mountain"></i> One-Stop Service Platform for Indoor Climbers
          </p>
        </div>
      </section>

      {/* Section 1: Initial Prototype */}
      <section id="proto-initial" className="section proto-section">
        <div className="container">
          <h2 className="proto-section-title">
            <span className="proto-section-num">01</span>
            Initial Prototype (Hand-Drawn Wireframes)
          </h2>
          <p className="proto-section-desc">
            Our design journey began with hand-drawn wireframes focusing on core functions: partner matching, venue discovery, and community interaction. These low-fidelity sketches allowed rapid ideation and immediate feedback iteration.
          </p>

          <div className="proto-grid proto-grid-2">
            <div className="proto-card">
              <div className="proto-image-wrapper" onClick={() => setEnlargedImage({ src: null, alt: 'Home & Community Wireframe', caption: 'Initial Prototype – Home & Community Hand-Drawn Wireframes' })}>
                <div className="proto-image-placeholder">
                  <i className="fa-solid fa-image"></i>
                  <span>Image 1: Home & Community Wireframe</span>
                </div>
              </div>
              <h4 className="proto-card-title">Home & Community</h4>
              <p className="proto-card-text">Initial wireframe exploring the home feed and community discussion board layout, establishing the social foundation of the platform.</p>
            </div>
            <div className="proto-card">
              <div className="proto-image-wrapper" onClick={() => setEnlargedImage({ src: null, alt: 'Venue Page Wireframe', caption: 'Initial Prototype – Venue Page Hand-Drawn Wireframes' })}>
                <div className="proto-image-placeholder">
                  <i className="fa-solid fa-image"></i>
                  <span>Image 2: Venue Page Wireframe</span>
                </div>
              </div>
              <h4 className="proto-card-title">Venue Discovery</h4>
              <p className="proto-card-text">Wireframe for the climbing gym directory and venue detail pages, designed to help users quickly find nearby gyms with essential information.</p>
            </div>
          </div>

          <div className="proto-design-rationale">
            <h3><i className="fa-solid fa-lightbulb"></i> Design Rationale</h3>
            <ul>
              <li><strong>Simplicity First:</strong> Minimal UI elements to test core user flows without visual distractions</li>
              <li><strong>Information Hierarchy:</strong> Clear visual separation between partner matching, venue info, and social features</li>
              <li><strong>Scalability:</strong> Modular wireframe components that can be easily expanded in later iterations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 2: Iteration 1 */}
      <section id="proto-iter1" className="section proto-section proto-section-alt">
        <div className="container">
          <h2 className="proto-section-title">
            <span className="proto-section-num">02</span>
            Iteration 1 – Core Function Realization
          </h2>
          <p className="proto-section-desc">
            The first iteration transformed hand-drawn wireframes into basic interactive prototypes. We focused on realizing core functions with intuitive interfaces and seamless user experiences.
          </p>

          <div className="proto-card proto-card-wide">
            <div className="proto-image-wrapper proto-image-main" onClick={() => setEnlargedImage({ src: null, alt: 'Iteration 1 Comparison', caption: 'Iteration 1 – Hand-Drawn Wireframes → Basic Interactive Prototype' })}>
              <div className="proto-image-placeholder">
                <i className="fa-solid fa-image"></i>
                <span>Image 3: Iteration 1 – Prototype vs. Wireframe Comparison</span>
              </div>
            </div>
            <div className="proto-card-content">
              <h4 className="proto-card-title">Wireframe to Prototype Evolution</h4>
              <p className="proto-card-text">Visual comparison showing the transformation from paper wireframes to digital interactive prototype, highlighting improved visual hierarchy and interaction design.</p>
            </div>
          </div>

          <div className="proto-grid proto-grid-3">
            <div className="proto-feature-item">
              <div className="proto-feature-icon" style={{ background: 'linear-gradient(135deg, #228B22, #32CD32)' }}>
                <i className="fa-solid fa-handshake"></i>
              </div>
              <h4>Partner Matching</h4>
              <p>Basic matching interface with skill level and availability filters</p>
            </div>
            <div className="proto-feature-item">
              <div className="proto-feature-icon" style={{ background: 'linear-gradient(135deg, #FF6B35, #FF8C42)' }}>
                <i className="fa-solid fa-map-location-dot"></i>
              </div>
              <h4>Venue Directory</h4>
              <p>Interactive gym listing with location-based search</p>
            </div>
            <div className="proto-feature-item">
              <div className="proto-feature-icon" style={{ background: 'linear-gradient(135deg, #9B59B6, #BE90D4)' }}>
                <i className="fa-solid fa-comments"></i>
              </div>
              <h4>Community Board</h4>
              <p>Forum-style discussion space for climbing enthusiasts</p>
            </div>
          </div>

          <div className="proto-design-rationale">
            <h3><i className="fa-solid fa-cog"></i> Design Considerations</h3>
            <ul>
              <li><strong>User Flow Optimization:</strong> Simplified navigation to reduce cognitive load for new users</li>
              <li><strong>Visual Consistency:</strong> Established design language with consistent colors, typography, and spacing</li>
              <li><strong>Functionality Focus:</strong> Prioritized core features over advanced capabilities to ensure stability</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3: Iteration 2 */}
      <section id="proto-iter2" className="section proto-section">
        <div className="container">
          <h2 className="proto-section-title">
            <span className="proto-section-num">03</span>
            Iteration 2 – Full-Feature Completion & Experience Optimization
          </h2>
          <p className="proto-section-desc">
            The second iteration introduced comprehensive features and refined the user experience. This phase added five new core modules and numerous experience enhancements based on user testing feedback.
          </p>

          {/* New Core Functions */}
          <div className="proto-subsection">
            <h3 className="proto-subsection-title">
              <i className="fa-solid fa-plus-circle"></i> Newly Added Core Functions
            </h3>

            <div className="proto-grid proto-grid-2">
              {/* Market */}
              <div className="proto-card" id="proto-market">
                <div className="proto-image-wrapper" onClick={() => setEnlargedImage({ src: null, alt: 'Market Prototype', caption: 'New Feature – Secondhand Climbing Gear Marketplace' })}>
                  <div className="proto-image-placeholder">
                    <i className="fa-solid fa-image"></i>
                    <span>Image 4: Market – Secondhand Gear Marketplace</span>
                  </div>
                </div>
                <div className="proto-tag proto-tag-orange">Priority Feature</div>
                <h4 className="proto-card-title">Secondhand Marketplace</h4>
                <p className="proto-card-text">A dedicated platform for climbers to buy, sell, and trade used climbing gear safely. Features include verified sellers, secure messaging, and location-based transactions. The market addresses the high cost of climbing equipment and promotes sustainable consumption within the climbing community.</p>
                <div className="proto-stat">
                  <span className="proto-stat-value" style={{ color: '#FF6B35' }}>95.65%</span>
                  <span className="proto-stat-label">User Interest Rate</span>
                </div>
              </div>

              {/* Smart Partner */}
              <div className="proto-card" id="proto-smartpartner">
                <div className="proto-image-wrapper" onClick={() => setEnlargedImage({ src: null, alt: 'Smart Partner Prototype', caption: 'New Feature – Multi-Dimensional Climbing Partner Matching' })}>
                  <div className="proto-image-placeholder">
                    <i className="fa-solid fa-image"></i>
                    <span>Image 5: Smart Partner – Intelligent Matching</span>
                  </div>
                </div>
                <div className="proto-tag proto-tag-purple">AI Feature</div>
                <h4 className="proto-card-title">Smart Partner Matching</h4>
                <p className="proto-card-text">AI-powered partner matching system that considers multiple dimensions including skill level, climbing style, availability schedule, and gym preferences. The intelligent algorithm learns from user feedback to continuously improve match quality over time.</p>
                <div className="proto-stat">
                  <span className="proto-stat-value" style={{ color: '#9B59B6' }}>81.03%</span>
                  <span className="proto-stat-label">Match Satisfaction Rate</span>
                </div>
              </div>

              {/* Beginner Guide */}
              <div className="proto-card" id="proto-beginner">
                <div className="proto-image-wrapper" onClick={() => setEnlargedImage({ src: null, alt: 'Beginner Guide Prototype', caption: 'New Feature – Zero-Basis Climbing Beginner\'s Guide' })}>
                  <div className="proto-image-placeholder">
                    <i className="fa-solid fa-image"></i>
                    <span>Image 6: Beginner Guide – Onboarding Page</span>
                  </div>
                </div>
                <div className="proto-tag proto-tag-green">Core Function</div>
                <h4 className="proto-card-title">Beginner's Guide</h4>
                <p className="proto-card-text">Comprehensive onboarding system designed specifically for zero-experience climbers. Includes interactive tutorials, safety guidelines, gear recommendations, and step-by-step progression paths. The guide helps beginners build confidence and develop proper technique from the start.</p>
              </div>

              {/* Climb Records */}
              <div className="proto-card" id="proto-records">
                <div className="proto-image-wrapper" onClick={() => setEnlargedImage({ src: null, alt: 'Climb Records Prototype', caption: 'New Feature – Climbing Growth Data Tracking' })}>
                  <div className="proto-image-placeholder">
                    <i className="fa-solid fa-image"></i>
                    <span>Image 7: Climb Records – Progress Tracking</span>
                  </div>
                </div>
                <div className="proto-tag proto-tag-green">Core Function</div>
                <h4 className="proto-card-title">Climb Records</h4>
                <p className="proto-card-text">Personal climbing progress tracking system that logs climbing sessions, records achieved routes, tracks skill development over time, and visualizes growth through charts and statistics. Users can share achievements and compare progress with friends.</p>
              </div>

              {/* Creation Tools */}
              <div className="proto-card proto-card-wide" id="proto-creation">
                <div className="proto-image-wrapper" onClick={() => setEnlargedImage({ src: null, alt: 'Creation Tools Prototype', caption: 'New Feature – Community Content & Event Creation Tools' })}>
                  <div className="proto-image-placeholder">
                    <i className="fa-solid fa-image"></i>
                    <span>Image 8: Post / Climb Request / Event Creation Pages</span>
                  </div>
                </div>
                <div className="proto-tag proto-tag-orange">Priority Feature</div>
                <h4 className="proto-card-title">Creation Tools</h4>
                <p className="proto-card-text">Integrated content creation suite enabling users to create climbing posts, send partner requests, organize climbing events, and share media. Streamlined creation flows reduce friction and encourage active community participation.</p>
              </div>
            </div>
          </div>

          {/* Experience Refinements */}
          <div className="proto-subsection">
            <h3 className="proto-subsection-title">
              <i className="fa-solid fa-magic"></i> Experience Refinements
            </h3>
            <div className="proto-refinements">
              <div className="proto-refinement-item">
                <i className="fa-solid fa-bolt"></i>
                <div>
                  <h4>Performance Optimization</h4>
                  <p>Reduced app load time by 40% through lazy loading and code splitting</p>
                </div>
              </div>
              <div className="proto-refinement-item">
                <i className="fa-solid fa-universal-access"></i>
                <div>
                  <h4>Accessibility Improvements</h4>
                  <p>Enhanced screen reader support and improved color contrast ratios</p>
                </div>
              </div>
              <div className="proto-refinement-item">
                <i className="fa-solid fa-mobile-screen"></i>
                <div>
                  <h4>Mobile-First Redesign</h4>
                  <p>Completely revamped mobile layout with gesture-based navigation</p>
                </div>
              </div>
              <div className="proto-refinement-item">
                <i className="fa-solid fa-sheet-plastic"></i>
                <div>
                  <h4>Micro-interactions</h4>
                  <p>Added subtle animations and transitions for a more engaging experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Final Prototype Overview */}
      <section id="proto-final" className="section proto-section proto-section-alt">
        <div className="container">
          <h2 className="proto-section-title">
            <span className="proto-section-num">04</span>
            Final Prototype Overview
          </h2>
          <p className="proto-section-desc">
            The final ClimbLink prototype represents a comprehensive, user-centered platform that addresses the unique challenges of indoor climbing social networking in Suzhou.
          </p>

          <div className="proto-features-summary">
            <div className="proto-feature-summary-item">
              <div className="proto-feature-summary-icon">
                <i className="fa-solid fa-robot"></i>
              </div>
              <div className="proto-feature-summary-content">
                <h4>AI-Powered Matching</h4>
                <p>Multi-dimensional intelligent partner matching with 81.03% satisfaction rate</p>
              </div>
            </div>
            <div className="proto-feature-summary-item">
              <div className="proto-feature-summary-icon">
                <i className="fa-solid fa-shop"></i>
              </div>
              <div className="proto-feature-summary-content">
                <h4>Secondhand Marketplace</h4>
                <p>Safe gear trading platform with 95.65% user interest</p>
              </div>
            </div>
            <div className="proto-feature-summary-item">
              <div className="proto-feature-summary-icon">
                <i className="fa-solid fa-map-marked-alt"></i>
              </div>
              <div className="proto-feature-summary-content">
                <h4>Comprehensive Gym Directory</h4>
                <p>Complete Suzhou climbing gym database with real-time information</p>
              </div>
            </div>
            <div className="proto-feature-summary-item">
              <div className="proto-feature-summary-icon">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
              <div className="proto-feature-summary-content">
                <h4>Beginner-Friendly Onboarding</h4>
                <p>Interactive guides helping new climbers start their journey safely</p>
              </div>
            </div>
          </div>

          <div className="proto-cta">
            <p>Ready to experience the full ClimbLink platform?</p>
            <a href="/" className="proto-btn">Explore the Portfolio</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="proto-footer">
        <div className="container">
          <p>© 2026 ClimbLink • Prototype Design & Iteration Documentation • CPT208 Group C2-2</p>
        </div>
      </footer>

      {/* Image Modal */}
      {enlargedImage && (
        <ImageModal 
          src={enlargedImage.src} 
          alt={enlargedImage.alt} 
          caption={enlargedImage.caption}
          onClose={() => setEnlargedImage(null)} 
        />
      )}
    </>
  );
};

export default Prototype;
