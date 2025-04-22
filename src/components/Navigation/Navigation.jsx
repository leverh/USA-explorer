import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Navigation.css';

function Navigation() {
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsNavOpen(false);
  }, [location]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isNavOpen]);
  
  const toggleMenu = () => {
    setIsNavOpen(!isNavOpen);
  };
  
  return (
    <nav className="main-nav" aria-label="Main navigation">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="container nav-container">
        <Link to="/" className="nav-logo">USA Explorer</Link>
        
        <button 
          className={`mobile-nav-toggle ${isNavOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <div 
          className={`mobile-nav-overlay ${isNavOpen ? 'open' : ''}`}
          onClick={() => setIsNavOpen(false)}
          aria-hidden="true"
        ></div>
        
        <ul className={`nav-links ${isNavOpen ? 'open' : ''}`}>
          <li>
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={location.pathname === '/about' ? 'active' : ''}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/explore" 
              className={location.pathname === '/explore' ? 'active' : ''}
            >
              Explore
            </Link>
          </li>
          <li>
            <Link 
              to="/travel-diary" 
              className={location.pathname === '/travel-diary' ? 'active' : ''}
            >
              Travel Diary
            </Link>
          </li>
          <li className="theme-toggle-wrapper">
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;