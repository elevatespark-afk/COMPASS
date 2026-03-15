import useFadeUp from '../hooks/useFadeUp';
import './Team.css';

const team = [
  {
    initials: 'AL',
    name: 'Amy Lin',
    role: 'Research Lead',
    bio: 'Led the community survey, literature review, and project evaluation. Coordinated data collection across 300+ respondents and drove the research-to-action pipeline that shaped each visit\'s programming.',
  },
  {
    initials: 'VG',
    name: 'Vansh Goel',
    role: 'Planning & Implementation',
    bio: 'Managed facility outreach, member coordination, and visit logistics. Oversaw activity design and ensured every visit ran smoothly from arrival to departure.',
  },
  {
    initials: 'TF',
    name: 'Tucker FBLA',
    role: 'Chapter Volunteers',
    bio: '75%+ of Tucker FBLA\'s 50+ member chapter has participated in at least one COMPASS visit — showing up, engaging genuinely, and representing the school with pride.',
  },
];

const values = [
  { icon: '❤️', title: 'Genuine Connection', body: 'We don\'t show up to check a box. We show up to sit down, listen, and be present with residents as real people.' },
  { icon: '📊', title: 'Evidence-Based', body: 'Every decision — what activities to run, which facilities to partner with, how to measure impact — is grounded in research.' },
  { icon: '🔄', title: 'Built to Last', body: 'We\'re documenting everything so the next generation of Tucker FBLA officers can build on what we\'ve started.' },
  { icon: '🌱', title: 'Student-Powered', body: 'This project is entirely student-led. The outreach, planning, activities, and documentation are all the work of Tucker FBLA members.' },
];

export default function Team() {
  useFadeUp();
  return (
    <div className="page-wrapper">
      <div className="page-hero team-hero">
        <div className="page-hero-content fade-up">
          <p className="section-eyebrow">The Team</p>
          <h1 className="page-hero-title">Who We Are</h1>
          <p className="page-hero-sub">
            Project COMPASS is a Tucker FBLA initiative — student-led, research-backed,
            and built around genuine care for Henrico County's senior community.
          </p>
        </div>
      </div>

      <section className="team-section">
        <div className="team-grid">
          {team.map((member) => (
            <div className="team-card fade-up" key={member.name}>
              <div className="team-avatar">{member.initials}</div>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="values-section">
        <p className="section-eyebrow">What Drives Us</p>
        <h2 className="section-title">Our values</h2>
        <div className="values-grid">
          {values.map(({ icon, title, body }) => (
            <div className="value-card fade-up" key={title}>
              <div className="value-icon">{icon}</div>
              <h3 className="value-title">{title}</h3>
              <p className="value-body">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="team-cta-section">
        <div className="team-cta-inner fade-up">
          <p className="section-eyebrow" style={{ color: 'var(--gold)' }}>Join Us</p>
          <h2 className="section-title section-title-white">Want to be part of COMPASS?</h2>
          <p className="section-body section-body-dim" style={{ marginBottom: '2rem' }}>
            Tucker FBLA members are always welcome at our visits. No experience needed —
            just genuine care and a willingness to show up.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="https://forms.gle/4t6Y8PnWMD1NN9Rf8"
              className="btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Sign Up to Volunteer
            </a>
            <a href="mailto:compasstuckerfbla@gmail.com" className="btn-outline">
              Contact the Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
