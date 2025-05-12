import { useState, useEffect, document  } from 'react';
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
  document.title = `${park?.name} | USA Explorer`;
  document.meta.add({ name: "description", content: `Explore ${park?.name} in ${park?.state}. View photos, wildlife information, and personal experiences from this beautiful park.` });
  document.meta.add({ name: "keywords", content: `${park?.name}, ${park?.state} parks, hiking, wildlife, outdoor adventures` });
  document.meta.add({ property: "og:title", content: `${park?.name} | USA Explorer` });
  document.meta.add({ property: "og:description", content: `Explore ${park?.name} in ${park?.state}. Personal stories and photos from this beautiful American park.` });
  document.meta.add({ property: "og:type", content: "article" });
  document.meta.add({ property: "og:url", content: `https://flourishing-treacle-e276f2.netlify.app/park/${parkId}` });
  document.meta.add({ property: "og:image", content: park?.thumbnailUrl || park?.images[0]?.url });
  document.link.add({ rel: "canonical", href: `https://flourishing-treacle-e276f2.netlify.app/park/${parkId}` });

  if (park) {
    document.script.add({
      type: "application/ld+json",
      content: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "TouristAttraction",
        "name": park.name,
        "description": park.description,
        "address": {
          "@type": "PostalAddress",
          "addressRegion": park.state,
          "addressCountry": "US"
        },
        "image": park.images.map(img => img.url)
      })
    });
  }
 
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

  // Choose the thumbnail or first image as featured image
  const featuredImage = park.thumbnailUrl || park.images[0]?.url;
 
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
            src={featuredImage}
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
              {/* Only show images that aren't the featured image */}
              {park.images
                .filter(image => image.url !== featuredImage)
                .map((image, index) => (
                  <PhotoItem key={index} image={image} />
                ))
              }
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