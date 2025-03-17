// Observateur de texte ascendant
const riseObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    entries[0].target.classList.add('rise');
  }
});
riseObserver.observe(document.querySelector('p'));
