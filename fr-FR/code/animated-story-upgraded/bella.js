// Observateur de texte ascendant
const riseObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    entries[0].target.classList.add('rise');
    riseObserver.unobserve(entries[0].target);
  }
});
riseObserver.observe(document.querySelector('p'));

// Observateur de titre
const headingObserver = new IntersectionObserver((entries) => {
  document.querySelector('h1').classList.toggle('enabled', !entries[0].isIntersecting);
});
headingObserver.observe(document.querySelector('#headingTrigger'));

// Observateur de papillons
const butterflyObserver = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      entries[0].target.classList.add('startFly');
      butterflyObserver.unobserve(entries[0].target);
    }
  },
  {
    threshold: 1,
  }
);
butterflyObserver.observe(document.querySelector('#butterfly'));
