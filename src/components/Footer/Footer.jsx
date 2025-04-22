import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-section">
          <h2 className="footer-heading">USA Explorer</h2>
          <p>Your guide to exploring America's most beautiful natural wonders through my personal journey.</p>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/explore">Explore</Link></li>
            <li><Link to="/travel-diary">Travel Diary</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-heading">Connect</h3>
          <ul className="social-links">
            <li><a href="#" aria-label="Instagram">Instagram</a></li>
            <li><a href="#" aria-label="Twitter">Twitter</a></li>
            <li><a href="#" aria-label="Pinterest">Pinterest</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} USA Explorer. All rights reserved.</p>
          <p className="portfolio-credit">
            Designed & Developed by <a href="https://pixelsummit.dev/" target="_blank" rel="noopener noreferrer">PixelSummit</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;