import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="footer-logo">PROJECT <span>COMPASS</span></div>
      <p className="footer-sub">Tucker FBLA &nbsp;·&nbsp; Henrico County, Virginia &nbsp;·&nbsp; 2025–2026</p>
      <div className="footer-links">
        <Link to="/about">About</Link>
        <Link to="/visits">Visits</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/voices">Voices</Link>
        <Link to="/get-involved">Get Involved</Link>
        <Link to="/team">Team</Link>
      </div>
      <p className="footer-copy">© 2025–2026 Project COMPASS — Tucker FBLA. All rights reserved.</p>
    </footer>
  );
}
