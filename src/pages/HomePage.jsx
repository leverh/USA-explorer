import { useState } from 'react'
import Map from '../components/Map/Map'
import { parks } from '../data/parks'
import './HomePage.css'

function HomePage() {
  const [filter, setFilter] = useState('all')
  
  const filteredParks = filter === 'all' 
    ? parks 
    : parks.filter(park => park.state === filter)
    
  const states = [...new Set(parks.map(park => park.state))].sort()
  
  return (
    <div className="home-page">
      <div className="hero">
        <h1>USA Explorer</h1>
        <p>Explore the beauty of America's national parks, wonderous cities, and nature, through my personal journey</p>
      </div>
      
      <div className="filters">
        <label>
          Filter by state:
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All States</option>
            {states.map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </label>
      </div>
      
      <div className="map-section">
        <Map parks={filteredParks} />
      </div>
      
      <div className="parks-grid">
        {filteredParks.map(park => (
          <div key={park.id} className="park-card">
            <img src={park.thumbnailUrl} alt={park.name} />
            <h2>{park.name}</h2>
            <p>{park.shortDescription}</p>
            <a href={`/park/${park.id}`}>Explore</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomePage