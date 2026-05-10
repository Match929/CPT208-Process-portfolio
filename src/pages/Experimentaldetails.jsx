import React from 'react';
import '../style.css';

const Experimentaldetails = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="proto-hero">
        <div className="proto-hero-bg"></div>
        <div className="container proto-hero-content">
          <h1 className="proto-hero-title">ClimbLink Experimental Details</h1>
          <p className="proto-hero-desc">
            Comprehensive documentation of experiment design, methodology, procedures, and quality assurance protocols for ClimbLink usability research
          </p>
          <p className="proto-hero-tag">
            <i className="fa-solid fa-microscope"></i> Research & Evaluation
          </p>
        </div>
      </section>

      {/* Section 1: Experiment Preparation */}
      <section id="preparation" className="section proto-section">
        <div className="container">
          <h2 className="proto-section-title">
            <span className="proto-section-num">01</span>
            Experiment Preparation
          </h2>
          <div className="proto-card">
            <ul className="experiment-list">
              <li>Test environment: Suzhou University HCI Lab (quiet, isolated room)</li>
              <li>Devices prepared: 2 × Xiaomi 12 Pro smartphones (test device), 1 × iPhone 14 (backup device)</li>
              <li>Prototype pre-installed on test devices with latest version (v1.2.4)</li>
              <li>Recording equipment: 2 × smartphones for video recording, 1 × audio recorder, consent forms printed</li>
              <li>Experiment materials organized in labeled folders: instructions, task sheets, questionnaires</li>
              <li>Facilitator briefed on protocol and prepared for potential technical issues</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 2: Standardized Experiment Procedure */}
      <section id="procedure" className="section proto-section">
        <div className="container">
          <h2 className="proto-section-title">
            <span className="proto-section-num">02</span>
            Standardized Experiment Procedure <span className="highlight-badge">(35 Minutes/Participant)</span>
          </h2>
          <div className="proto-card">
            <ol className="experiment-list experiment-list-ordered">
              <li>
                <strong>Welcome & Introduction (2 min)</strong>
                <ul>
                  <li>Welcome participant, introduce facilitator and observer</li>
                  <li>Explain the purpose of the study (academic research only)</li>
                  <li>Review consent form and obtain written signature</li>
                </ul>
              </li>
              <li>
                <strong>Pre-Test Questionnaire (3 min)</strong>
                <ul>
                  <li>Demographic information collection</li>
                  <li>Climbing experience assessment</li>
                  <li>Prior smartphone usage patterns</li>
                </ul>
              </li>
              <li>
                <strong>Device Handoff & Setup (2 min)</strong>
                <ul>
                  <li>Hand smartphone to participant</li>
                  <li>Confirm airplane mode is on</li>
                  <li>Explain any physical buttons or gestures needed</li>
                </ul>
              </li>
              <li>
                <strong>Task Briefing (2 min)</strong>
                <ul>
                  <li>Explain "think-aloud" protocol</li>
                  <li>Demonstrate think-aloud with simple example</li>
                  <li>Clarify that participant should speak thoughts aloud during tasks</li>
                </ul>
              </li>
              <li>
                <strong>Practice Task (3 min)</strong>
                <ul>
                  <li>Simple warm-up task: open app and view home screen</li>
                  <li>Ensure participant understands protocol</li>
                  <li>Answer any clarifying questions</li>
                </ul>
              </li>
              <li>
                <strong>Main Usability Tasks (15 min)</strong>
                <ul>
                  <li><span className="badge-orange">U1</span> Register account and complete profile setup</li>
                  <li><span className="badge-orange">U2</span> Discover nearby climbing gyms and view details</li>
                  <li><span className="badge-orange">U3</span> Use Smart Partner to find climbing buddy</li>
                  <li><span className="badge-orange">U4</span> Create climbing activity/event</li>
                  <li><span className="badge-orange">U5</span> Join community forum and post comment</li>
                  <li><span className="badge-orange">U6</span> Track climbing records and view statistics</li>
                </ul>
              </li>
              <li>
                <strong>SUS Questionnaire (5 min)</strong>
                <ul>
                  <li>Administer System Usability Scale (10 questions)</li>
                  <li>Allow participant to complete independently</li>
                  <li>Clarify any questions about scale interpretation</li>
                </ul>
              </li>
              <li>
                <strong>Post-Test Interview & Debriefing (3 min)</strong>
                <ul>
                  <li>Ask open-ended questions about overall experience</li>
                  <li>Collect additional feedback and suggestions</li>
                  <li>Thank participant and explain next steps</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Section 3: Data Collection & Statistical Analysis */}
      <section id="data-collection" className="section proto-section">
        <div className="container">
          <h2 className="proto-section-title">
            <span className="proto-section-num">03</span>
            Data Collection & Statistical Analysis
          </h2>
          <div className="proto-card">
            <ol className="experiment-list experiment-list-ordered">
              <li>
                <strong>Task Performance Metrics</strong>
                <ul>
                  <li>Task completion rate: success/failure per task</li>
                  <li>Task time: recorded in seconds for each task</li>
                  <li>Error count: number of user errors during task execution</li>
                  <li>Help requests: number of times participant requested facilitator assistance</li>
                </ul>
              </li>
              <li>
                <strong>Statistical Methods</strong>
                <ul>
                  <li>Descriptive statistics: mean, standard deviation, range for all metrics</li>
                  <li>Stratified analysis: separate statistics for novice, intermediate, and advanced user groups</li>
                  <li>Comparative analysis: independent samples t-test for SUS scores between user groups</li>
                  <li>Significance threshold: <span className="badge-orange">p&lt;0.05</span> for statistical significance</li>
                </ul>
              </li>
              <li>
                <strong>Qualitative Data Analysis</strong>
                <ul>
                  <li>Think-aloud verbal transcripts coded for themes</li>
                  <li>Pain point identification and categorization</li>
                  <li>User suggestion synthesis and prioritization</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Section 4: Experiment Validity & Bias Control */}
      <section id="validity" className="section proto-section">
        <div className="container">
          <h2 className="proto-section-title">
            <span className="proto-section-num">04</span>
            Experiment Validity & Bias Control
          </h2>
          <div className="proto-card">
            <ol className="experiment-list experiment-list-ordered">
              <li>
                <strong>Internal Validity</strong>
                <ul>
                  <li>Standardized protocol: all participants follow identical procedure</li>
                  <li>Controlled environment: quiet, distraction-free lab setting</li>
                  <li>Same test device used for all participants (Xiaomi 12 Pro)</li>
                  <li>Facilitator script maintained consistently across sessions</li>
                </ul>
              </li>
              <li>
                <strong>External Validity</strong>
                <ul>
                  <li>Diverse participant recruitment covering different experience levels</li>
                  <li>Realistic task scenarios based on actual user needs</li>
                  <li>Findings interpreted with consideration of lab vs. real-world context</li>
                </ul>
              </li>
              <li>
                <strong>Bias Mitigation</strong>
                <ul>
                  <li>No facilitator assistance during task execution unless safety concern</li>
                  <li>Think-aloud protocol to capture authentic user thoughts</li>
                  <li>Post-task questions asked after all tasks completed to avoid influence</li>
                  <li>Video recordings reviewed by multiple researchers for inter-rater reliability</li>
                </ul>
              </li>
              <li>
                <strong>Confounding Variables</strong>
                <ul>
                  <li>Device familiarity controlled by pre-test questionnaire</li>
                  <li>Prior app experience noted and considered in stratified analysis</li>
                  <li>Time of day varied but controlled for in statistical analysis</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Section 5: Ethics & Data Quality Assurance */}
      <section id="ethics" className="section proto-section">
        <div className="container">
          <h2 className="proto-section-title">
            <span className="proto-section-num">05</span>
            Ethics & Data Quality Assurance
          </h2>
          <div className="proto-card">
            {/* 5.1 Ethics Compliance */}
            <div className="subsection">
              <h3 className="proto-subtitle">
                <i className="fa-solid fa-scale-balanced proto-icon-green"></i>
                5.1 Ethics Compliance
              </h3>
              <ol className="experiment-list experiment-list-ordered">
                <li>
                  <strong>Informed Consent</strong>
                  <ul>
                    <li>All participants provided written consent before study participation</li>
                    <li>Consent form explained study purpose, procedures, and time commitment</li>
                    <li>Participants informed of right to withdraw at any time without penalty</li>
                    <li>No personal data collected beyond demographic information for analysis</li>
                  </ul>
                </li>
                <li>
                  <strong>Privacy Protection</strong>
                  <ul>
                    <li>All data anonymized during analysis and reporting</li>
                    <li>Video recordings stored securely and deleted after analysis</li>
                    <li>No personally identifiable information in published results</li>
                  </ul>
                </li>
                <li>
                  <strong>Voluntary Participation</strong>
                  <ul>
                    <li>No coercion or undue influence used for recruitment</li>
                    <li>Participants free to skip tasks or withdraw at any point</li>
                    <li>No financial or academic incentives that could constitute coercion</li>
                  </ul>
                </li>
                <li>
                  <strong>Academic Integrity</strong>
                  <ul>
                    <li>Study conducted following HCI research ethics guidelines</li>
                    <li>Results reported accurately without fabrication or manipulation</li>
                    <li>All sources and prior work properly attributed</li>
                  </ul>
                </li>
              </ol>
            </div>

            {/* 5.2 Data Quality Assurance */}
            <div className="subsection">
              <h3 className="proto-subtitle">
                <i className="fa-solid fa-check-double proto-icon-purple"></i>
                5.2 Data Quality Assurance
              </h3>
              <ol className="experiment-list experiment-list-ordered">
                <li>
                  <strong>Pilot Testing</strong>
                  <ul>
                    <li>Pilot test conducted with 2 participants before main study</li>
                    <li>Pilot results used to refine task instructions and timing</li>
                    <li>Technical issues identified and resolved prior to main data collection</li>
                  </ul>
                </li>
                <li>
                  <strong>Data Validation</strong>
                  <ul>
                    <li>All task completion data verified against video recordings</li>
                    <li>SUS scores calculated using standard formula and double-checked</li>
                    <li>Outliers identified and reviewed for data quality issues</li>
                  </ul>
                </li>
                <li>
                  <strong>Inter-Rater Reliability</strong>
                  <ul>
                    <li>Video recordings coded by two independent researchers</li>
                    <li>Coding discrepancies resolved through discussion and consensus</li>
                    <li>Agreement rate target: &gt;85% before accepting qualitative findings</li>
                  </ul>
                </li>
                <li>
                  <strong>Data Security</strong>
                  <ul>
                    <li>All digital data stored on encrypted, password-protected devices</li>
                    <li>Physical consent forms stored in locked cabinet</li>
                    <li>Data access limited to research team members only</li>
                  </ul>
                </li>
                <li>
                  <strong>Documentation</strong>
                  <ul>
                    <li>All procedures documented in study protocol</li>
                    <li>Deviations from protocol noted and justified</li>
                    <li>Raw data preserved in original format for reproducibility</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="proto-footer">
        <div className="container">
          <p>ClimbLink Experimental Details | HCI Research Project | Suzhou University</p>
          <p className="footer-date">October 2024</p>
        </div>
      </footer>
    </>
  );
};

export default Experimentaldetails;