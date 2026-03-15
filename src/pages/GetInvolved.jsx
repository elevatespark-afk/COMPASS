import { useState } from 'react';
import useFadeUp from '../hooks/useFadeUp';
import './GetInvolved.css';

export default function GetInvolved() {
  useFadeUp();
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="page-wrapper">
      <div className="page-hero involve-hero">
        <div className="page-hero-content fade-up">
          <p className="section-eyebrow">Take Action</p>
          <h1 className="page-hero-title">Get Involved</h1>
          <p className="page-hero-sub">
            Whether you're a Tucker student, a fellow FBLA chapter, or a community member —
            there's a place for you in COMPASS.
          </p>
        </div>
      </div>

      <section className="involve-section">
        <div className="involve-grid">
          {/* LEFT: involvement cards */}
          <div className="involve-cards">
            <div className="involve-card fade-up">
              <div className="involve-icon">🏫</div>
              <h3 className="involve-title">For Tucker Students</h3>
              <p className="involve-body">
                COMPASS visits are open to all Tucker FBLA members. Show up, engage, and make
                a real difference in someone's week. No experience necessary — just genuine care.
                Check the sign-up form for our next visit date.
              </p>
              <a
                href="https://forms.gle/4t6Y8PnWMD1NN9Rf8"
                className="btn-primary"
                target="_blank"
                rel="noreferrer"
                style={{ fontSize: '0.82rem', padding: '11px 24px' }}
              >
                Sign Up for a Visit
              </a>
            </div>

            <div className="involve-card fade-up">
              <div className="involve-icon">🤝</div>
              <h3 className="involve-title">For Other FBLA Chapters</h3>
              <p className="involve-body">
                Want to replicate COMPASS at your school? We're building a replication toolkit
                for FBLA chapters across Virginia — covering facility outreach, activity design,
                and member coordination. Reach out to get early access.
              </p>
              <a
                href="mailto:compasstuckerfbla@gmail.com"
                className="btn-outline-navy"
              >
                Contact Us
              </a>
            </div>

            <div className="involve-card fade-up">
              <div className="involve-icon">💝</div>
              <h3 className="involve-title">Donate Household Items</h3>
              <p className="involve-body">
                We collect everyday household items — toiletries, warm socks, small household
                goods — throughout the school year. Donated items go directly to residents
                at our partnered facilities. Drop-offs accepted at Tucker High School.
              </p>
              <a
                href="mailto:compasstuckerfbla@gmail.com"
                className="btn-outline-navy"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* RIGHT: survey */}
          <div className="form-embed fade-up">
            <p className="form-title">Community Survey</p>
            <p className="form-sub">Your response directly informs how we design future visits.</p>

            {submitted ? (
              <div className="form-success">
                <div className="form-success-icon">✓</div>
                <h3>Thank you!</h3>
                <p>Your response has been recorded. It will directly shape how we plan future COMPASS visits.</p>
              </div>
            ) : (
              <>
                <label className="form-label">How often do you interact with someone over 65?</label>
                <select className="form-select" defaultValue="">
                  <option value="" disabled>Select an option</option>
                  <option>Never</option>
                  <option>A few times a year</option>
                  <option>Monthly</option>
                  <option>Weekly or more</option>
                </select>

                <label className="form-label">Are you aware of senior isolation as a health issue?</label>
                <select className="form-select" defaultValue="">
                  <option value="" disabled>Select an option</option>
                  <option>Not at all aware</option>
                  <option>Somewhat aware</option>
                  <option>Very aware</option>
                </select>

                <label className="form-label">Do you believe Henrico seniors get enough social engagement?</label>
                <select className="form-select" defaultValue="">
                  <option value="" disabled>Select an option</option>
                  <option>Yes</option>
                  <option>No</option>
                  <option>Not sure</option>
                </select>

                <label className="form-label">Would you volunteer at a senior home if your school organized it?</label>
                <select className="form-select" defaultValue="">
                  <option value="" disabled>Select an option</option>
                  <option>Yes, definitely</option>
                  <option>Maybe</option>
                  <option>No</option>
                </select>

                <label className="form-label">Any thoughts or comments?</label>
                <textarea className="form-textarea" placeholder="Optional..." />

                <button
                  className="btn-primary"
                  style={{ width: '100%', textAlign: 'center', marginTop: '0.75rem' }}
                  onClick={() => setSubmitted(true)}
                >
                  Submit Survey
                </button>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
