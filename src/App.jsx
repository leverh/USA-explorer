import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ParkPage from './pages/ParkPage';
import AboutPage from './pages/AboutPage';
import ExplorePage from './pages/ExplorePage';
import TravelDiaryPage from './pages/TravelDiaryPage';
import NotFoundPage from './pages/NotFoundPage';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/park/:parkId" element={<ParkPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/travel-diary" element={<TravelDiaryPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;