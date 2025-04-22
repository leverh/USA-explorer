import { useState, useEffect } from 'react';
import './ThemeToggle.css';

function ThemeToggle() {
  // Check for saved preference or system preference
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    
    // Check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };
  
  const [theme, setTheme] = useState(getInitialTheme);
  
  // Apply theme class to body
  useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };
  
  return (
    <button 
      className="theme-toggle" 
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3C10.8065 3 9.66193 3.35189 8.7402 4.01118C7.81847 4.67047 7.16337 5.60754 6.88351 6.67237C6.60366 7.7372 6.71339 8.85788 7.19483 9.85307C7.67626 10.8483 8.50112 11.6514 9.52512 12.1057C10.5491 12.5601 11.7022 12.6389 12.7804 12.3297C13.8586 12.0206 14.799 11.3407 15.4538 10.3978C16.1087 9.45496 16.4483 8.29571 16.4225 7.10979C16.3967 5.92387 15.9975 4.78039 15.2929 3.87868" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19 12H21M3 12H5M12 19V21M12 3V5M18.4 18.4L17 17M6 6L4.6 4.6M18.4 5.6L17 7M4.6 19.4L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </button>
  );
}

export default ThemeToggle;