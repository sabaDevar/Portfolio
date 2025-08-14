// mobile nav
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle?.addEventListener('click', () => {
  const open = getComputedStyle(navLinks).display === 'block';
  navLinks.style.display = open ? 'none' : 'block';
  navToggle.setAttribute('aria-expanded', String(!open));
});

// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth'}); }
  });
});

// footer year
document.getElementById('year').textContent = new Date().getFullYear();

// (Optional) fake contact submission (replace with real endpoint later)
const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');
form?.addEventListener('submit', async (e)=>{
  e.preventDefault();
  statusEl.textContent = 'Sending…';
  await new Promise(r=>setTimeout(r,800));
  statusEl.textContent = 'Thanks! I will reply soon.';
  form.reset();
});
