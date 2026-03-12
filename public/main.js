// Countdown to March 12, 2026 9:00 AM EST
const target = new Date('2026-03-12T09:00:00-05:00').getTime();

function updateCountdown() {
  const now = Date.now();
  const diff = target - now;

  const hEl = document.getElementById('cd-h');
  const mEl = document.getElementById('cd-m');
  const sEl = document.getElementById('cd-s');

  if (!hEl) return;

  if (diff <= 0) {
    hEl.textContent = '00';
    mEl.textContent = '00';
    sEl.textContent = '00';
    document.querySelector('.countdown-label').textContent = '🎉 DOORS ARE OPEN!';
    return;
  }

  const totalSec = Math.floor(diff / 1000);
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;

  hEl.textContent = String(h).padStart(2, '0');
  mEl.textContent = String(m).padStart(2, '0');
  sEl.textContent = String(s).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id === '#') return;
    const el = document.querySelector(id);
    if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth' }); }
  });
});
