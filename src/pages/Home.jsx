import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ALL_IMGS, OLOH, SMGH } from '../images';
import useFadeUp from '../hooks/useFadeUp';
import './Home.css';

const CAPTIONS = {
  oloh: { title: 'Our Lady of Hope',    date: 'January 16, 2026',  desc: 'Live music, trivia, seated yoga & on-camera senior interviews' },
  smgh: { title: "St. Mary's Guest House", date: 'February 24, 2026', desc: 'Home-cooked meals, cleaning, Cards of Care & household donations' },
};
const CAR_ITEMS = [
  ...OLOH.slice(0, 5).map(k => ({ k, g: 'oloh' })),
  ...SMGH.slice(0, 5).map(k => ({ k, g: 'smgh' })),
];

export default function Home() {
  useFadeUp();

  // Hero photo rotation
  const [hi, setHi] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setHi(h => (h + 1) % ALL_IMGS.length), 4000);
    return () => clearInterval(t);
  }, []);

  // Carousel
  const [carIdx, setCarIdx] = useState(0);
  const carMove = (dir) => setCarIdx(i => (i + dir + CAR_ITEMS.length) % CAR_ITEMS.length);
  useEffect(() => {
    const t = setInterval(() => carMove(1), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="page-wrapper">
      {/* HERO */}
      <section className="hero">
        <div className="hero-grid" />
        <div className="hero-glow" />
        <div className="hero-glow-2" />
        <div className="hero-layout">
          <div className="hero-content fade-up">
            <div className="hero-tag">Tucker FBLA &nbsp;·&nbsp; 2025–2026</div>
            <h1>PROJECT<br /><span className="gold">COMPASS</span></h1>
            <p className="hero-sub">Bridging Generations Through Service</p>
            <p className="hero-desc">Tucker FBLA students visit senior residential facilities across Henrico County — bringing music, games, home-cooked meals, and genuine human connection to those who need it most.</p>
            <div className="hero-cta">
              <Link to="/get-involved" className="btn-primary">Get Involved</Link>
              <Link to="/visits" className="btn-outline">Our Visits</Link>
            </div>
          </div>
          <div className="hero-photos fade-up">
            <div className="hero-photo-stack">
              <div className="hero-photo-main">
                <img src={`/${ALL_IMGS[hi % ALL_IMGS.length]}`} alt="COMPASS visit" />
              </div>
              <div className="hero-photo-2">
                <img src={`/${ALL_IMGS[(hi + 4) % ALL_IMGS.length]}`} alt="COMPASS activity" />
              </div>
              <div className="hero-photo-3">
                <img src={`/${ALL_IMGS[(hi + 9) % ALL_IMGS.length]}`} alt="COMPASS moment" />
              </div>
              <div className="hero-photo-badge">Real Photos · 2026</div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-strip">
        {[['90+','Seniors Engaged'],['100','Cards Delivered'],['60+','Items Donated'],['75%+','Chapter Engaged']].map(([n,l]) => (
          <div className="stat-item" key={l}>
            <div className="stat-num">{n}</div>
            <div className="stat-label">{l}</div>
          </div>
        ))}
      </div>

      {/* CAROUSEL */}
      <div className="carousel-section">
        <div className="carousel-wrap">
          <div className="carousel-track" style={{ transform: `translateX(${-carIdx * 100}%)` }}>
            {CAR_ITEMS.map(({ k, g }, i) => {
              const c = CAPTIONS[g];
              return (
                <div className="carousel-slide" key={i}>
                  <img src={`/${k}`} alt={c.title} loading="lazy" />
                  <div className="carousel-overlay" />
                  <div className="carousel-caption">
                    <h3>{c.title}</h3>
                    <p>{c.date} — {c.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="carousel-btns">
            <button className="carousel-btn" onClick={() => carMove(-1)}>←</button>
            <button className="carousel-btn" onClick={() => carMove(1)}>→</button>
          </div>
          <div className="carousel-dots">
            {CAR_ITEMS.map((_, i) => (
              <span key={i} className={i === carIdx ? 'active' : ''} onClick={() => setCarIdx(i)} />
            ))}
          </div>
        </div>
      </div>

      {/* QUICK LINKS */}
      <section className="home-links-section">
        <p className="section-eyebrow">Explore</p>
        <h2 className="section-title">Learn More About COMPASS</h2>
        <div className="home-link-cards">
          {[
            { to: '/about',    icon: '🔍', title: 'Our Mission',   desc: 'The research and story behind why COMPASS exists.' },
            { to: '/visits',   icon: '📸', title: 'Our Visits',    desc: 'See what we did at Our Lady of Hope & St. Mary\'s.' },
            { to: '/gallery',  icon: '🖼️', title: 'Photo Gallery', desc: 'Browse all 21 real photos from our 2026 visits.' },
            { to: '/voices',   icon: '💬', title: 'Senior Voices', desc: 'Hear directly from residents about what visits mean.' },
            { to: '/upcoming', icon: '📅', title: 'What\'s Next',  desc: 'Upcoming visits and the 2026–2027 roadmap.' },
            { to: '/team',     icon: '👥', title: 'The Team',      desc: 'Meet the people behind Project COMPASS.' },
          ].map(({ to, icon, title, desc }) => (
            <Link to={to} className="home-link-card fade-up" key={to}>
              <div className="hlc-icon">{icon}</div>
              <h3 className="hlc-title">{title}</h3>
              <p className="hlc-desc">{desc}</p>
              <span className="hlc-arrow">→</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
