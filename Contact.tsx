import { useState } from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-page">
      <div className="container">
        <div className="page-header">
          <h1 className="gradient-text">Contact Us</h1>
          <p>Have questions? We'd love to hear from you</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <Mail size={32} />
              <h3>Email Us</h3>
              <p>support@timestampgenerator.com</p>
            </div>

            <div className="info-card">
              <MessageSquare size={32} />
              <h3>Quick Response</h3>
              <p>We typically respond within 24 hours</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="form-input"
              />
            </div>

            <button type="submit" className="submit-btn" disabled={submitted}>
              {submitted ? (
                <>
                  <Send size={20} /> Message Sent!
                </>
              ) : (
                <>
                  <Send size={20} /> Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
