import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ParkPage from './pages/ParkPage';
import AboutPage from './pages/AboutPage';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/park/:parkId" element={<ParkPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;