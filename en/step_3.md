## Lazy-loading images

Improve browser performance by only loading images when they are needed.
<iframe src="https://staging-editor.raspberrypi.org/en/embed/viewer/animated-story-step3" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

--- task ---

Another step of tasks to complete.

--- /task ---

--- task ---

Code to Add:

HTML

CSS

JS

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

Can use:
**Test:**
**Choose:**
**Tip:**

--- /task ---

--- save ---