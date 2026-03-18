import './Legal.css';

function Privacy() {
  return (
    <div className="legal-page">
      <div className="container">
        <div className="page-header">
          <h1 className="gradient-text">Privacy Policy</h1>
          <p>Last updated: March 18, 2026</p>
        </div>

        <div className="legal-content">
          <section className="legal-section">
            <h2>1. Information We Collect</h2>
            <p>
              YouTube Timestamp Generator is committed to protecting your privacy. We collect minimal
              information necessary to provide our service:
            </p>
            <ul>
              <li>YouTube video URLs you input (not stored on our servers)</li>
              <li>Browser type and device information for analytics</li>
              <li>Cookies for site functionality and preferences</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide and improve our timestamp generation service</li>
              <li>Remember your preferences (like dark mode settings)</li>
              <li>Analyze site usage to enhance user experience</li>
              <li>Communicate with you about updates or support</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. Data Storage and Security</h2>
            <p>
              All timestamp generation happens locally in your browser. We do not store your
              video URLs or generated timestamps on our servers. Your data remains private and
              secure on your device.
            </p>
          </section>

          <section className="legal-section">
            <h2>4. Third-Party Services</h2>
            <p>
              Our website may use third-party services such as Google Analytics and Google
              AdSense. These services have their own privacy policies and may collect
              information as described in their respective policies.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Cookies</h2>
            <p>
              We use cookies to store your preferences (such as dark mode settings) and to
              provide analytics. You can disable cookies in your browser settings, though some
              features may not work properly.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access any personal information we hold</li>
              <li>Request deletion of your personal data</li>
              <li>Opt-out of analytics tracking</li>
              <li>Update your preferences at any time</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>7. Children's Privacy</h2>
            <p>
              Our service is not intended for children under 13. We do not knowingly collect
              information from children under 13 years of age.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify users of any
              material changes by posting the new policy on this page with an updated date.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Contact Us</h2>
            <p>
              If you have questions about this privacy policy, please contact us through our{' '}
              <a href="/contact">contact page</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Privacy;
