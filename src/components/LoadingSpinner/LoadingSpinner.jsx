import './LoadingSpinner.css';

function LoadingSpinner({ size = 'medium' }) {
  return (
    <div className={`loading-spinner-container ${size}`}>
      <div className="loading-spinner" aria-label="Loading content">
        <div className="spinner-circle"></div>
        <div className="spinner-circle"></div>
        <div className="spinner-circle"></div>
      </div>
    </div>
  );
}

export default LoadingSpinner;