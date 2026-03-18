import './AdBanner.css';

interface AdBannerProps {
  position: 'top' | 'middle' | 'bottom';
}

function AdBanner({ position }: AdBannerProps) {
  return (
    <div className={`ad-banner ad-${position}`}>
      <div className="container">
        <div className="ad-placeholder">
          <p>Advertisement</p>
          <span>Google AdSense Placement - {position}</span>
        </div>
      </div>
    </div>
  );
}

export default AdBanner;
