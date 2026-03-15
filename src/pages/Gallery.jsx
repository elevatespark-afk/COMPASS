import { useState, useEffect, useRef } from 'react';
import { OLOH, SMGH, ALL_IMGS } from '../images';
import Lightbox from '../components/Lightbox';
import useFadeUp from '../hooks/useFadeUp';
import './Gallery.css';

const TABS = [
  { key: 'all',  label: 'All Photos',           images: ALL_IMGS },
  { key: 'oloh', label: 'Our Lady of Hope',      images: OLOH },
  { key: 'smgh', label: "St. Mary's Guest House", images: SMGH },
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('all');
  const [lbIdx, setLbIdx] = useState(null);
  const gridRef = useRef(null);

  const currentImages = TABS.find(t => t.key === activeTab).images;

  // Animate items in when tab changes
  useEffect(() => {
    if (!gridRef.current) return;
    const items = gridRef.current.querySelectorAll('.gitem');
    items.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      setTimeout(() => {
        el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, i * 50);
    });
  }, [activeTab]);

  const closeLb = () => setLbIdx(null);
  const navLb = (dir) => setLbIdx(i => (i + dir + currentImages.length) % currentImages.length);

  return (
    <div className="page-wrapper">
      <div className="page-hero gallery-hero">
        <div className="page-hero-content">
          <p className="section-eyebrow" style={{ color: 'var(--gold)' }}>Photo Gallery</p>
          <h1 className="page-hero-title">Moments from the Field</h1>
          <p className="page-hero-sub">Real photos from our 2026 visits — click any image to view full size.</p>
        </div>
      </div>

      <section className="gallery-section">
        <div className="gallery-tabs">
          {TABS.map(({ key, label, images }) => (
            <button
              key={key}
              className={`gallery-tab${activeTab === key ? ' active' : ''}`}
              onClick={() => setActiveTab(key)}
            >
              {label} <span className="tab-count">({images.length})</span>
            </button>
          ))}
        </div>

        <div className="gallery-grid" ref={gridRef}>
          {currentImages.map((img, i) => (
            <div className="gitem" key={img} onClick={() => setLbIdx(i)}>
              <img src={`/${img}`} alt={`Photo ${i + 1}`} loading="lazy" />
              <div className="gitem-overlay">
                <span>🔍</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Lightbox images={currentImages} index={lbIdx} onClose={closeLb} onNav={navLb} />
    </div>
  );
}
