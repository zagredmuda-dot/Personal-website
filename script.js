// Nav scroll
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });

  // Active nav link
  const sections = document.querySelectorAll('section[id]');
  const navAs = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let cur = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 140) cur = s.id; });
    navAs.forEach(a => {
      const isActive = a.getAttribute('href') === `#${cur}`;
      a.style.color = isActive ? 'var(--text)' : '';
    });
  });

  // Mobile toggle
  const toggler = document.getElementById('toggler');
  const icon = document.getElementById('toggleIcon');
  toggler.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
    icon.className = document.body.classList.contains('nav-open') ? 'fas fa-times' : 'fas fa-bars';
  });

  // Close nav on link click
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => {
      document.body.classList.remove('nav-open');
      icon.className = 'fas fa-bars';
    });
  });

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 65);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -45px 0px' });
  reveals.forEach(el => obs.observe(el));

  // Form submit
 function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.fsub');
  const formData = new FormData(e.target);

  fetch(e.target.action, {
    method: 'POST',
    body: formData,
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    if (response.ok) {
      btn.textContent = 'Sent ✓';
      btn.style.background = 'var(--accent2)';
      setTimeout(() => {
        btn.textContent = 'Send Message →';
        btn.style.background = '';
        e.target.reset();
      }, 3000);
    }
  });
}