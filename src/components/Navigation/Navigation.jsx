import { Link } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  return (
    <nav className="main-nav">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Parks Explorer
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <a href="https://www.nps.gov/" target="_blank" rel="noopener noreferrer" className="nav-link">Official NPS</a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation