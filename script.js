const coin = document.querySelector('.coin');
const block = document.querySelector('.blockimg');
const topnav = document.querySelector('.topnav');
let position = 0;
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    topnav.style.top = "0";
  } else {
    topnav.style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    root: null, // relative to the viewport
    rootMargin: '0px',
    threshold: 0.5 // Trigger when 50% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // Stop observing once animated
      }
    });
  }, observerOptions);

  const slideInElements = document.querySelectorAll('.slide-in-left, .slide-in-right');
  slideInElements.forEach(el => {
    observer.observe(el);
  });
});

 function animateCoin() {
    position += 50;
    if (position > 200) {
        position = 0;
    }
    coin.style.backgroundPosition = `-${position}px 0`;
}

block.addEventListener('click', function handler() {
    coin.style.display = 'block';
    coin.classList.add('up');
    setInterval(animateCoin, 100);
    block.removeEventListener('click', handler);
}); 