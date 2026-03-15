import { useEffect } from 'react';

export default function useFadeUp() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    const els = document.querySelectorAll('.fade-up');
    els.forEach(el => obs.observe(el));
    return () => els.forEach(el => obs.unobserve(el));
  });
}
