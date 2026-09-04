// Loads the PSG design system (tokens + component bundle) for pages at the project root.
(() => {
  const l = document.createElement('link');
  l.rel = 'stylesheet'; l.href = './ds/styles.css';
  document.head.appendChild(l);
  const s = document.createElement('script');
  s.src = './ds/psg-bundle.js';
  document.head.appendChild(s);
})();
