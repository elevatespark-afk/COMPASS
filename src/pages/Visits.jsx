import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { OLOH, SMGH } from '../images';
import Lightbox from '../components/Lightbox';
import useFadeUp from '../hooks/useFadeUp';
import './Visits.css';

function VisitSlideshow({ images, onOpenLightbox }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % images.length), 3200);
    return () => clearInterval(t);
  }, [images.length]);

  return (
    <div className="visit-slideshow" onClick={() => onOpenLightbox(idx)}>
      {images.map((img, i) => (
        <img key={img} src={`/${img}`} alt={`Visit photo ${i+1}`}
          className={i === idx ? 'active' : ''} loading="lazy" />
      ))}
      <div className="visit-slide-dots">
        {images.map((_, i) => (
          <span key={i} className={i === idx ? 'active' : ''}
            onClick={e => { e.stopPropagation(); setIdx(i); }} />
        ))}
      </div>
    </div>
  );
}

export default function Visits() {
  useFadeUp();
  const [lb, setLb] = useState({ group: null, idx: null });

  const lbImages = lb.group === 'oloh' ? OLOH : lb.group === 'smgh' ? SMGH : [];
  const openLb = (group, idx) => setLb({ group, idx });
  const closeLb = () => setLb({ group: null, idx: null });
  const navLb = (dir) => setLb(prev => ({
    ...prev,
    idx: (prev.idx + dir + lbImages.length) % lbImages.length
  }));

  return (
    <div className="page-wrapper">
      <div className="page-hero visits-hero">
        <div className="page-hero-content fade-up">
          <p className="section-eyebrow">What We've Done</p>
          <h1 className="page-hero-title">Our Visits</h1>
          <p className="page-hero-sub">Two completed visits, one upcoming — and more on the way.</p>
        </div>
      </div>

      <section className="visits-section">
        {/* VISIT 1 */}
        <div className="visit-block fade-up">
          <div className="visit-block-media">
            <span className="visit-badge badge-done">✓ Completed</span>
            <VisitSlideshow images={OLOH} onOpenLightbox={(i) => openLb('oloh', i)} />
          </div>
          <div className="visit-block-content">
            <p className="visit-date">January 16, 2026</p>
            <h2 className="visit-title">Our Lady of Hope</h2>
            <p className="visit-body">
              35+ chapter members arrived before 10 AM. Rishwanth and fellow musicians performed
              live as residents walked in — filling the room with energy from the first minute.
              Trivia with handmade answer sticks, seated yoga, and open conversation followed.
              Tucker's Broadcast Journalism class documented on-camera senior interviews throughout,
              capturing authentic voices we continue to share.
            </p>
            <div className="visit-tags">
              <span className="tag">🎵 Live Music</span>
              <span className="tag">🧠 Trivia</span>
              <span className="tag">🧘 Seated Yoga</span>
              <span className="tag">~50 Seniors</span>
              <span className="tag">🎥 BJ Interviews</span>
            </div>
            <button className="btn-view-photos" onClick={() => openLb('oloh', 0)}>
              View All {OLOH.length} Photos →
            </button>
          </div>
        </div>

        <div className="visit-divider" />

        {/* VISIT 2 */}
        <div className="visit-block visit-block-reverse fade-up">
          <div className="visit-block-media">
            <span className="visit-badge badge-done">✓ Completed</span>
            <VisitSlideshow images={SMGH} onOpenLightbox={(i) => openLb('smgh', i)} />
          </div>
          <div className="visit-block-content">
            <p className="visit-date">February 24, 2026</p>
            <h2 className="visit-title">St. Mary's Guest House</h2>
            <p className="visit-body">
              Members cooked a full meal for 40–50 residents from scratch, cleaned common areas,
              and formally delivered 100 handmade Cards with Care alongside over 60 donated
              household items collected throughout the fall semester. A deeply meaningful visit
              that went beyond activities into genuine acts of service.
            </p>
            <div className="visit-tags">
              <span className="tag">🍳 Cooking</span>
              <span className="tag">🧹 Cleaning</span>
              <span className="tag">💌 Cards of Care</span>
              <span className="tag">📦 60+ Donations</span>
              <span className="tag">40–50 Seniors</span>
            </div>
            <button className="btn-view-photos" onClick={() => openLb('smgh', 0)}>
              View All {SMGH.length} Photos →
            </button>
          </div>
        </div>

        <div className="visit-divider" />

        {/* VISIT 3 — UPCOMING */}
        <div className="visit-block fade-up">
          <div className="visit-block-media upcoming-placeholder">
            <span className="visit-badge badge-upcoming">⏳ Upcoming</span>
            <span className="compass-spin">🧭</span>
          </div>
          <div className="visit-block-content">
            <p className="visit-date">March 24, 2026</p>
            <h2 className="visit-title">Spring Visit #3</h2>
            <p className="visit-body">
              Our third structured visit, with continued senior interviews by Broadcast Journalism
              and expanded activities. Location finalized with our partnered facility.
              Additional visits are planned throughout May to close out the school year strong —
              and lay the groundwork for 2026–2027.
            </p>
            <div className="visit-tags">
              <span className="tag tag-blue">Activities TBD</span>
              <span className="tag tag-blue">BJ Interviews</span>
              <span className="tag tag-blue">+ May Visits</span>
            </div>
            <Link to="/upcoming" className="btn-view-photos" style={{ display: 'inline-block', textDecoration: 'none' }}>
              See Full Timeline →
            </Link>
          </div>
        </div>
      </section>

      <Lightbox images={lbImages} index={lb.idx} onClose={closeLb} onNav={navLb} />
    </div>
  );
}
