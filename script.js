
const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}
document.querySelectorAll('.mobile-menu a').forEach(a => a.addEventListener('click', () => {
  mobileMenu?.classList.remove('open');
  menuBtn?.setAttribute('aria-expanded', 'false');
}));

const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const status = document.querySelector('#form-status');
    status.style.display = 'block';
    status.textContent = 'This form is ready for a mail or form backend, but it is not connected yet. Add the verified DZS Labs business email or form endpoint before launch.';
  });
}
