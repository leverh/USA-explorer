import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as Tabs from '@radix-ui/react-tabs';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import ScrollTopButton from '../components/ScrollTopButton/ScrollTopButton';
import PhotoItem from '../components/PhotoItem/PhotoItem';
import { parks } from '../data/parks';
import './ParkPage.css';

function ParkPage() {
  const { parkId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('about');
  
  const park = parks.find(p => p.id === parkId);
  
  // Simulate loading and add fade-in effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Scroll to top when park changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [parkId]);
  
  if (!park) {
    return (
      <>
        <Navigation />
        <div className="not-found">
          <h2>Park Not Found</h2>
          <p>Sorry, we couldn't find the park you're looking for.</p>
          <Link to="/" className="btn">Return to Home</Link>
        </div>
      </>
    );
  }
  
  return (
    <>
      <Navigation />
      {isLoading ? (
        <div className="loading-page">
          <LoadingSpinner size="large" />
        </div>
      ) : (
        <main id="main-content" className="park-page fade-in">
        <div className="back-link">
          <Link to="/">Back to all parks</Link>
        </div>
        
        <header className="park-header">
          <h1>{park.name}</h1>
          <span className="park-location">{park.state}</span>
        </header>
        
        <div className="featured-image">
          <img 
            src={park.images[0]?.url} 
            alt={`Featured landscape of ${park.name}`} 
          />
        </div>
        
        <Tabs.Root 
          defaultValue="about"
          value={activeTab}
          onValueChange={(value) => setActiveTab(value)}
        >
          <Tabs.List className="tabs-list" aria-label="Park information">
            <Tabs.Trigger value="about">About</Tabs.Trigger>
            <Tabs.Trigger value="photos">Photos</Tabs.Trigger>
            <Tabs.Trigger value="wildlife">Wildlife</Tabs.Trigger>
            <Tabs.Trigger value="notes">My Notes</Tabs.Trigger>
          </Tabs.List>
          
          <Tabs.Content value="about" className="tab-content">
            <h2>About {park.name}</h2>
            <p><strong>Established:</strong> {park.established}</p>
            <p>{park.description}</p>
            <p><strong>Best time to visit:</strong> {park.bestTimeToVisit}</p>
          </Tabs.Content>
          
          <Tabs.Content value="photos" className="tab-content">
            <h2>Photo Gallery</h2>
            <div className="photo-grid">
              {park.images.map((image, index) => (
                <PhotoItem key={index} image={image} />
              ))}
            </div>
          </Tabs.Content>
          
          <Tabs.Content value="wildlife" className="tab-content">
            <h2>Wildlife I Spotted</h2>
            <ul className="wildlife-list">
              {park.wildlife.map((animal, index) => (
                <li key={index}>{animal}</li>
              ))}
            </ul>
          </Tabs.Content>
          
          <Tabs.Content value="notes" className="tab-content">
            <h2>My Personal Experience</h2>
            <div className="personal-notes">
              <p>{park.personalNotes}</p>
            </div>
          </Tabs.Content>
        </Tabs.Root>
      </main>
      )}
      <Footer />
      <ScrollTopButton />
    </>
  );
}

export default ParkPage;