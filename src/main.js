const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  menuButton.textContent = open ? '[+]' : '[-]';
  navLinks.classList.toggle('visible', !open);
});

document.querySelectorAll('.nav-links a').forEach((link) => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.textContent = '[+]';
  navLinks.classList.remove('visible');
}));

document.querySelectorAll('.job-head').forEach((button) => {
  button.addEventListener('click', () => {
    const job = button.closest('.job');
    const willOpen = !job.classList.contains('open');
    document.querySelectorAll('.job').forEach((item) => {
      item.classList.remove('open');
      item.querySelector('.job-head').setAttribute('aria-expanded', 'false');
      item.querySelector('.marker').textContent = '[+]';
    });
    if (willOpen) {
      job.classList.add('open');
      button.setAttribute('aria-expanded', 'true');
      button.querySelector('.marker').textContent = '[-]';
    }
  });
});
