import TimestampGenerator from '../components/TimestampGenerator';
import AdBanner from '../components/AdBanner';
import ProUpgrade from '../components/ProUpgrade';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <AdBanner position="top" />

      <section className="hero">
        <div className="container">
          <h1 className="hero-title">
            <span className="gradient-text">YouTube Timestamp Generator</span>
          </h1>
          <p className="hero-subtitle">
            Create professional YouTube chapters instantly. Automatically format timestamps for better video organization and SEO.
          </p>
        </div>
      </section>

      <section className="main-tool">
        <div className="container">
          <TimestampGenerator />
        </div>
      </section>

      <AdBanner position="middle" />

      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Use Our Timestamp Generator?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Lightning Fast</h3>
              <p>Generate YouTube chapters in seconds. Paste your video URL, add timestamps, and you're done!</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Auto Format</h3>
              <p>Automatically converts seconds to YouTube's timestamp format (00:00, 01:30, 10:05)</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Mobile Ready</h3>
              <p>Works perfectly on all devices. Generate timestamps on desktop, tablet, or mobile.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📋</div>
              <h3>One-Click Copy</h3>
              <p>Copy formatted timestamps instantly to your clipboard or download as a text file.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👁️</div>
              <h3>Video Preview</h3>
              <p>See your video thumbnail to confirm you're working with the right content.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">✅</div>
              <h3>Validation</h3>
              <p>Smart validation ensures your timestamps are properly formatted for YouTube.</p>
            </div>
          </div>
        </div>
      </section>

      <ProUpgrade />

      <section className="how-it-works">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Paste Video URL</h3>
              <p>Copy your YouTube video URL and paste it into the input field.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Add Timestamps</h3>
              <p>Enter timestamps in seconds with descriptions, one per line.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Generate & Copy</h3>
              <p>Click generate to format timestamps, then copy or download them.</p>
            </div>
          </div>
        </div>
      </section>

      <AdBanner position="bottom" />
    </div>
  );
}

export default Home;
