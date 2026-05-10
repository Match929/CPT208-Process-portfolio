import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import TargetCursor from './components/TargetCursor';

function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const NavItem = ({ id, children }) => {
    if (isHome) {
      return (
        <a 
          href={`#${id}`} 
          className="cursor-target" 
          onClick={(e) => {
            e.preventDefault();
            handleScrollTo(id);
          }}
        >
          {children}
        </a>
      );
    } else {
      return (
        <Link to="/" className="cursor-target">
          {children}
        </Link>
      );
    }
  };

  return (
    <div className="App">
      <TargetCursor targetSelector=".cursor-target" />
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="navbar">
            <Link to="/" className="logo cursor-target">Climblink</Link>
            <nav className="nav">
              <NavItem id="about">About</NavItem>
              <NavItem id="team">Team</NavItem>
              <NavItem id="features">Features</NavItem>
              <NavItem id="user-persona">Users</NavItem>
              <NavItem id="user-journey">Journey</NavItem>
              
              {/* Dropdown Menu */}
              <div 
                className="dropdown" 
                onMouseEnter={() => setIsDropdownOpen(true)} 
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <span className="dropdown-toggle cursor-target" style={{ cursor: 'pointer' }}>
                  Principles & Guide <i className="fas fa-chevron-down" style={{ fontSize: '12px', marginLeft: '5px' }}></i>
                </span>
                <div className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
                  <Link to="/prototype" className="dropdown-item cursor-target">Prototype Iteration & Design Thinking</Link>
                  <Link to="/uted" className="dropdown-item cursor-target">UT & ED</Link>
                  <Link to="/smartpartner" className="dropdown-item cursor-target">SmartPartner Algorithm</Link>
                  <Link to="/usermanual" className="dropdown-item cursor-target">User Manual</Link>
                </div>
              </div>
              
              <NavItem id="references">References</NavItem>
            </nav>
          </div>
        </div>
      </header>
      
      {/* 路由内容 */}
      <Outlet />
      
      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2026 Climblink • CPT208 Group C2-2</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
