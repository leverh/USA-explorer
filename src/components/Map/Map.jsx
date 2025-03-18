import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Link } from 'react-router-dom'
import 'leaflet/dist/leaflet.css'
import './Map.css'

// Leaflet default icon fix
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
})
L.Marker.prototype.options.icon = DefaultIcon

function Map({ parks }) {
  return (
    <div className="map-container">
      <MapContainer 
        center={[39.8283, -98.5795]} // Center of US
        zoom={4} 
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {parks.map(park => (
          <Marker 
            key={park.id} 
            position={[park.latitude, park.longitude]}
          >
            <Popup>
              <h3>{park.name}</h3>
              <img 
                src={park.thumbnailUrl} 
                alt={park.name} 
                style={{ width: '100%', maxHeight: '100px', objectFit: 'cover' }} 
              />
              <p>{park.shortDescription}</p>
              <Link to={`/park/${park.id}`}>View Details</Link>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

export default Map