import { useState } from 'react';
import './PhotoItem.css';

function PhotoItem({ image }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  
  return (
    <div className="photo-item">
      <div className={`photo-image-container ${!imageLoaded ? 'loading' : ''}`}>
        <img 
          src={image.url} 
          alt={image.caption} 
          loading="lazy" 
          onLoad={handleImageLoad}
        />
      </div>
      <p className="caption">{image.caption}</p>
      <p className="location">{image.location}</p>
    </div>
  );
}

export default PhotoItem;