const player = document.getElementById('audio-player');
const records = document.querySelectorAll('.vinyl');

records.forEach(record => {
  record.addEventListener('click', () => {
    const src = record.getAttribute('data-src');
    
    // If clicking the currently playing record, pause it
    if (player.src.includes(src) && !player.paused) {
      player.pause();
      record.classList.remove('playing');
      return;
    }
    
    // Pause any other record
    records.forEach(r => r.classList.remove('playing'));
    
    // Load and play the clicked track
    player.src = src;
    player.play();
    record.classList.add('playing');
  });
});

player.addEventListener('ended', () => {
  records.forEach(r => r.classList.remove('playing'));
});
