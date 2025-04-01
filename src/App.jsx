import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ParkPage from './pages/ParkPage'
import Navigation from './components/Navigation/Navigation'
import './styles/App.css'

function App() {
  return (
    <div className="app">
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/park/:parkId" element={<ParkPage />} />
        </Routes>
      </main>
      <footer>
        <p>© {new Date().getFullYear()} - USA Explorer</p>
        <p className="credit">
          Made by <a href="https://pixelsummit.dev/">PixelSummit</a>
       </p>
      </footer>
    </div>
  )
}

export default App