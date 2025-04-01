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
          >
            <option value="all">All States</option>
            {states.map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </div>
      </div>
     
      <section className="map-section">
        <Map parks={filteredParks} />
      </section>
     
      <section className="parks-container">
        <div className="parks-grid">
          {filteredParks.map(park => (
            <article key={park.id} className="park-card">
              <div className="card-image-container">
                <img src={park.thumbnailUrl} alt={park.name} />
              </div>
              <div className="card-content">
                <h2>{park.name}</h2>
                <p>{park.shortDescription}</p>
              </div>
              <div className="card-footer">
                <a href={`/park/${park.id}`} className="explore-button">Explore</a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default HomePage