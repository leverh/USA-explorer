import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Map from '../components/Map/Map';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import ScrollTopButton from '../components/ScrollTopButton/ScrollTopButton';
import ParkCard from '../components/ParkCard/ParkCard';
import { parks } from '../data/parks';
import './HomePage.css';

function HomePage() {
  const [filter, setFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  
  // Simulate loading and add fade-in effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  const filteredParks = filter === 'all'
    ? parks
    : parks.filter(park => park.state === filter);
    
  const states = [...new Set(parks.map(park => park.state))].sort();
  
  return (
    <>
      <Navigation />
      {isLoading ? (
        <div className="loading-page">
          <LoadingSpinner size="large" />
        </div>
      ) : (
        <main id="main-content" className="home-page fade-in">
        <header className="hero">
          <h1>USA Explorer</h1>
          <p>Explore the beauty of America's national parks, wonderous cities, and nature, through my personal journey</p>
        </header>
        
        <div className="controls-container">
          <div className="filters">
            <label htmlFor="state-filter">Filter by state:</label>
            <select
              id="state-filter"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              aria-label="Filter parks by state"
            >
              <option value="all">All States</option>
              {states.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>
        </div>
        
        <section className="map-section" aria-label="Interactive map of parks">
          <Map parks={filteredParks} />
        </section>
        
        <section className="parks-container">
          <h2 className="visually-hidden">National Parks</h2>
          <div className="parks-grid">
            {filteredParks.length > 0 ? (
              filteredParks.map(park => (
                <ParkCard key={park.id} park={park} />
              ))
            ) : (
              <div className="no-results">
                <p>No parks found for the selected filter.</p>
                <button 
                  className="btn" 
                  onClick={() => setFilter('all')}
                >
                  View All Parks
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      )}
      <Footer />
      <ScrollTopButton />
    </>
  );
}

export default HomePage;