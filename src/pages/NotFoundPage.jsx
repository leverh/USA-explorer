import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import './NotFoundPage.css';

function NotFoundPage() {
  return (
    <>
      <Navigation />
      <main className="not-found-page">
        <div className="not-found-container">
          <div className="not-found-code">404</div>
          <h1>Oops! Trail Not Found</h1>
          <p>
            Looks like you've wandered off the beaten path. 
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="not-found-suggestions">
            <h2>Why not explore:</h2>
            <div className="suggestion-links">
              <Link to="/" className="suggestion-link">
                <span className="suggestion-icon">🏠</span>
                <span>Home Page</span>
              </Link>
              <Link to="/explore" className="suggestion-link">
                <span className="suggestion-icon">🗺️</span>
                <span>Explore Parks</span>
              </Link>
              <Link to="/travel-diary" className="suggestion-link">
                <span className="suggestion-icon">📔</span>
                <span>Travel Diary</span>
              </Link>
            </div>
          </div>
          <Link to="/" className="back-home-button">
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default NotFoundPage;