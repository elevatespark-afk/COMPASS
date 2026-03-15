import { useEffect } from 'react';

export default function Lightbox({ images, index, onClose, onNav }) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowLeft')  onNav(-1);
      if (e.key === 'ArrowRight') onNav(1);
      if (e.key === 'Escape')     onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, onNav]);

  if (index === null || !images[index]) return null;

  return (
    <div className="lightbox open" onClick={(e) => { if (e.target.classList.contains('lightbox')) onClose(); }}>
      <div className="lightbox-inner">
        <button className="lightbox-close" onClick={onClose}>✕</button>
        <button className="lightbox-nav lightbox-prev" onClick={() => onNav(-1)}>‹</button>
        <img src={`/${images[index]}`} alt={`Photo ${index + 1}`} />
        <button className="lightbox-nav lightbox-next" onClick={() => onNav(1)}>›</button>
        <div className="lightbox-counter">{index + 1} / {images.length}</div>
      </div>
    </div>
  );
}
