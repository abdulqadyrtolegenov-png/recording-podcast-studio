const root = document.documentElement;
const menuButton = document.querySelector('.menu-button');
const navLinks = document.getElementById('nav-links');
const themeButton = document.querySelector('.theme-button');
const form = document.getElementById('booking-form');
const status = document.getElementById('form-status');

menuButton.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

navLinks.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    navLinks.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }
});

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  const light = theme === 'light';
  themeButton.setAttribute('aria-pressed', String(light));
  themeButton.textContent = light ? 'Switch to dark neon theme' : 'Switch to light theme';
}

let saved = 'dark';
try { saved = localStorage.getItem('theme') || 'dark'; } catch (e) {}
applyTheme(saved);

themeButton.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  try { localStorage.setItem('theme', next); } catch (e) {}
});

const dateInput = document.getElementById('date');
dateInput.min = new Date().toISOString().split('T')[0];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  status.textContent = 'Request sent. We will contact you to confirm the time.';
  form.reset();
});
