window.addEventListener('load', () => {
  const flower = document.getElementById('flower');
  const overlay = document.getElementById('overlay');
  const dashboard = document.getElementById('dashboard');

  // Bloom animation
  setTimeout(() => {
    flower.style.opacity = '1';
    flower.style.transform = 'scale(1)';
  }, 500);

  // Fade down and reveal dashboard
  setTimeout(() => {
    overlay.style.transform = 'translateY(100%)';
    overlay.style.opacity = '0';
    dashboard.style.display = 'block';
  }, 3000);
});
