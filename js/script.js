

  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.getElementById('nav-links');

  mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
  });

  // CTA button example (alert for booking)
  document.querySelectorAll('.cta button').forEach(btn => {
    btn.addEventListener('click', () => {
      alert('Booking a call... (Replace with real form/modal)');
    });
  });
});