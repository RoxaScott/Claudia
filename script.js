const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const container = document.querySelector('.container');

yesBtn.addEventListener('click', () => {
  // Limpia el contenido de la página
  container.innerHTML = `
    <h1>¡Te Amo Mucho, Claudia! 💋</h1>
    <img src="besos.gif" alt="Beso para Claudia" />
  `;
});

noBtn.addEventListener('mouseover', () => {
  const x = Math.floor(Math.random() * window.innerWidth - noBtn.offsetWidth);
  const y = Math.floor(Math.random() * window.innerHeight - noBtn.offsetHeight);
  noBtn.style.position = 'absolute';
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

