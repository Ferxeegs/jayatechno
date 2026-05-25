/** Lightweight scroll reveal — content always visible, animates on enter viewport */
function initMotion() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const targets = document.querySelectorAll('[data-reveal], [data-reveal-item], [data-reveal-hero]');

  if (reduced) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  document.documentElement.classList.add('motion-ready');

  const observer = new IntersectionObserver(
    (entries) => {
      requestAnimationFrame(() => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      });
    },
    { rootMargin: '0px 0px -5% 0px', threshold: 0.08 }
  );

  document.querySelectorAll('[data-reveal-stagger]').forEach((container) => {
    container.querySelectorAll('[data-reveal-item]').forEach((child, i) => {
      (child as HTMLElement).style.setProperty('--reveal-delay', `${Math.min(i * 80, 400)}ms`);
      observer.observe(child);
    });
  });

  document.querySelectorAll('[data-reveal]').forEach((el) => {
    if (el.hasAttribute('data-reveal-stagger')) return;
    if (el.hasAttribute('data-reveal-item')) return;
    observer.observe(el);
  });

  document.querySelectorAll('[data-reveal-hero]').forEach((el, i) => {
    (el as HTMLElement).style.setProperty('--reveal-delay', `${i * 90}ms`);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => el.classList.add('is-visible'));
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMotion);
} else {
  initMotion();
}
