## Animate the story

In this step you will animate the heading and an image.

<iframe src="https://staging-editor.raspberrypi.org/en/embed/viewer/animated-story-complete" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

### Create a trigger

An empty `<div>` can be used as the trigger for the heading animation.

--- task ---

Open the `sammy.html` file.

Add a `<div>` above the `<h1>` and give it the attribute `id=headingTrigger`.

--- code ---
---
language: html
filename: sammy.html
line_numbers: true
line_number_start: 17
line_highlights: 21
---

      </section>
      <div id="headingTrigger"></div>
      <h1 id="hideBounce" class="heading">Sammy <br />The<br />Snail</h1>


--- /code ---

--- /task ---

### Toggle the animation

An intersection observer will watch for the `id` of the `<div>` you just made.

If the `<div>` **leaves** the viewport, the callback adds the `enabled` class to the `<div>`.

The toggle method is used to turn the effect on or off as the div leaves and enters the viewport.

--- task ---

Open the `scripts.js` file.

Create an intersection observer called `headingObserver`.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 35
line_highlights: 36-40
---

// Heading observer
const headingObserver = new IntersectionObserver((entries) => {
  document.querySelector("h1").classList.toggle("enabled", !entries[0].isIntersecting);
});
headingObserver.observe(document.getElementById("headingTrigger"));

// Snail observer

--- /code ---

--- collapse ---

---
title: Using the logical not operator
---

The logical not `!` operator is used with the `isIntersecting` method in the callback, so the `enabled` class is only added when the div is **not** in the viewport.

--- /collapse ---

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
