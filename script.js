const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

yesBtn.addEventListener('click', () => {
  alert('¡Yo también te quiero, Claudia! ❤️');
});

noBtn.addEventListener('mouseover', () => {
  const x = Math.floor(Math.random() * window.innerWidth - noBtn.offsetWidth);
  const y = Math.floor(Math.random() * window.innerHeight - noBtn.offsetHeight);
  noBtn.style.position = 'absolute';
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});
