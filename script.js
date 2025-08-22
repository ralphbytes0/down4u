// Envelope
const poems = [
  "Poem 1: Sa ilalim ng buwan, tahimik ang puso.",
  "Poem 2: You are not a burden, you are a bloom.",
  // Add more poems here
];

document.getElementById('reveal-poem').addEventListener('click', () => {
  const random = Math.floor(Math.random() * poems.length);
  document.getElementById('poem-display').textContent = poems[random];
});

// Flower Wall
document.getElementById('bloom').addEventListener('click', () => {
  const flower = document.createElement('div');
  flower.textContent = "🌸 A gentle thought blooms.";
  flower.style.margin = "0.5rem";
  document.getElementById('flowers').appendChild(flower);
});

// Letter Vault
document.getElementById('save-letter').addEventListener('click', () => {
  const text = document.getElementById('letter-input').value;
  if (text.trim()) {
    const li = document.createElement('li');
    li.textContent = text;
    document.getElementById('vault-list').appendChild(li);
    document.getElementById('letter-input').value = "";
  }
});

// Mirror Space
document.getElementById('reflect').addEventListener('click', () => {
  const input = document.getElementById('mirror-input').value;
  document.getElementById('reflection').textContent = `"${input}" — gently received.`;
});

// Vinyl Player
const player = document.getElementById('player');
const vinyls = document.querySelectorAll('.vinyl');

vinyls.forEach(button => {
  button.addEventListener('click', () => {
    const src = button.getAttribute('data-src');
    player.src = src;
    player.play();
  });
});
