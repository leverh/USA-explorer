import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import ScrollTopButton from '../components/ScrollTopButton/ScrollTopButton';
import Modal from '../components/Modal/Modal';
import './TravelDiaryPage.css';

const diaryEntries = [
  {
    id: 1,
    title: "Sunrise at Yosemite Valley",
    date: "June 15, 2019",
    location: "Yosemite National Park, California",
    coverImage: "https://res.cloudinary.com/dybqzflbo/image/upload/f_auto,q_auto/v1745399232/IMG_20191010_155750_yaa5mi.jpg",
    content: "One of the most beautiful places I've ever seen. The sunrise over the valley was breathtaking. I spent the day hiking and exploring the valley, and the views were simply stunning. I can't wait to go back!",
    tags: ["Hiking", "Photography", "Sunrise"]
  },
  {
    id: 2,
    title: "Exploring the Great Smoky Mountains",
    date: "April 5, 2025",
    location: "Great Smoky Mountains National Park, Tennessee",
    coverImage: "https://res.cloudinary.com/dybqzflbo/image/upload/f_auto,q_auto/v1745399856/GreatSmoky_nv4f1e.webp",
    content: "The Great Smoky Mountains are a sight to behold. The lush green forests, the cascading waterfalls, and the abundance of wildlife made for a memorable trip. I highly recommend this park to anyone looking for a peaceful and scenic getaway.",
    tags: ["Wildlife", "Photography", "Hiking"]
  },
  {
    id: 3,
    title: "Lassen Volcanic National Park",
    date: "June 5, 2019",
    location: "Lassen Volcanic National Park, California",
    coverImage: "https://res.cloudinary.com/dybqzflbo/image/upload/f_auto,q_auto/v1745399971/IMG_20191012_160650_vglskk.jpg",
    content: "Lassen Volcanic National Park is a hidden gem. The geothermal features are fascinating, and the hiking trails offer stunning views of the surrounding mountains. I spent hours exploring the park and taking photos of the unique landscapes.",
    tags: ["Hiking", "Photography", "Geothermal"]
  },
  {
    id: 4,
    title: "Birdwatching in Monterey Bay",
    date: "August 12, 2020",
    location: "Monterey Bay, California",
    coverImage: "https://res.cloudinary.com/dybqzflbo/image/upload/f_auto,q_auto/v1745400179/IMG_20191015_111324_y04gdj.jpg",
    content: "Today was all about wildlife! I spent the day birdwatching in Monterey Bay, and it was an incredible experience. The variety of bird species and the stunning views made for a memorable day. I even spotted a few sea otters!",
    tags: ["Wildlife", "Photography", "Birdwatching"]
  },
];

function TravelDiaryPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTag, setSelectedTag] = useState('all');
  const [entries, setEntries] = useState(diaryEntries);
  const [showModal, setShowModal] = useState(false);
  
  // Simulate loading and add fade-in effect
  useEffect(() => {
    const hasSeenDiaryModal = localStorage.getItem('hasSeenDiaryModal');
    
    if (!hasSeenDiaryModal) {
      setShowModal(true);
      localStorage.setItem('hasSeenDiaryModal', 'true');
    }
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Filter entries by tag
  useEffect(() => {
    if (selectedTag === 'all') {
      setEntries(diaryEntries);
    } else {
      const filtered = diaryEntries.filter(entry => 
        entry.tags.includes(selectedTag)
      );
      setEntries(filtered);
    }
  }, [selectedTag]);

  // Get all unique tags
  const allTags = ['all', ...new Set(diaryEntries.flatMap(entry => entry.tags))];
  
  return (
    <>
      <Navigation />
      {isLoading ? (
        <div className="loading-page">
          <LoadingSpinner size="large" />
        </div>
      ) : (
        <main id="main-content" className="travel-diary-page fade-in">
          <header className="diary-header">
            <h1>Travel Diary</h1>
            <p className="diary-subtitle">Chronicles of my adventures through America's natural wonders</p>
          </header>
          
          <section className="diary-filter">
            <div className="tag-container">
              {allTags.map(tag => (
                <button
                  key={tag}
                  className={`tag-button ${selectedTag === tag ? 'active' : ''}`}
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag === 'all' ? 'All Entries' : tag}
                </button>
              ))}
            </div>
          </section>
          
          <section className="diary-entries">
            {entries.length > 0 ? (
              entries.map(entry => (
                <article key={entry.id} className="diary-entry">
                  <div className="entry-image-container">
                    <img src={entry.coverImage} alt={entry.title} />
                    <div className="entry-date">{entry.date}</div>
                  </div>
                  
                  <div className="entry-content">
                    <div className="entry-location">{entry.location}</div>
                    <h2>{entry.title}</h2>
                    <p>{entry.content}</p>
                    
                    <div className="entry-tags">
                      {entry.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="entry-tag"
                          onClick={() => setSelectedTag(tag)}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <button className="read-more-button">Read Full Entry</button>
                  </div>
                </article>
              ))
            ) : (
              <div className="no-entries">
                <h2>No entries found</h2>
                <p>No diary entries match the selected filter.</p>
                <button 
                  className="reset-button"
                  onClick={() => setSelectedTag('all')}
                >
                  View All Entries
                </button>
              </div>
            )}
          </section>
          
          <section className="travel-highlights">
            <h2>Trip Highlights</h2>
            <div className="highlights-grid">
              <div className="highlight-card">
                <div className="highlight-icon">🏔️</div>
                <h3>15 National Parks</h3>
                <p>Explored across the country</p>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon">🥾</div>
                <h3>120 Miles</h3>
                <p>Hiked on scenic trails</p>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon">📸</div>
                <h3>2,500+ Photos</h3>
                <p>Captured along the journey</p>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon">🦌</div>
                <h3>40 Wildlife Species</h3>
                <p>Encountered in their habitat</p>
              </div>
            </div>
          </section>
          
          <section className="upcoming-trips">
            <h2>Upcoming Adventures</h2>
            <div className="upcoming-container">
              <div className="upcoming-trip">
                <div className="trip-season">Spring 2025</div>
                <h3>Great Smoky Mountains</h3>
                <p>Planning a two-week exploration of America's most visited national park during wildflower season.</p>
              </div>
              <div className="upcoming-trip">
                <div className="trip-season">Summer 2025</div>
                <h3>Alaska Wilderness</h3>
                <p>A month-long adventure through Denali, Kenai Fjords, and Katmai National Parks.</p>
              </div>
              <div className="upcoming-trip">
                <div className="trip-season">Fall 2025</div>
                <h3>New England Colors</h3>
                <p>Capturing the famous autumn foliage in Acadia National Park and the surrounding region.</p>
              </div>
            </div>
          </section>
          <Modal 
            isOpen={showModal} 
            onClose={() => setShowModal(false)} 
            title="Demo Content"
          >
            <p>This Travel Diary page is a demonstration of what could be achieved with a travel blog. The journal entries shown here are examples only and do not represent my actual travels.</p>
            <p>Only the Homepage contains my authentic travel experiences and photos. This page showcases the potential format and features for documenting travel stories.</p>
          </Modal>
        </main>
      )}
      <Footer />
      <ScrollTopButton />
    </>
  );
}

export default TravelDiaryPage;