import React, { useState } from 'react';
import '../style.css';

const UserManual = () => {
  const [expandedTable, setExpandedTable] = useState(null);

  const toggleTable = (tableId) => {
    setExpandedTable(expandedTable === tableId ? null : tableId);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="proto-hero">
        <div className="proto-hero-bg"></div>
        <div className="container proto-hero-content">
          <h1 className="proto-hero-title">ClimbLink Climbing Social APP Usability Testing</h1>
          <p className="proto-hero-desc">
            Comprehensive usability testing report for ClimbLink, evaluating user experience, task completion efficiency, and overall satisfaction with the climbing social platform prototype.
          </p>
          <p className="proto-hero-tag">
            <i className="fa-solid fa-flask"></i> User-Centered Research & Evaluation
          </p>
        </div>
      </section>

      {/* Section 1: Basic Test Information */}
      <section id="test-info" className="section proto-section">
        <div className="container">
          <h2 className="proto-section-title">
            <span className="proto-section-num">01</span>
            Basic Test Information
          </h2>
          <div className="proto-card">
            <ul className="info-list">
              <li><span className="info-label">Test Name:</span> ClimbLink Climbing Social APP Usability Testing</li>
              <li><span className="info-label">Test Date:</span> October 2024</li>
              <li><span className="info-label">Test Location:</span> Suzhou University HCI Lab</li>
              <li><span className="info-label">Test Duration:</span> 60 minutes per participant</li>
              <li><span className="info-label">Test Method:</span> Think-aloud protocol + Task completion</li>
              <li><span className="info-label">Number of Participants:</span> 20 users (8 Novice, 6 Intermediate, 6 Advanced)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 2: Test Objectives */}
      <section id="test-objectives" className="section proto-section">
        <div className="container">
          <h2 className="proto-section-title">
            <span className="proto-section-num">02</span>
            Test Objectives
          </h2>
          <div className="proto-card">
            <ol className="objectives-list">
              <li>Assess the overall usability of ClimbLink core functions</li>
              <li>Identify user pain points and barriers in task completion</li>
              <li>Evaluate task completion rate and efficiency metrics</li>
              <li>Measure user satisfaction using SUS (System Usability Scale)</li>
              <li>Compare performance across different user experience levels</li>
              <li>Provide actionable recommendations for iterative improvements</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Section 3: Test Scope and Function Priority */}
      <section id="test-scope" className="section proto-section">
        <div className="container">
          <h2 className="proto-section-title">
            <span className="proto-section-num">03</span>
            Test Scope and Function Priority
          </h2>
          <div className="proto-card">
            {/* 3.1 Included in Test (Core) */}
            <div className="subsection">
              <h3 className="proto-subtitle">
                <i className="fa-solid fa-check-circle proto-icon-green"></i>
                Included in Test (Core Functions)
              </h3>
              <div className="table-container" onClick={() => toggleTable('core-functions')}>
                <table className={`data-table ${expandedTable === 'core-functions' ? 'expanded' : ''}`}>
                  <thead>
                    <tr>
                      <th>Function Module</th>
                      <th>Test Depth</th>
                      <th>Priority</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Venue Discovery</td><td>Full</td><td>High</td></tr>
                    <tr><td>Smart Partner Matching</td><td>Full</td><td>High</td></tr>
                    <tr><td>Community Forum</td><td>Full</td><td>Medium</td></tr>
                    <tr><td>User Profile</td><td>Partial</td><td>Medium</td></tr>
                    <tr><td>Activity Creation</td><td>Full</td><td>High</td></tr>
                    <tr><td>Climb Records</td><td>Partial</td><td>Medium</td></tr>
                  </tbody>
                </table>
                <span className="table-toggle">Click to expand/collapse</span>
              </div>
            </div>

            {/* 3.2 Simplified Test (Non-Core) */}
            <div className="subsection">
              <h3 className="proto-subtitle">
                <i className="fa-solid fa-minus-circle proto-icon-orange"></i>
                Simplified Test (Non-Core Functions)
              </h3>
              <ul className="scope-list">
                <li>Secondhand Marketplace (browsing only)</li>
                <li>Beginner Guide (overview only)</li>
                <li>Notification System (basic review)</li>
                <li>Settings & Preferences</li>
              </ul>
            </div>

            {/* 3.3 Not Included in Test */}
            <div className="subsection">
              <h3 className="proto-subtitle">
                <i className="fa-solid fa-x-circle proto-icon-gray"></i>
                Not Included in Test
              </h3>
              <ul className="scope-list">
                <li>Payment Integration</li>
                <li>Real-time Chat System</li>
                <li>Push Notifications</li>
                <li>Admin Dashboard</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Test Participant Design */}
      <section id="participants" className="section proto-section">
        <div className="container">
          <h2 className="proto-section-title">
            <span className="proto-section-num">04</span>
            Test Participant Design
          </h2>
          <div className="proto-card">
            {/* 4.1 User Stratification */}
            <div className="subsection">
              <h3 className="proto-subtitle">
                <i className="fa-solid fa-users proto-icon-purple"></i>
                User Stratification
              </h3>
              <div className="table-container" onClick={() => toggleTable('stratification')}>
                <table className={`data-table ${expandedTable === 'stratification' ? 'expanded' : ''}`}>
                  <thead>
                    <tr>
                      <th>User Level</th>
                      <th>Experience Duration</th>
                      <th>Number of Participants</th>
                      <th>Percentage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Novice</td><td>&lt; 3 months</td><td>8</td><td>40%</td></tr>
                    <tr><td>Intermediate</td><td>3-12 months</td><td>6</td><td>30%</td></tr>
                    <tr><td>Advanced</td><td>&gt; 12 months</td><td>6</td><td>30%</td></tr>
                    <tr><td><strong>Total</strong></td><td>-</td><td><strong>20</strong></td><td><strong>100%</strong></td></tr>
                  </tbody>
                </table>
                <span className="table-toggle">Click to expand/collapse</span>
              </div>
            </div>

            {/* 4.2 Eligibility Criteria */}
            <div className="subsection">
              <h3 className="proto-subtitle">
                <i className="fa-solid fa-check-square proto-icon-green"></i>
                Eligibility Criteria
              </h3>
              <ul className="criteria-list">
                <li>Age: 18-45 years old</li>
                <li>Has indoor climbing experience</li>
                <li>Familiar with mobile app usage</li>
                <li>Able to complete 60-minute testing session</li>
                <li>Willing to provide honest feedback</li>
              </ul>
            </div>

            {/* 4.3 Exclusion Criteria */}
            <div className="subsection">
              <h3 className="proto-subtitle">
                <i className="fa-solid fa-square-xmark proto-icon-gray"></i>
                Exclusion Criteria
              </h3>
              <ul className="criteria-list">
                <li>Users with no climbing experience</li>
                <li>Users unfamiliar with smartphones</li>
                <li>Users with visual/hearing impairments</li>
                <li>Previous participants in similar tests</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Test Task Design */}
      <section id="tasks" className="section proto-section">
        <div className="container">
          <h2 className="proto-section-title">
            <span className="proto-section-num">05</span>
            Test Task Design
          </h2>
          <div className="proto-card">
            <div className="table-container" onClick={() => toggleTable('tasks')}>
              <table className={`data-table data-table-wide ${expandedTable === 'tasks' ? 'expanded' : ''}`}>
                <thead>
                  <tr>
                    <th>Task ID</th>
                    <th>Task Description</th>
                    <th>Function Module</th>
                    <th>Expected Duration</th>
                    <th>Success Criteria</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>T01</td><td>Register and complete profile setup</td><td>User Auth</td><td>5 min</td><td>Profile 100% complete</td></tr>
                  <tr><td>T02</td><td>Find nearby climbing gyms and view details</td><td>Venue Discovery</td><td>5 min</td><td>View 3+ gym details</td></tr>
                  <tr><td>T03</td><td>Use Smart Partner to find climbing buddy</td><td>Smart Matching</td><td>6 min</td><td>Send 1 match request</td></tr>
                  <tr><td>T04</td><td>Create a climbing activity/event</td><td>Activity Creation</td><td>6 min</td><td>Event published successfully</td></tr>
                  <tr><td>T05</td><td>Join existing climbing community forum</td><td>Community</td><td>4 min</td><td>Post 1 comment</td></tr>
                  <tr><td>T06</td><td>Track climbing records and progress</td><td>Climb Records</td><td>4 min</td><td>View weekly statistics</td></tr>
                </tbody>
              </table>
              <span className="table-toggle">Click to expand/collapse</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Test Results */}
      <section id="results" className="section proto-section">
        <div className="container">
          <h2 className="proto-section-title">
            <span className="proto-section-num">06</span>
            Test Results
          </h2>

          {/* 6.1 Basic User Information */}
          <div className="proto-card">
            <h3 className="proto-subtitle">
              <i className="fa-solid fa-user-circle proto-icon-green"></i>
              6.1 Basic User Information
            </h3>
            <div className="table-container" onClick={() => toggleTable('user-info')}>
              <table className={`data-table ${expandedTable === 'user-info' ? 'expanded' : ''}`}>
                <thead>
                  <tr>
                    <th>Attribute</th>
                    <th>Distribution</th>
                    <th>Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Gender</td><td>Male</td><td>65%</td></tr>
                  <tr><td></td><td>Female</td><td>35%</td></tr>
                  <tr><td>Age Group</td><td>18-25</td><td>45%</td></tr>
                  <tr><td></td><td>26-35</td><td>40%</td></tr>
                  <tr><td></td><td>36-45</td><td>15%</td></tr>
                  <tr><td>Education</td><td>Undergraduate</td><td>60%</td></tr>
                  <tr><td></td><td>Graduate</td><td>40%</td></tr>
                </tbody>
              </table>
              <span className="table-toggle">Click to expand/collapse</span>
            </div>
          </div>

          {/* 6.2 Detailed Single-User Test Data */}
          <div className="proto-card">
            <h3 className="proto-subtitle">
              <i className="fa-solid fa-chart-line proto-icon-orange"></i>
              6.2 Detailed Single-User Test Data
            </h3>
            <div className="table-container" onClick={() => toggleTable('detailed-data')}>
              <table className={`data-table data-table-wide ${expandedTable === 'detailed-data' ? 'expanded' : ''}`}>
                <thead>
                  <tr>
                    <th>Participant</th>
                    <th>Level</th>
                    <th>T01 Time</th>
                    <th>T02 Time</th>
                    <th>T03 Time</th>
                    <th>T04 Time</th>
                    <th>T05 Time</th>
                    <th>T06 Time</th>
                    <th>SUS Score</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>P01</td><td>Novice</td><td>6:23</td><td>5:45</td><td>7:12</td><td>8:34</td><td>4:56</td><td>5:12</td><td>68</td></tr>
                  <tr><td>P02</td><td>Novice</td><td>5:18</td><td>4:32</td><td>6:45</td><td>7:22</td><td>4:18</td><td>4:45</td><td>72</td></tr>
                  <tr><td>P03</td><td>Intermediate</td><td>3:45</td><td>3:22</td><td>4:18</td><td>5:34</td><td>3:12</td><td>3:45</td><td>78</td></tr>
                  <tr><td>P04</td><td>Intermediate</td><td>4:12</td><td>3:56</td><td>5:08</td><td>6:12</td><td>3:45</td><td>4:08</td><td>75</td></tr>
                  <tr><td>P05</td><td>Advanced</td><td>2:34</td><td>2:18</td><td>3:22</td><td>4:05</td><td>2:36</td><td>2:52</td><td>85</td></tr>
                  <tr><td>P06</td><td>Advanced</td><td>2:56</td><td>2:45</td><td>3:56</td><td>4:32</td><td>2:48</td><td>3:15</td><td>82</td></tr>
                  <tr><td>P07-P20</td><td>Mixed</td><td>--</td><td>--</td><td>--</td><td>--</td><td>--</td><td>--</td><td>--</td></tr>
                </tbody>
              </table>
              <span className="table-toggle">Click to expand/collapse</span>
            </div>
            <div className="indicator-desc">
              <p><strong>Time Format:</strong> MM:SS (minutes:seconds)</p>
              <p><strong>SUS Score Range:</strong> 0-100 (higher = better usability)</p>
              <p><strong>Task IDs:</strong> T01=Registration, T02=Venue Discovery, T03=Smart Partner, T04=Activity Creation, T05=Community, T06=Climb Records</p>
            </div>
          </div>

          {/* 6.3 Overall Statistical Results */}
          <div className="proto-card">
            <h3 className="proto-subtitle">
              <i className="fa-solid fa-bar-chart proto-icon-purple"></i>
              6.3 Overall Statistical Results
            </h3>

            {/* Task Completion Rate */}
            <div className="subsection">
              <h4 className="proto-subsubtitle">Task Completion Rate</h4>
              <div className="table-container" onClick={() => toggleTable('completion')}>
                <table className={`data-table ${expandedTable === 'completion' ? 'expanded' : ''}`}>
                  <thead>
                    <tr>
                      <th>Task</th>
                      <th>Completion Rate</th>
                      <th>Avg Time (min)</th>
                      <th>Success Count</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>T01 Registration</td><td>100%</td><td>4.2</td><td>20</td></tr>
                    <tr><td>T02 Venue Discovery</td><td><span className="highlight-green">97.92%</span></td><td>4.1</td><td>19</td></tr>
                    <tr><td>T03 Smart Partner</td><td>95%</td><td>5.3</td><td>19</td></tr>
                    <tr><td>T04 Activity Creation</td><td>90%</td><td>6.2</td><td>18</td></tr>
                    <tr><td>T05 Community</td><td>100%</td><td>3.8</td><td>20</td></tr>
                    <tr><td>T06 Climb Records</td><td>95%</td><td>4.3</td><td>19</td></tr>
                  </tbody>
                </table>
                <span className="table-toggle">Click to expand/collapse</span>
              </div>
            </div>

            {/* Task Failure Reasons */}
            <div className="subsection">
              <h4 className="proto-subsubtitle">Task Failure Reasons</h4>
              <div className="failure-reasons">
                <ul>
                  <li><strong>T02 (Venue Discovery):</strong> 1 user failed due to unclear filter options for gym amenities</li>
                  <li><strong>T03 (Smart Partner):</strong> 1 user failed due to confusion with matching criteria settings</li>
                  <li><strong>T04 (Activity Creation):</strong> 2 users failed due to unclear date/time selection interface</li>
                  <li><strong>T06 (Climb Records):</strong> 1 user failed due to difficulty finding the statistics page</li>
                </ul>
              </div>
            </div>

            {/* Quantitative Indicators */}
            <div className="subsection">
              <h4 className="proto-subsubtitle">Quantitative Indicators</h4>
              <div className="table-container" onClick={() => toggleTable('quantitative')}>
                <table className={`data-table ${expandedTable === 'quantitative' ? 'expanded' : ''}`}>
                  <thead>
                    <tr>
                      <th>Indicator</th>
                      <th>Value</th>
                      <th>Interpretation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Overall Task Completion Rate</td><td><span className="highlight-green">97.92%</span></td><td>Excellent</td></tr>
                    <tr><td>Average Task Time</td><td>4.45 min</td><td>Good</td></tr>
                    <tr><td>Error Rate</td><td>8.3%</td><td>Acceptable</td></tr>
                    <tr><td>Help Requests</td><td>1.2 per user</td><td>Low</td></tr>
                    <tr><td>System Usability Score (SUS)</td><td><span className="highlight-orange">71.81</span></td><td>Acceptable</td></tr>
                  </tbody>
                </table>
                <span className="table-toggle">Click to expand/collapse</span>
              </div>
            </div>

            {/* Stratified SUS Scores */}
            <div className="subsection">
              <h4 className="proto-subsubtitle">Stratified SUS Scores</h4>
              <div className="table-container" onClick={() => toggleTable('sus-stratified')}>
                <table className={`data-table ${expandedTable === 'sus-stratified' ? 'expanded' : ''}`}>
                  <thead>
                    <tr>
                      <th>User Level</th>
                      <th>Avg SUS Score</th>
                      <th>Score Range</th>
                      <th>Interpretation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Novice</td><td><span className="highlight-orange">71.81</span></td><td>65-78</td><td>Acceptable</td></tr>
                    <tr><td>Intermediate</td><td>76.25</td><td>72-80</td><td>Good</td></tr>
                    <tr><td>Advanced</td><td><span className="highlight-green">83.75</span></td><td>80-88</td><td>Excellent</td></tr>
                    <tr><td>Overall</td><td>76.00</td><td>65-88</td><td>Good</td></tr>
                  </tbody>
                </table>
                <span className="table-toggle">Click to expand/collapse</span>
              </div>
            </div>
          </div>

          {/* 6.4 Data Conclusions */}
          <div className="proto-card">
            <h3 className="proto-subtitle">
              <i className="fa-solid fa-lightbulb proto-icon-orange"></i>
              6.4 Data Conclusions
            </h3>
            <div className="conclusions-list">
              <ul>
                <li><span className="badge badge-green">97.92%</span> Overall task completion rate demonstrates strong usability performance</li>
                <li><span className="badge badge-orange">71.81</span> Average SUS score indicates acceptable overall usability, with room for improvement</li>
                <li><span className="badge badge-purple">83.75</span> Advanced users achieved highest satisfaction, suggesting experienced climbers find the app intuitive</li>
                <li>Novice users showed <span className="badge badge-orange">lower task efficiency</span> and <span className="badge badge-orange">higher confusion</span> with complex features</li>
                <li><strong>Key pain points for novices:</strong> Activity creation flow, Smart Partner matching criteria, navigation hierarchy</li>
                <li>Community and registration tasks achieved <span className="badge badge-green">100%</span> completion rate, indicating excellent design</li>
                <li>Recommendations: Improve onboarding for new users, simplify complex feature interfaces, add contextual help</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="proto-footer">
        <div className="container">
          <p>ClimbLink Usability Testing Report | HCI Research Project | Suzhou University</p>
          <p className="footer-date">October 2024</p>
        </div>
      </footer>
    </>
  );
};

export default UserManual;