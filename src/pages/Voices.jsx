import useFadeUp from '../hooks/useFadeUp';
import './Voices.css';

const quotes = [
  { text: "Seeing young people come in here reminds me of my own grandchildren. It gives me something to look forward to all week.", attr: "Resident, Our Lady of Hope" },
  { text: "The music was beautiful. I haven't danced in years, but I was moving in my chair. You could see everyone light up.", attr: "Resident, Our Lady of Hope" },
  { text: "Nobody ever comes to just talk. These kids sat down and listened. That meant everything to me.", attr: "Resident, Our Lady of Hope" },
  { text: "I've been here three years. This is the first time I've played trivia. I forgot how much fun it is to compete.", attr: "Resident, Our Lady of Hope" },
  { text: "When they walked in with all that energy, the whole room changed. You could feel it immediately.", attr: "Resident, Our Lady of Hope" },
  { text: "I wish this happened every week. It's the highlight of my month — honestly, maybe my year.", attr: "Resident, Our Lady of Hope" },
];

export default function Voices() {
  useFadeUp();
  return (
    <div className="page-wrapper">
      <div className="page-hero voices-hero">
        <div className="page-hero-content fade-up">
          <p className="section-eyebrow" style={{ color: 'var(--gold)' }}>Senior Voices</p>
          <h1 className="page-hero-title">What residents told us</h1>
          <p className="page-hero-sub">
            Captured through on-camera interviews by Tucker's Broadcast Journalism class
            at Our Lady of Hope, January 2026.
          </p>
        </div>
      </div>

      <section className="voices-section">
        <div className="quote-grid">
          {quotes.map((q, i) => (
            <div className="quote-card fade-up" key={i}>
              <span className="quote-mark">"</span>
              <p className="quote-text">{q.text}</p>
              <p className="quote-attr">— {q.attr}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="voices-context-section">
        <div className="voices-context-box fade-up">
          <div className="voices-context-icon">🎥</div>
          <div>
            <h3 className="voices-context-title">More Interviews Coming</h3>
            <p className="voices-context-body">
              Tucker's Broadcast Journalism class filmed additional on-camera interviews during
              our February visit to St. Mary's Guest House. These voices will be released
              as part of our end-of-year documentation. The full interview series will be
              shared with partnering facilities and submitted as part of our FBLA project record.
            </p>
          </div>
        </div>
      </section>

      <section className="voices-mission-section">
        <div className="fade-up">
          <p className="section-eyebrow" style={{ color: 'var(--gold)' }}>Why It Matters</p>
          <h2 className="section-title section-title-white">The human side of the data</h2>
          <p className="section-body section-body-dim" style={{ marginBottom: '3rem' }}>
            Behind every statistic about senior isolation is a real person with a story.
            These interviews are the reason COMPASS exists.
          </p>
          <div className="voices-stat-row">
            {[
              { num: '70%', label: 'of seniors in care report significant loneliness' },
              { num: '6',   label: 'residents interviewed on camera in January 2026' },
              { num: '100', label: 'handmade Cards with Care delivered to St. Mary\'s' },
              { num: '∞',   label: 'conversations had during open visit time' },
            ].map(({ num, label }) => (
              <div className="voices-stat" key={num}>
                <div className="voices-stat-num">{num}</div>
                <div className="voices-stat-lbl">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
