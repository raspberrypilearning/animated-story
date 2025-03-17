// Masquer le bounce observer
const bounceObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    console.log('BOUNCE TRIGGER DANS LA FENÊTRE D\'AFFICHAGE');
    document.querySelector('#bounce').style.opacity = 0;
    bounceObserver.unobserve(entries[0].target);
  }
});
bounceObserver.observe(document.querySelector('#hideBounce'));

// Observateur d'image
const lazyImages = document.querySelectorAll('img');
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => (entry.target.src = entry.target.getAttribute('data-src')), 1000);
      imageObserver.unobserve(entry.target);
    }
  });
});
lazyImages.forEach((lazyImage) => imageObserver.observe(lazyImage));
