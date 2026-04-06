import React, { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter__content">
          <div className="newsletter__text">
            <h2>Join the Luxe Botanica Family</h2>
            <p>Subscribe for exclusive offers, beauty tips, and be the first to know about new arrivals.</p>
          </div>
          {!isSubmitted ? (
            <form className="newsletter__form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter__input"
                required
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          ) : (
            <div className="newsletter__success">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              <p>Thank you for subscribing! Check your inbox for a welcome surprise.</p>
            </div>
          )}
          <p className="newsletter__disclaimer">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

