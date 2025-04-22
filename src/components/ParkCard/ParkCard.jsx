import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ParkCard.css';

function ParkCard({ park }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  
  return (
    <article className="park-card">
      <div className={`card-image-container ${!imageLoaded ? 'loading' : ''}`}>
        <img 
          src={park.thumbnailUrl} 
          alt={`Landscape of ${park.name}`} 
          loading="lazy" 
          onLoad={handleImageLoad}
        />
        <span className="park-state badge">{park.state}</span>
      </div>
      <div className="card-content">
        <h3>{park.name}</h3>
        <p>{park.shortDescription}</p>
      </div>
      <div className="card-footer">
        <Link to={`/park/${park.id}`} className="explore-button">Explore</Link>
      </div>
    </article>
  );
}

export default ParkCard;