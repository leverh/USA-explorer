import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import ScrollTopButton from '../components/ScrollTopButton/ScrollTopButton';
import Modal from '../components/Modal/Modal';
import Map from '../components/Map/Map';
import { parks } from '../data/parks';
import './ExplorePage.css';

function ExplorePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeRegion, setActiveRegion] = useState('all');
  const [activeActivity, setActiveActivity] = useState('all');
  const [displayType, setDisplayType] = useState('map');
  const [showModal, setShowModal] = useState(false);
  
  // Simulate loading and add fade-in effect
  useEffect(() => {
    const hasSeenExploreModal = localStorage.getItem('hasSeenExploreModal');
    
    if (!hasSeenExploreModal) {
      setShowModal(true);
      localStorage.setItem('hasSeenExploreModal', 'true');
    }
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Filter parks based on selected region and activity
  const filteredParks = parks.filter(park => {
    const matchesRegion = activeRegion === 'all' || park.region === activeRegion;
    const matchesActivity = activeActivity === 'all' || 
      (park.activities && park.activities.includes(activeActivity));
    return matchesRegion && matchesActivity;
  });

  // Extract unique regions and activities for filters
  const regions = ['West', 'Midwest', 'Northeast', 'Southeast', 'Southwest'];
  const activities = ['Hiking', 'Wildlife Viewing', 'Photography', 'Camping', 'Boating', 'Fishing'];
  
  return (
    <>
    <Helmet>
        <title>Explore Parks by Region & Activity | USA Explorer</title>
        <meta name="description" content="Discover America's national parks and natural wonders filtered by region, activity, and features. Interactive map and list views available." />
        <meta name="keywords" content="explore US parks, national park activities, US regions, park map, wildlife viewing, hiking trails" />
        <link rel="canonical" href="https://flourishing-treacle-e276f2.netlify.app/explore" />
        <meta property="og:title" content="Explore America's Parks | USA Explorer" />
        <meta property="og:description" content="Interactive tools to discover national parks by region, activity and features. Find your next outdoor adventure." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://flourishing-treacle-e276f2.netlify.app/explore" />
        <meta property="og:image" content="https://res.cloudinary.com/dybqzflbo/image/upload/f_auto,q_auto/v1745313000/IMG_20221119_130356215_HDR_agsuqb.jpg" />
        <link rel="preconnect" href="https://res.cloudinary.com" />
      </Helmet>
      <Navigation />
      {isLoading ? (
        <div className="loading-page">
          <LoadingSpinner size="large" />
        </div>
      ) : (
        <main id="main-content" className="explore-page fade-in">
          <header className="explore-header">
            <h1>Explore America's Beauty</h1>
            <p className="explore-subtitle">Discover national parks and natural wonders by region, activity, or features</p>
          </header>
          
          <section className="explore-controls">
            <div className="filter-container">
              <div className="filter-group">
                <label htmlFor="region-filter">Region</label>
                <select 
                  id="region-filter" 
                  value={activeRegion}
                  onChange={(e) => setActiveRegion(e.target.value)}
                >
                  <option value="all">All Regions</option>
                  {regions.map(region => (
                    <option key={region} value={region}>{region}</option>
                  ))}
                </select>
              </div>
              
              <div className="filter-group">
                <label htmlFor="activity-filter">Activity</label>
                <select 
                  id="activity-filter" 
                  value={activeActivity}
                  onChange={(e) => setActiveActivity(e.target.value)}
                >
                  <option value="all">All Activities</option>
                  {activities.map(activity => (
                    <option key={activity} value={activity}>{activity}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="view-toggle">
              <button 
                className={`view-button ${displayType === 'map' ? 'active' : ''}`}
                onClick={() => setDisplayType('map')}
                aria-label="View as map"
              >
                Map View
              </button>
              <button 
                className={`view-button ${displayType === 'list' ? 'active' : ''}`}
                onClick={() => setDisplayType('list')}
                aria-label="View as list"
              >
                List View
              </button>
            </div>
          </section>
          
          {displayType === 'map' ? (
            <section className="explore-map-container">
              <Map parks={filteredParks} />
            </section>
          ) : (
            <section className="explore-list-container">
              <div className="explore-grid">
                {filteredParks.length > 0 ? (
                  filteredParks.map(park => (
                    <div key={park.id} className="explore-card">
                      <div className="explore-card-image">
                        <img src={park.thumbnailUrl} alt={`Landscape of ${park.name}`} />
                        <span className="explore-card-region">{park.state}</span>
                      </div>
                      <div className="explore-card-content">
                        <h2>{park.name}</h2>
                        <p>{park.shortDescription}</p>
                        <div className="explore-card-activities">
                          {park.activities && park.activities.map(activity => (
                            <span key={activity} className="activity-tag">{activity}</span>
                          ))}
                        </div>
                        <a href={`/park/${park.id}`} className="explore-card-link">View Details</a>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="no-results">
                    <h2>No parks found</h2>
                    <p>Try adjusting your filters to see more results.</p>
                    <button 
                      className="reset-button"
                      onClick={() => {
                        setActiveRegion('all');
                        setActiveActivity('all');
                      }}
                    >
                      Reset Filters
                    </button>
                  </div>
                )}
              </div>
            </section>
          )}
          
          <section className="featured-collections">
            <h2>Featured Collections</h2>
            <div className="collections-grid">
              <div className="collection-card">
                <img src="https://res.cloudinary.com/dybqzflbo/image/upload/f_auto,q_auto/v1745313000/IMG_20221119_130356215_HDR_agsuqb.jpg" alt="Waterfall" />
                <div className="collection-overlay">
                  <h3>Spectacular Waterfalls</h3>
                  <p>Discover America's most breathtaking cascades</p>
                </div>
              </div>
              <div className="collection-card">
                <img src="https://res.cloudinary.com/dybqzflbo/image/upload/f_auto,q_auto/v1745399232/IMG_20221118_125459444_nppdtm.jpg" alt="Mountains" />
                <div className="collection-overlay">
                  <h3>Majestic Mountains</h3>
                  <p>Explore stunning peaks and mountain ranges</p>
                </div>
              </div>
              <div className="collection-card">
                <img src="https://res.cloudinary.com/dybqzflbo/image/upload/f_auto,q_auto/v1745311921/IMG_20221118_132613485_HDR_fuzr9c.jpg" alt="Wildlife" />
                <div className="collection-overlay">
                  <h3>Wildlife Encounters</h3>
                  <p>Parks known for amazing animal sightings</p>
                </div>
              </div>
              <div className="collection-card">
                <img src="https://res.cloudinary.com/dybqzflbo/image/upload/f_auto,q_auto/v1745399230/IMG_20191012_104030_xeqjrn.jpg" alt="Hidden Gem" />
                <div className="collection-overlay">
                  <h3>Hidden Gems</h3>
                  <p>Lesser-known parks worth exploring</p>
                </div>
              </div>
            </div>
          </section>
          <Modal 
            isOpen={showModal} 
            onClose={() => setShowModal(false)} 
            title="Demo Content"
          >
            <p>This Explore page is a demonstration of what could be achieved with this website. The content shown here is for example purposes only.</p>
            <p>Only the Homepage contains my actual travel experiences and photos. The interactive map and filtering features showcase the potential functionality for a complete travel blog.</p>
          </Modal>
        </main>
      )}
      <Footer />
      <ScrollTopButton />
    </>
  );
}

export default ExplorePage;