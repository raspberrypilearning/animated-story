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