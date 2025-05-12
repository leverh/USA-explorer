import { useState, useEffect, document  } from 'react';
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

  document.title = "USA Explorer | Journey Through America's National Parks";
  document.meta.add({ name: "description", content: "Explore America's national parks, cities, and natural wonders through a personal journey of discovery and adventure." });
  document.meta.add({ name: "keywords", content: "national parks, USA travel, hiking, nature photography, American wilderness" });
  document.meta.add({ property: "og:title", content: "USA Explorer | America's Natural Wonders" });
  document.meta.add({ property: "og:description", content: "Explore America's national parks and natural beauty through a personal journey." });
  document.meta.add({ property: "og:type", content: "website" });
  document.meta.add({ property: "og:url", content: "https://flourishing-treacle-e276f2.netlify.app/" });
  document.meta.add({ 
  property: "og:image", 
  content: "https://res.cloudinary.com/dybqzflbo/image/upload/f_auto,q_auto/v1745331308/IMG_20191012_153734-EFFECTS_l1hboo.jpg" 
});
  document.link.add({ rel: "canonical", href: "https://flourishing-treacle-e276f2.netlify.app/" });

  
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