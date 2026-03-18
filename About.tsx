import './About.css';

function About() {
  return (
    <div className="about-page">
      <div className="container">
        <div className="page-header">
          <h1 className="gradient-text">About Us</h1>
          <p>Your go-to tool for creating professional YouTube timestamps</p>
        </div>

        <div className="about-content">
          <section className="about-section">
            <h2>Our Mission</h2>
            <p>
              We created the YouTube Timestamp Generator to make it easier for content creators
              to add professional chapters to their videos. Our mission is to help creators save
              time and improve their video engagement through better organization.
            </p>
          </section>

          <section className="about-section">
            <h2>Why Timestamps Matter</h2>
            <p>
              YouTube chapters help viewers navigate your content more effectively, leading to:
            </p>
            <ul>
              <li>Better viewer retention and engagement</li>
              <li>Improved SEO and discoverability</li>
              <li>Enhanced user experience</li>
              <li>More professional-looking videos</li>
            </ul>
          </section>

          <section className="about-section">
            <h2>What We Offer</h2>
            <p>
              Our free tool provides instant timestamp generation with automatic formatting,
              video preview, and easy copy/download functionality. We handle all the technical
              details so you can focus on creating great content.
            </p>
          </section>

          <section className="about-section">
            <h2>Contact Us</h2>
            <p>
              Have questions or feedback? We'd love to hear from you! Visit our{' '}
              <a href="/contact">contact page</a> to get in touch.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;
