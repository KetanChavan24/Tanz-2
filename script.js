// Initialize carousel with 3.5s interval
$(document).ready(function () {
  $('#carouselExampleControls').carousel({
    interval: 3500,
    pause: 'hover'
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Feature box scroll animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('.feature-box').forEach(box => {
  observer.observe(box);
});

// Parallax background
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll('.parallax-bg');
  parallaxElements.forEach(el => {
    const speed = 0.4;
    el.style.transform = `translateY(${scrolled * speed}px)`;
  });
});
