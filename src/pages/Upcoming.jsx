import useFadeUp from '../hooks/useFadeUp';
import './Upcoming.css';

const events = [
  {
    date: 'March 24, 2026',
    title: 'Spring Visit — Senior Home Visit #3',
    detail: 'Activities + BJ interviews · Location TBD',
    status: 'next',
  },
  {
    date: 'May 2026',
    title: 'End-of-Year Visit Series',
    detail: 'Multiple facilities · Expanded programming · Final donations',
    status: 'planned',
  },
  {
    date: '2026–2027',
    title: 'Project Handoff & Expansion',
    detail: 'Framework passed to incoming officers · 3+ facilities targeted',
    status: 'future',
  },
];

export default function Upcoming() {
  useFadeUp();
  return (
    <div className="page-wrapper upcoming-page">
      <div className="page-hero upcoming-hero">
        <div className="page-hero-content fade-up">
          <p className="section-eyebrow" style={{ color: 'var(--gold)' }}>What's Next</p>
          <h1 className="page-hero-title page-hero-title-white">Upcoming Visits</h1>
          <p className="page-hero-sub" style={{ color: 'rgba(255,255,255,0.6)' }}>
            COMPASS doesn't end when the school year gets busy. We have visits on the calendar
            through May — and we're building the framework for next year's chapter to pick up
            where we leave off.
          </p>
        </div>
      </div>

      <section className="upcoming-section">
        <div className="upcoming-layout">
          {/* TIMELINE */}
          <div className="timeline">
            {events.map((ev, i) => (
              <div className={`timeline-item fade-up status-${ev.status}`} key={i}>
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <p className="timeline-date">{ev.date}</p>
                  <p className="timeline-title">{ev.title}</p>
                  <p className="timeline-detail">{ev.detail}</p>
                  <span className={`timeline-badge badge-${ev.status}`}>
                    {ev.status === 'next' ? '⏳ Up Next' : ev.status === 'planned' ? '📅 Planned' : '🔮 Future'}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* COMPASS VISUAL */}
          <div className="upcoming-visual fade-up">
            <span className="compass-spin-large">🧭</span>
            <p className="compass-caption">Always pointing toward service.</p>
            <div className="upcoming-cta-card">
              <h3>Want to join a visit?</h3>
              <p>Tucker FBLA members can sign up for any upcoming visit through our Google Form.</p>
              <a
                href="https://forms.gle/4t6Y8PnWMD1NN9Rf8"
                className="btn-primary"
                target="_blank"
                rel="noreferrer"
                style={{ fontSize: '0.82rem', padding: '11px 24px', marginTop: '1rem', display: 'inline-block' }}
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="upcoming-roadmap-section">
        <div className="fade-up">
          <p className="section-eyebrow">Long-Term Vision</p>
          <h2 className="section-title">Building something that lasts</h2>
          <p className="section-body" style={{ marginBottom: '3rem' }}>
            COMPASS is designed to outlast any single school year. We're documenting everything —
            the outreach scripts, the activity plans, the facility relationships — so the next
            generation of Tucker FBLA officers can expand what we've built.
          </p>
        </div>
        <div className="roadmap-grid">
          {[
            { icon: '📁', title: 'Replication Toolkit', body: 'A full documentation package covering facility outreach, visit planning, activity design, and member coordination — ready for other FBLA chapters to adopt.' },
            { icon: '🏠', title: '3+ Facilities Targeted', body: 'The 2026–2027 roadmap includes partnerships with at least three senior facilities in Henrico County, building on the relationships we\'ve established this year.' },
            { icon: '🎓', title: 'Student Leadership Pipeline', body: 'Current Tucker juniors will take over as COMPASS leads next year, with full handoff documentation and an established network of facility contacts.' },
            { icon: '📊', title: 'Impact Measurement', body: 'We\'re developing a simple survey framework to measure resident wellbeing before and after each visit, turning anecdotal impact into quantifiable data.' },
          ].map(({ icon, title, body }) => (
            <div className="roadmap-card fade-up" key={title}>
              <div className="roadmap-icon">{icon}</div>
              <h3 className="roadmap-title">{title}</h3>
              <p className="roadmap-body">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
