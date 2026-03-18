import './Legal.css';

function Terms() {
  return (
    <div className="legal-page">
      <div className="container">
        <div className="page-header">
          <h1 className="gradient-text">Terms & Conditions</h1>
          <p>Last updated: March 18, 2026</p>
        </div>

        <div className="legal-content">
          <section className="legal-section">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using YouTube Timestamp Generator, you accept and agree to be bound
              by the terms and conditions of this agreement. If you do not agree to these terms,
              please do not use our service.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Use License</h2>
            <p>
              Permission is granted to use YouTube Timestamp Generator for personal and commercial
              purposes. You may:
            </p>
            <ul>
              <li>Generate timestamps for your YouTube videos</li>
              <li>Copy and download generated timestamps</li>
              <li>Use the service for multiple videos</li>
            </ul>
            <p>You may not:</p>
            <ul>
              <li>Reverse engineer or copy the website code</li>
              <li>Use the service for illegal purposes</li>
              <li>Attempt to compromise the security of our service</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. Service Availability</h2>
            <p>
              We strive to maintain 99.9% uptime, but we do not guarantee that our service will
              be available at all times. We reserve the right to modify, suspend, or discontinue
              the service at any time without notice.
            </p>
          </section>

          <section className="legal-section">
            <h2>4. User Content</h2>
            <p>
              You retain all rights to the timestamps you create. We do not claim ownership of
              your content. However, by using our service, you grant us permission to process
              your input data to generate timestamps.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Disclaimer of Warranties</h2>
            <p>
              YouTube Timestamp Generator is provided "as is" without any warranties, expressed
              or implied. We do not warrant that:
            </p>
            <ul>
              <li>The service will meet your specific requirements</li>
              <li>The service will be uninterrupted or error-free</li>
              <li>Generated timestamps will always be perfectly formatted</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>6. Limitation of Liability</h2>
            <p>
              We shall not be liable for any indirect, incidental, special, consequential, or
              punitive damages resulting from your use of or inability to use the service.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. YouTube Compliance</h2>
            <p>
              Users are responsible for ensuring their use of generated timestamps complies with
              YouTube's Terms of Service and Community Guidelines. We are not affiliated with
              YouTube or Google.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Pro Version Terms</h2>
            <p>
              When our Pro version launches, additional terms will apply to paid subscriptions,
              including payment terms, refund policies, and subscription management.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Modifications to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use of the service
              after changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className="legal-section">
            <h2>10. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with applicable laws,
              without regard to conflict of law provisions.
            </p>
          </section>

          <section className="legal-section">
            <h2>11. Contact Information</h2>
            <p>
              For questions about these terms, please contact us through our{' '}
              <a href="/contact">contact page</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Terms;
