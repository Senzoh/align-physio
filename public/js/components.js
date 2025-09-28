document.addEventListener('DOMContentLoaded', () => {
  const components = [
    { selector: '#nav-container',    path: '../../components/nav.html' },
    { selector: '#footer-container', path: '../../components/footer.html' },
  ];

  components.forEach(component => {
    const container = document.querySelector(component.selector);
    if (!container) return;

    fetch(component.path)
      .then(r => r.text())
      .then(html => {
        container.innerHTML = html;

        // (optional) your sticky tweak
        const nav = container.querySelector('.sticky');
        if (nav) nav.classList.add('top-0');

        // 🔔 tell the rest of the app that this component is ready
        const name = component.selector === '#nav-container' ? 'nav:ready' : 'component:ready';
        document.dispatchEvent(new Event(name));
      })
      .catch(err => console.error(`Error loading ${component.path}:`, err));
  });
});
