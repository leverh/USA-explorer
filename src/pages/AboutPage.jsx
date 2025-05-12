import { useState, useEffect, document  } from 'react';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import ScrollTopButton from '../components/ScrollTopButton/ScrollTopButton';
import './AboutPage.css';

function AboutPage() {
  const [isLoading, setIsLoading] = useState(true);
  
  // Simulate loading and add fade-in effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  document.title = "About USA Explorer | My Journey Through America's Natural Wonders";
  document.meta.add({ name: "description", content: "Learn about my personal journey exploring America's national parks, forests, and natural landscapes over the past 7 years." });
  document.meta.add({ name: "keywords", content: "travel stories, national park experiences, USA travel, outdoor adventures" });
  document.meta.add({ property: "og:title", content: "About USA Explorer | My Journey" });
  document.meta.add({ property: "og:description", content: "Learn about my 7-year journey exploring America's parks and natural landscapes." });
  document.meta.add({ property: "og:type", content: "profile" });
  document.meta.add({ property: "og:url", content: "https://flourishing-treacle-e276f2.netlify.app/about" });
  document.meta.add({ 
  property: "og:image", 
  content: "https://res.cloudinary.com/dybqzflbo/image/upload/f_auto,q_auto/v1741249524/media/images/chanel1_tg0bos.jpg" 
  });
  document.link.add({ rel: "canonical", href: "https://flourishing-treacle-e276f2.netlify.app/about" });
  
  return (
    <>
      <Navigation />
      {isLoading ? (
        <div className="loading-page">
          <LoadingSpinner size="large" />
        </div>
      ) : (
        <main id="main-content" className="about-page fade-in">
          <header className="about-header">
            <h1>About USA Explorer</h1>
            <div className="about-subtitle">My journey through America's natural wonders</div>
          </header>
          
          <section className="about-section">
            <div className="about-image-container">
              <img 
                src="https://res.cloudinary.com/dybqzflbo/image/upload/f_auto,q_auto/v1741249524/media/images/chanel1_tg0bos.jpg" 
                alt="Profile photo" 
                className="profile-image"
              />
            </div>
            
            <div className="about-content">
              <h2>Who I Am</h2>
              <p>
              I’ve spent most of my life in cities, surrounded by noise, structure, and speed. But in recent years, I’ve felt an increasing pull toward what lies beyond the pavement—forests, rivers, mountain peaks, and the wildlife that calls them home. Nature recharges me in a way nothing else does.
              </p>
              <p>
              What I love most about traveling in the U.S. is the sheer vastness—something you just can’t find in Europe. Out there, you can go days without crossing paths with another soul, completely immersed in nature and solitude. And yet, when you’re ready, civilization is never too far away. There’s always the option to return to a cozy, clean hotel bed at the end of a long, wild day.
              </p>
            </div>
          </section>
          
          <section className="about-section reverse">
            <div className="about-image-container">
              <img 
                src="https://res.cloudinary.com/dybqzflbo/image/upload/f_auto,q_auto/v1745331308/IMG_20191012_153734-EFFECTS_l1hboo.jpg" 
                alt="Journey photo" 
                className="journey-image"
              />
            </div>
            
            <div className="about-content">
              <h2>My Journey</h2>
              <p>
              I came to national parks later in life—right after I got my driver’s license and rented a car for the first time. That trip took me to Shenandoah National Park, and it changed everything. Since then, I’ve learned that the beauty of the outdoors isn’t limited to national parks. State parks, national forests, quiet peaks, and hidden trails have all become part of the journey—and just as breathtaking in their own way.
              </p>
              <p>
              Since that first trip, I’ve learned how to let go of rigid plans and embrace the freedom of spontaneity. Some of my favorite moments have come from not knowing exactly where I’d end up that night—following the road, a gut feeling, or a trailhead sign that caught my eye.
              </p>
            </div>
          </section>
          
          <section className="about-section full-width">
            <div className="about-content centered">
              <h2>Why This Website</h2>
              <p>
              First and foremost, I created this site as a way to document my travels—for myself more than anyone else. It’s a space to collect the places I’ve been, the things I’ve seen, and the trails I’ve followed.
              </p>
              <p>
              Second, I’m a web developer, and this was the perfect excuse to build something personal and creative—while also adding a project to my portfolio.
              </p>
              <p>
              And third? Honestly, why not.
              </p>
            </div>
          </section>
          
          
          <section className="about-facts">
            <h2>Quick Facts</h2>
            <div className="facts-grid">
              <div className="fact-card">
                <div className="fact-number">57</div>
                <div className="fact-label">Parks Visited</div>
              </div>
              <div className="fact-card">
                <div className="fact-number">25</div>
                <div className="fact-label">States Explored</div>
              </div>
              <div className="fact-card">
                <div className="fact-number">25,000</div>
                <div className="fact-label">Miles Traveled</div>
              </div>
              <div className="fact-card">
                <div className="fact-number">7</div>
                <div className="fact-label">Years Exploring</div>
              </div>
            </div>
          </section>
          
          <section className="contact-section">
            <h2>Get In Touch</h2>
            <p>
              Have questions about my travels or want to share your own park experiences? 
              I'd love to hear from you!
            </p>
            <a href="mailto:contact@pixelsummit.dev" className="contact-button">
              Send me a message
            </a>
          </section>
        </main>
      )}
      <Footer />
      <ScrollTopButton />
    </>
  );
}

export default AboutPage;