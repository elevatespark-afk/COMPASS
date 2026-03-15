import useFadeUp from '../hooks/useFadeUp';
import './Media.css';

const cards = [
  {
    thumb: 'fb',
    icon: '📘',
    source: 'Facebook',
    headline: 'Our Lady of Hope shares their COMPASS visit',
    snippet: 'The facility posted photos and warm words about the January visit on their official page, tagging Tucker FBLA and praising the energy and genuine care shown by student volunteers.',
  },
  {
    thumb: 'school',
    icon: '🏫',
    source: 'Tucker FBLA',
    headline: 'COMPASS recognized at FBLA chapter banquet',
    snippet: 'Project COMPASS was highlighted as a flagship community service initiative at Tucker\'s annual FBLA recognition ceremony, praised for its research foundation and measurable community impact.',
  },
  {
    thumb: 'bj',
    icon: '🎥',
    source: 'Tucker Broadcast Journalism',
    headline: 'BJ class documents senior interviews on camera',
    snippet: "Tucker's award-winning broadcast journalism program filmed and produced on-camera resident interviews at Our Lady of Hope in January, capturing authentic voices that continue to shape our programming.",
  },
  {
    thumb: 'news',
    icon: '📰',
    source: 'Local Coverage',
    headline: 'Additional coverage forthcoming',
    snippet: 'Media coverage from our February visit to St. Mary\'s Guest House and upcoming spring events is in progress. Updates will be posted here as they become available.',
  },
];

export default function Media() {
  useFadeUp();
  return (
    <div className="page-wrapper">
      <div className="page-hero media-hero">
        <div className="page-hero-content fade-up">
          <p className="section-eyebrow">In the News</p>
          <h1 className="page-hero-title">Media &amp; Recognition</h1>
          <p className="page-hero-sub">
            COMPASS has been recognized by the facilities we serve, Tucker's school community,
            and local media.
          </p>
        </div>
      </div>

      <section className="media-section">
        <div className="media-grid">
          {cards.map((card) => (
            <div className="media-card fade-up" key={card.source}>
              <div className={`media-thumb ${card.thumb}`}>{card.icon}</div>
              <div className="media-body">
                <p className="media-source">{card.source}</p>
                <p className="media-headline">{card.headline}</p>
                <p className="media-snippet">{card.snippet}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="media-recognition-section">
        <div className="fade-up">
          <p className="section-eyebrow">By the Numbers</p>
          <h2 className="section-title">Our footprint so far</h2>
        </div>
        <div className="recognition-grid">
          {[
            { icon: '🏠', label: '2 facilities officially recognized COMPASS on social media' },
            { icon: '🎓', label: 'Featured at Tucker\'s annual FBLA awards banquet' },
            { icon: '🎥', label: 'On-camera documentation produced by Tucker BJ class' },
            { icon: '📋', label: 'Submitted as FBLA Community Service Project for 2025–2026' },
          ].map(({ icon, label }) => (
            <div className="recognition-item fade-up" key={label}>
              <span className="recognition-icon">{icon}</span>
              <p className="recognition-label">{label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
