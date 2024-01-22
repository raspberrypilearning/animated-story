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
        console.log(entry.target);
        setTimeout(
          () => (entry.target.src = entry.target.getAttribute("data-src")),
          1000
        );
        imageObserver.unobserve(entry.target);
      }
    },
    { threshold: 1 }
  );
});
lazyImages.forEach((lazyImage) => imageObserver.observe(lazyImage));

// Rising text observer
const riseObserver = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      console.log("RISE TRIGGER IN VIEWPORT");
      console.log(entry);
      entry.target.classList.add("rise");
    }
  },
  { rootMargin: "100% 0% 0% 0%" }
);
riseObserver.observe(document.getElementById("rise"));

// Header observer

// Snail observer
