import React from 'react';
import ColorBends from '../components/ColorBends';
import DotField from '../components/DotField';
import headimage from '../assets/images/headimage.png';
import Kitagawa from '../assets/images/Kitagawa.jpg';
import S from '../assets/images/S.jpg';
import L from '../assets/images/L.jpg';
import Z from '../assets/images/Z.jpg';
import person1 from '../assets/images/person1.jpg';
import person2 from '../assets/images/person2.jpg';

const Home = () => {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <ColorBends
          colors={["#2ECCB2", "#66D3FA"]}
          rotation={90}
          speed={0.2}
          scale={3}
          frequency={1}
          warpStrength={1}
          mouseInfluence={0.8}
          noise={0.1}
          parallax={0.5}
          iterations={1}
          intensity={1}
          bandWidth={6}
          transparent
          autoRotate={0}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0
          }}
        />
        <DotField
          dotRadius={2.5}
          dotSpacing={12}
          bulgeStrength={80}
          glowRadius={0}
          sparkle={false}
          waveAmplitude={0}
          cursorRadius={500}
          cursorForce={0.1}
          bulgeOnly
          gradientFrom="rgba(46, 204, 178, 0.7)"
          gradientTo="rgba(102, 211, 250, 0.6)"
          glowColor="transparent"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1
          }}
        />
        <div className="container hero-row">
          <div className="hero-text">
            <h2>Welcome to Climblink</h2>
            <p className="hero-desc">
              The one-stop platform for climbing partners, gym info, and community interaction.
            </p>
            <div className="tech-stack">
              <span>Vue</span>
              <span>Firebase</span>
              <span>LBS</span>
              <span>AI</span>
            </div>
          </div>
          <div className="hero-card">
            <div className="card-shadow"></div>
            <img src={headimage} alt="Climbing App" />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section about">
        <div className="container">
          <h3 className="section-title">About Climblink</h3>
          <p className="section-sub">
            A modern social platform built for climbers to meet, share, and explore together.
          </p>
          <div className="about-grid">
            <div className="about-item cursor-target">
              <i className="fa-solid fa-people-group"></i>
              <h4>Find Partners</h4>
              <p>Smart matching for climbing buddies anytime, anywhere.</p>
            </div>
            <div className="about-item cursor-target">
              <i className="fa-solid fa-map-location-dot"></i>
              <h4>Gym Directory</h4>
              <p>All climbing gym information aggregated in one place.</p>
            </div>
            <div className="about-item cursor-target">
              <i className="fa-solid fa-comments"></i>
              <h4>Community</h4>
              <p>Share sends, tips, and stories with fellow climbers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="section team">
        <div className="container">
          <h3 className="section-title">Our Team</h3>
          <p className="section-sub">4 passionate creators behind Climblink</p>
          <div className="team-grid">
            <div className="team-card cursor-target">
              <img src={Kitagawa} alt="Xiangyu Zheng" />
              <h4>Xiangyu Zheng</h4>
              <p className="team-id">ID: 2360671</p>
              <p>Founder & CEO</p>
            </div>
            <div className="team-card cursor-target">
              <img src={S} alt="Minghao Shen" />
              <h4>Minghao Shen</h4>
              <p className="team-id">ID: 2360645</p>
              <p>Product Designer</p>
            </div>
            <div className="team-card cursor-target">
              <img src={L} alt="Yifei Li" />
              <h4>Yifei Li</h4>
              <p className="team-id">ID: 2361095</p>
              <p>Frontend Lead</p>
            </div>
            <div className="team-card cursor-target">
              <img src={Z} alt="Junjie Zhu" />
              <h4>Junjie Zhu</h4>
              <p className="team-id">ID: 2359942</p>
              <p>Community Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="section features">
        <div className="container">
          <h3 className="section-title">Core Features</h3>
          <p className="section-sub">Powerful tools built for climbers requirements</p>
          <div className="feature-grid">
            <div className="feature-card cursor-target">
              <i className="fa-solid fa-brain"></i>
              <h4>Matching</h4>
              <p>Not Just Any PartnerMore than half of climbers face difficulty finding suitable partners, mainly due to mismatched skill levels and schedules.ClimbLink solves this with multi-dimensional matching based on time, level, and gym — turning inefficient coordination into instant connection.</p>
            </div>
            <div className="feature-card cursor-target">
              <i className="fa-solid fa-building-columns"></i>
              <h4>Community</h4>
              <p>From Fragmented Chats to Structured CommunityMost climbers depend on familiar circles, yet interactions are scattered across temporary group chats with no lasting value.ClimbLink creates a persistent social layer where sessions, discussions, and relationships are continuously built and retained.</p>
            </div>
            <div className="feature-card cursor-target">
              <i className="fa-solid fa-users"></i>
              <h4>Gym Insights</h4>
              <p>Make Better Decisions Before You Even ArriveGym information today is fragmented and inconsistent, making it difficult to evaluate suitability — especially for beginners.ClimbLink centralizes structured data and community insights to provide clarity, transparency, and confidence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* User Persona */}
      <section id="user-persona" className="section persona">
        <div className="container">
          <h3 className="section-title">User Persona</h3>
          <p className="section-sub">Core user groups of Climblink with real scenarios & demands</p>
          <div className="persona-grid">
            <div className="persona-card cursor-target">
              <div className="persona-header">
                <img src={person1} alt="Daniel Chen" className="persona-avatar" />
                <div>
                  <h4 className="persona-name">Daniel Chen, 20</h4>
                  <div className="persona-tags">
                    <span className="persona-tag">University Student</span>
                    <span className="persona-tag">Beginner (V0-V2)</span>
                    <span className="persona-tag">2 Months Experience</span>
                  </div>
                </div>
              </div>
              <div className="persona-section">
                <h5 className="persona-section-title"><i className="fa-solid fa-circle-info"></i> Basic Info</h5>
                <div className="persona-section-content">
                  Climbs 1-2 times/week (weekends) | Suzhou indoor bouldering gyms | Rents equipment<br />
                  Personality: Introverted, socially anxious
                </div>
              </div>
              <div className="persona-section">
                <h5 className="persona-section-title"><i className="fa-solid fa-bullseye"></i> Goals & Motivations</h5>
                <div className="persona-section-content">
                  <ul>
                    <li>Learn basic climbing skills systematically</li>
                    <li>Find student/beginner climbing partners</li>
                    <li>Track progress & gain achievement</li>
                    <li>Control budget & avoid unnecessary costs</li>
                  </ul>
                </div>
              </div>
              <div className="persona-section">
                <h5 className="persona-section-title"><i className="fa-solid fa-triangle-exclamation"></i> Pain Points</h5>
                <div className="persona-section-content">
                  <ul>
                    <li>Anxious alone but dares not invite strangers</li>
                    <li>Messy WeChat groups, hard to find partners</li>
                    <li>Schedule mismatch with classmates</li>
                    <li>Lack of professional guidance & training plans</li>
                  </ul>
                </div>
              </div>
              <div className="persona-section">
                <h5 className="persona-section-title"><i className="fa-solid fa-check-circle"></i> Core Needs</h5>
                <div className="persona-section-content">
                  Accurate partner matching | Beginner tutorials | Progress tracking | Beginner-friendly gym labels
                </div>
              </div>
              <div className="persona-bio">
                Daniel started climbing 2 months ago to relieve academic stress. He struggles to find like-minded beginner partners and needs systematic guidance. Climblink helps him solve loneliness, learning, and progress tracking all in one.
              </div>
            </div>
            <div className="persona-card cursor-target">
              <div className="persona-header">
                <img src={person2} alt="Tim Zhou" className="persona-avatar" />
                <div>
                  <h4 className="persona-name">Tim Zhou, 28</h4>
                  <div className="persona-tags">
                    <span className="persona-tag">Tech Employee</span>
                    <span className="persona-tag">Intermediate (V3-V5)</span>
                    <span className="persona-tag">3 Years Experience</span>
                  </div>
                </div>
              </div>
              <div className="persona-section">
                <h5 className="persona-section-title"><i className="fa-solid fa-circle-info"></i> Basic Info</h5>
                <div className="persona-section-content">
                  Climbs 1-2 times/week (weekday evenings/weekends) | Multiple Suzhou gyms | Owns full equipment<br />
                  Personality: Outgoing, willing to help beginners
                </div>
              </div>
              <div className="persona-section">
                <h5 className="persona-section-title"><i className="fa-solid fa-bullseye"></i> Goals & Motivations</h5>
                <div className="persona-section-content">
                  <ul>
                    <li>Find consistent intermediate-level partners</li>
                    <li>Organize regular sessions & expand community</li>
                    <li>Track gym check-ins & completed routes</li>
                    <li>Share skills & help new climbers</li>
                  </ul>
                </div>
              </div>
              <div className="persona-section">
                <h5 className="persona-section-title"><i className="fa-solid fa-triangle-exclamation"></i> Pain Points</h5>
                <div className="persona-section-content">
                  <ul>
                    <li>Fixed work schedule causes time mismatch</li>
                    <li>Unstable partner pool among friends</li>
                    <li>Scattered gym & route information</li>
                    <li>Inefficient event organization on WeChat</li>
                  </ul>
                </div>
              </div>
              <div className="persona-section">
                <h5 className="persona-section-title"><i className="fa-solid fa-check-circle"></i> Core Needs</h5>
                <div className="persona-section-content">
                  Level/time/gym matching | Event management | Real-time gym data | Safe gear marketplace | Community sharing
                </div>
              </div>
              <div className="persona-bio">
                Tim climbs to relieve work pressure with 3 years of experience. He needs efficient partner matching, centralized gym info, and a safe platform for gear trading. Climblink solves his scheduling, community, and gear pain points perfectly.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Journey Map */}
      <section id="user-journey" className="section journey">
        <div className="container">
          <h3 className="section-title"><i className="fa-solid fa-map-location-dot"></i> User Journey Map</h3>
          <p className="section-sub">End-to-end user experience flow from awareness to loyalty</p>
          
          <div className="journey-stages">
            <div className="stage stage-awareness">Awareness</div>
            <div className="stage stage-consideration">Consideration</div>
            <div className="stage stage-acquisition">Acquisition</div>
            <div className="stage stage-service">Service</div>
            <div className="stage stage-loyalty">Loyalty</div>
          </div>
          <div className="journey-steps">
            <div className="step step-awareness">
              <p>Views climbing<br />social media</p>
            </div>
            <div className="step step-awareness">
              <p>clicks communi<br />ty post</p>
            </div>
            <div className="step step-awareness">
              <p>Enters landing<br />page</p>
            </div>
            <div className="step step-consideration">
              <p>Browses<br />ClimbLink features</p>
            </div>
            <div className="step step-consideration">
              <p>Reads user<br />reviews</p>
            </div>
            <div className="step step-acquisition">
              <p>Completes<br />registration</p>
            </div>
            <div className="step step-acquisition">
              <p>finish beginner<br />guidance</p>
            </div>
            <div className="step step-service">
              <p>Gets coach help</p>
            </div>
            <div className="step step-service">
              <p>Matches<br />climbing partners</p>
            </div>
            <div className="step step-service">
              <p>participates<br />in climbing<br />activities</p>
            </div>
            <div className="step step-loyalty">
              <p>share climbing<br />skills</p>
            </div>
            <div className="step step-loyalty">
              <p>leaves 5<br />star review</p>
            </div>
            <div className="step step-loyalty">
              <p>recomme<br />nd to<br />friend</p>
            </div>
          </div>
          <div className="journey-touchpoints">
            <div className="stage-touchpoints awareness">
              <div className="touchpoint tp-awareness">
                <div className="tp-dot"></div>
                <span className="tp-label">Social media</span>
              </div>
              <div className="touchpoint tp-awareness">
                <div className="tp-dot"></div>
                <span className="tp-label">related posts</span>
              </div>
              <div className="touchpoint tp-awareness">
                <div className="tp-dot"></div>
                <span className="tp-label">searching engine</span>
              </div>
              <div className="touchpoint tp-awareness">
                <div className="tp-dot"></div>
                <span className="tp-label">Apps related contents</span>
              </div>
            </div>
            <div className="stage-touchpoints consideration">
              <div className="touchpoint tp-consideration">
                <div className="tp-dot"></div>
                <span className="tp-label">App Landing page</span>
              </div>
              <div className="touchpoint tp-consideration">
                <div className="tp-dot"></div>
                <span className="tp-label">User reviews</span>
              </div>
              <div className="touchpoint tp-consideration">
                <div className="tp-dot"></div>
                <span className="tp-label">App download page</span>
              </div>
            </div>
            <div className="stage-touchpoints acquisition">
              <div className="touchpoint tp-acquisition">
                <div className="tp-dot"></div>
                <span className="tp-label">In-app registration</span>
              </div>
              <div className="touchpoint tp-acquisition">
                <div className="tp-dot"></div>
                <span className="tp-label">beginner guidance</span>
              </div>
            </div>
            <div className="stage-touchpoints service">
              <div className="touchpoint tp-service">
                <div className="tp-dot"></div>
                <span className="tp-label">coach services and courses</span>
              </div>
              <div className="touchpoint tp-service">
                <div className="tp-dot"></div>
                <span className="tp-label">partner matching module</span>
              </div>
              <div className="touchpoint tp-service">
                <div className="tp-dot"></div>
                <span className="tp-label">event module</span>
              </div>
              <div className="touchpoint tp-service">
                <div className="tp-dot"></div>
                <span className="tp-label">record of events</span>
              </div>
            </div>
            <div className="stage-touchpoints loyalty">
              <div className="touchpoint tp-loyalty">
                <div className="tp-dot"></div>
                <span className="tp-label">Forum module</span>
              </div>
              <div className="touchpoint tp-loyalty">
                <div className="tp-dot"></div>
                <span className="tp-label">App review</span>
              </div>
              <div className="touchpoint tp-loyalty">
                <div className="tp-dot"></div>
                <span className="tp-label">Social media</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI References */}
      <section id="references" className="section">
        <div className="container">
          <h3 className="section-title">AI References</h3>
          <p className="section-sub">Tools and AI assistants used in project development</p>
          <ol className="reference-list" style={{ paddingLeft: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <li style={{ marginBottom: '10px' }}>Claude (Anthropic). <em>Claude Sonnet 4.5</em>. Used for generating the website HTML/CSS code structure, layout design, and content organization. Accessed April 2026.</li>
            <li style={{ marginBottom: '10px' }}>Doubao (ByteDance). <em>Doubao Client</em>. Used for generating user persona profile images (Emma Chen and Marcus Li). Accessed April 2026.</li>
          </ol>
        </div>
      </section>
    </>
  );
};

export default Home;
