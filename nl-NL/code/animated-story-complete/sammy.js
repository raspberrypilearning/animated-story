// Stijgende tekst waarnemer
const riseObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    entries[0].target.classList.add('rise');
  }
});
riseObserver.observe(document.querySelector('p'));

// Kop waarnemer
const headingObserver = new IntersectionObserver((entries) => {
  document.querySelector('h1').classList.toggle('enabled', !entries[0].isIntersecting);
});
headingObserver.observe(document.querySelector('#headingTrigger'));

// Slak waarnemer
const snailObserver = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      entries[0].target.classList.add('startCrawl');
    }
  },
  {
    threshold: 1,
  }
);
snailObserver.observe(document.querySelector('#snail'));
