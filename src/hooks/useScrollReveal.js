import { useEffect } from 'react';

const VISIBLE = 'is-visible';

/**
 * Fades elements marked with `data-reveal` into view as they are scrolled to.
 * Re-scans whenever `key` changes (we pass the route path), so each page
 * animates on entry.
 *
 * Anything already inside — or above — the viewport is revealed straight away,
 * so a deep link or a jump down the page never leaves blank sections behind.
 */
const useScrollReveal = (key) => {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll('[data-reveal]'));
    if (!nodes.length) return undefined;

    if (typeof IntersectionObserver === 'undefined') {
      nodes.forEach((node) => node.classList.add(VISIBLE));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Intersecting, or already scrolled past (a jump skipped over it).
          if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
            entry.target.classList.add(VISIBLE);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -50px 0px' }
    );

    nodes.forEach((node) => {
      node.classList.remove(VISIBLE);
      if (node.getBoundingClientRect().top < window.innerHeight) {
        node.classList.add(VISIBLE);
      } else {
        observer.observe(node);
      }
    });

    return () => observer.disconnect();
  }, [key]);
};

export default useScrollReveal;
