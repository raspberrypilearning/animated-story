// Hide bounce observer
const bounceObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    console.log("BOUNCE TRIGGER IN VIEWPORT");
    document.getElementById("bounce").style.opacity = 0;
  }
});
bounceObserver.observe(document.getElementById("hideBounce"));

// Image observer
const lazyImages = document.querySelectorAll("img");
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(
    (entry) => {
      if (entry.isIntersecting) {
        setTimeout(
          () => (entry.target.src = entry.target.getAttribute("data-src")),
          1000
        );
        imageObserver.unobserve(entry.target);
      }
    }
  );
});
lazyImages.forEach((lazyImage) => imageObserver.observe(lazyImage));

// Rising text observer
const riseObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    entries[0].target.classList.add("rise");
  }
});
riseObserver.observe(document.getElementById("rise"));

// Heading observer
const headingObserver = new IntersectionObserver(([entry]) => {
  document
    .querySelector("h1")
    .classList.toggle("enabled", !entry.isIntersecting);
});
headingObserver.observe(document.getElementById("headingTrigger"));

// Snail observer
const snailObserver = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      document.getElementById("snail").classList.add("startCrawl");
    }
  },
  { threshold: 1 }
);
snailObserver.observe(document.getElementById("snail"));
