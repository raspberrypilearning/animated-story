## Animate the story

In this step you will add an animation to the heading and a different animation to an image.

<iframe src="https://staging-editor.raspberrypi.org/en/embed/viewer/animated-story-complete" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

### Create a trigger

--- task ---

HTML

below </section> :
      <div id="headingTrigger"></div>

--- /task ---


### Toggle the animation

--- task ---

JS
// Heading observer
const headingObserver = new IntersectionObserver(([entry]) => {
  document
    .querySelector("h1")
    .classList.toggle("enabled", !entry.isIntersecting);
});
headingObserver.observe(document.getElementById("headingTrigger"));

--- /task ---

### Add an image for the character

--- task ---

HTML

    // below </p> :
      <section class="garden"></section>
      <div class="bottomImage">
        <img id="snail" class="snail" src="snail.svg" data-src="snail.svg" alt="" />
      </div>

**TODO** Add alt text (and to all images?)

--- /task ---

### Style the character image

--- task ---

CSS

.snail {
  opacity: 0;
  transform: translateX(-20%);
  transition: all 2s ease-out;
  transition-delay: 0.4s;
  height: 20vh;
  margin-top: 80vh;
  position: relative;
  padding-left: 0;
}

--- /task ---

### Create a startCrawl selector to show and move the character

--- task ---

CSS

.startCrawl {
  opacity: 1;
  transform: translateX(25%);
}

--- /task ---

### Trigger the startCrawl animation

--- task ---

JS

// Snail observer
const snailObserver = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      document.getElementById("snail").classList.add("startCrawl");
    }
  }
);
snailObserver.observe(document.getElementById("snail"));

--- /task ---

### Set a threshold

--- task ---

JS

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

--- /task ---
