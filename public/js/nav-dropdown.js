function initNavDropdown() {
  const btn   = document.getElementById('servicesDropdownBtn');
  const menu  = document.getElementById('servicesDropdown');
  const icon  = document.getElementById('servicesDropdownIcon');

  if (!btn || !menu || !icon) return; // nav not in DOM yet

  // start hidden (matches classes in your nav.html)
  menu.classList.add('opacity-0', 'invisible', 'translate-y-2');

  btn.addEventListener('click', () => {
    const open = menu.classList.contains('opacity-100');
    if (open) {
      menu.classList.remove('opacity-100', 'visible', 'translate-y-0');
      menu.classList.add('opacity-0', 'invisible', 'translate-y-2');
      icon.classList.remove('rotate-180');
    } else {
      menu.classList.remove('opacity-0', 'invisible', 'translate-y-2');
      menu.classList.add('opacity-100', 'visible', 'translate-y-0');
      icon.classList.add('rotate-180');
    }
  });

  // close on outside click
  document.addEventListener('click', (e) => {
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove('opacity-100', 'visible', 'translate-y-0');
      menu.classList.add('opacity-0', 'invisible', 'translate-y-2');
      icon.classList.remove('rotate-180');
    }
  });
}

// if nav is inline on some pages, this will work too
document.addEventListener('DOMContentLoaded', initNavDropdown);

// ✅ when components.js finishes injecting nav.html
document.addEventListener('nav:ready', initNavDropdown);
