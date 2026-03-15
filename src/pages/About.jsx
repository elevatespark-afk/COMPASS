import useFadeUp from '../hooks/useFadeUp';
import './About.css';

export default function About() {
  useFadeUp();
  return (
    <div className="page-wrapper">
      {/* PAGE HERO */}
      <div className="page-hero about-hero">
        <div className="page-hero-content fade-up">
          <p className="section-eyebrow">Why We Built This</p>
          <h1 className="page-hero-title">A crisis hiding<br />in plain sight</h1>
          <p className="page-hero-sub">The research, the story, and the mission behind Project COMPASS.</p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <section className="about-section">
        <div className="about-grid">
          <div className="about-text fade-up">
            <p className="section-eyebrow">The Problem</p>
            <h2 className="section-title">70% of seniors report feeling lonely</h2>
            <p className="section-body">
              Roughly 70% of seniors in residential care report feeling moderately or severely lonely.
              That statistic came from a published study. But it became real to us when a team member's
              own family member moved into a local senior facility — and described how rarely anyone
              from outside came to visit.
            </p>
            <p className="section-body" style={{ marginTop: '1rem' }}>
              Social isolation isn't a personal failing — it's a systemic gap. And Tucker FBLA is
              uniquely positioned to help fill it.
            </p>
          </div>
          <div className="about-visual fade-up">
            <div className="about-card">
              <p className="about-card-quote">
                "Loneliness is not a personal failing. It's a systemic gap — and student organizations
                are well-positioned to help fill it."
              </p>
              <p className="about-card-source">Project COMPASS — Mission Statement</p>
            </div>
            <div className="about-stat-row">
              <div className="about-stat-box"><div className="num">2</div><div className="lbl">Facilities Partnered</div></div>
              <div className="about-stat-box"><div className="num">35+</div><div className="lbl">Members Visited</div></div>
              <div className="about-stat-box"><div className="num">5+</div><div className="lbl">Visits Planned</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH */}
      <section className="research-section">
        <div className="research-inner">
          <p className="section-eyebrow">Our Approach</p>
          <h2 className="section-title">Research-driven, community-led</h2>
          <p className="section-body" style={{ marginBottom: '2.5rem' }}>
            COMPASS was built on evidence. Before we planned a single visit, we gathered data —
            from the community, from senior residents, and from published literature.
          </p>
          <div className="research-points">
            {[
              { icon: '📊', title: '300+ survey respondents', body: 'confirmed that Henrico-area students want to volunteer with seniors but face barriers around scheduling and access. Our survey shaped every aspect of how COMPASS operates.' },
              { icon: '🎙️', title: 'On-camera senior interviews', body: "conducted by Tucker's Broadcast Journalism class captured firsthand accounts of isolation and what student visits mean. These voices drive our programming decisions." },
              { icon: '📚', title: 'Peer-reviewed literature', body: 'from the National Academies identifies social isolation as a significant independent risk factor for cognitive decline in older adults — equivalent in severity to smoking 15 cigarettes a day.' },
              { icon: '🤝', title: 'Facility partnerships', body: 'built through direct outreach to Our Lady of Hope and St. Mary\'s Guest House. We worked with administrators to design programming that fits resident needs and facility schedules.' },
            ].map(({ icon, title, body }) => (
              <div className="research-point fade-up" key={title}>
                <div className="research-point-icon">{icon}</div>
                <div className="research-point-text"><strong>{title}</strong> {body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVIDENCE CALLOUT */}
      <section className="evidence-section">
        <div className="evidence-inner fade-up">
          <p className="section-eyebrow" style={{ color: 'var(--gold)' }}>The Evidence</p>
          <h2 className="section-title section-title-white">Why this works</h2>
          <div className="evidence-grid">
            {[
              { stat: '70%',  label: 'of seniors in care report significant loneliness' },
              { stat: '26%',  label: 'increased mortality risk from social isolation' },
              { stat: '50%',  label: 'higher dementia risk for chronically isolated seniors' },
              { stat: '300+', label: 'community survey respondents validated our approach' },
            ].map(({ stat, label }) => (
              <div className="evidence-card" key={stat}>
                <div className="evidence-num">{stat}</div>
                <div className="evidence-lbl">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
