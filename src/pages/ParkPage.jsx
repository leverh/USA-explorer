import { useParams, Link } from 'react-router-dom'
import { parks } from '../data/parks'
import * as Tabs from '@radix-ui/react-tabs'
import './ParkPage.css'

function ParkPage() {
  const { parkId } = useParams()
  const park = parks.find(p => p.id === parkId)
  
  if (!park) {
    return <div className="not-found">Park not found</div>
  }
  
  return (
    <div className="park-page">
      <div className="park-header">
        <h1>{park.name}</h1>
        <span className="park-location">{park.state}</span>
      </div>
      
      <div className="back-link">
        <Link to="/">← Back to all parks</Link>
      </div>
      
      <div className="featured-image">
        <img src={park.images[0]?.url} alt={park.name} />
      </div>
      
      <Tabs.Root defaultValue="about">
        <Tabs.List className="tabs-list">
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
              <div key={index} className="photo-item">
                <img src={image.url} alt={image.caption} />
                <p className="caption">{image.caption}</p>
                <p className="location">{image.location}</p>
              </div>
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
          <p>{park.personalNotes}</p>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  )
}

export default ParkPage