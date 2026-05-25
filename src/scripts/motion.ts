/** Scroll reveal — GPU transitions, content visible without JS */
const REVEAL_SELECTOR = '[data-reveal], [data-reveal-item], [data-reveal-hero]';
const REDUCED = '(prefers-reduced-motion: reduce)';

function reveal(el: HTMLElement) {
  if (el.classList.contains('is-visible')) return;
  el.style.willChange = 'transform, opacity';
  requestAnimationFrame(() => {
    el.classList.add('is-visible');
    const delay =
      (parseInt(getComputedStyle(el).transitionDelay) || 0) +
      (parseFloat(getComputedStyle(el).transitionDuration) || 0.55) * 1000;
    window.setTimeout(() => {
      el.style.willChange = 'auto';
    }, delay + 80);
  });
}

function isInViewport(el: Element) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
}

function initMotion() {
  const root = document.documentElement;

  if (window.matchMedia(REDUCED).matches) {
    root.classList.remove('motion-ready');
    document.querySelectorAll(REVEAL_SELECTOR).forEach((el) => el.classList.add('is-visible'));
    return;
  }

  if (!root.classList.contains('motion-ready')) {
    root.classList.add('motion-ready');
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        reveal(entry.target as HTMLElement);
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -5% 0px', threshold: 0.05 }
  );

  document.querySelectorAll('[data-reveal-stagger]').forEach((container) => {
    container.querySelectorAll('[data-reveal-item]').forEach((child, i) => {
      const node = child as HTMLElement;
      node.style.setProperty('--reveal-delay', `${Math.min(i * 80, 400)}ms`);
      observer.observe(node);
    });
  });

  document.querySelectorAll('[data-reveal]').forEach((el) => {
    if (el.hasAttribute('data-reveal-stagger')) return;
    if (el.hasAttribute('data-reveal-item')) return;
    observer.observe(el);
  });

  document.querySelectorAll('[data-reveal-hero]').forEach((el, i) => {
    const node = el as HTMLElement;
    node.style.setProperty('--reveal-delay', `${i * 90}ms`);
    reveal(node);
  });

  // Reveal elemen yang sudah terlihat saat halaman pertama kali load
  requestAnimationFrame(() => {
    document
      .querySelectorAll('[data-reveal]:not(.is-visible), [data-reveal-item]:not(.is-visible)')
      .forEach((el) => {
        if (isInViewport(el)) {
          reveal(el as HTMLElement);
          observer.unobserve(el);
        }
      });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMotion);
} else {
  initMotion();
}
