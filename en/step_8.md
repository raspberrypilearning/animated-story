## Upgrade your project

If you have time, you can: 

+ add another page for a second character from the `index.html` intro page
+ remove the `setTimeout` from `imageObserver`
+ improve browser performance by using `unobserve`.

--- collapse ---

---
title: Add the story page for Bella
---

--- task ---

+ **Click** the '+ Add file' button.

![The 'Add file' button.](images/addFile.png)

+ Name your new file `bella.html` and click the 'Add file' button.

--- /task ---

--- task ---

Open the file `sammy.html`. 

Select all the HTML (Ctrl + A).

Copy the selected HTML (Ctrl + C).

Open the `bella.html` file and paste the HTML into it (Ctrl + V).

--- /task ---

--- task ---

Change the page title.

--- code ---
---
language: html
filename: bella.html
line_numbers: true
line_number_start: 6
line_highlights: 
---

    <title>Bella</title>

--- /code ---

--- /task ---

--- task ---

Add the new link to the nav bar on **all three** HTML pages.

--- code ---
---
language: html
filename: 
line_numbers: true
line_number_start: 13
line_highlights: 15
---

      <a href="index.html">Intro</a>
      <a href="sammy.html">Sammy</a>  
      <a href="bella.html">Bella</a>

--- /code ---

--- /task ---

--- task ---

Open `bella.html`

Change the `<h1>` text:

--- code ---
---
language: html
filename: bella.html
line_numbers: true
line_number_start: 22
line_highlights: 
---

      <h1 id="hideBounce">Bella <br />The<br />Butterfly</h1>

--- /code ---

--- /task ---

--- task ---

Add story text about Bella the Butterfly. 

--- code ---
---
language: html
filename: bella.html
line_numbers: true
line_number_start: 23
line_highlights: 24
---

      <p>
      In a sunlit garden, Bella the Butterfly danced from bloom to bloom, her wings painted in dazzling colors of blue, orange, and pink.<br /><br />Each graceful flutter spread joy as she explored hidden corners, discovering the beauty that filled her tiny world.<br /><br />Encountering fellow butterflies, Bella joined in a butterfly ballet, creating a living masterpiece in the sky.<br /><br />The garden embraced her, transforming each moment into a celebration of life.<br /><br />Like Sammy the Snail, Bella realized that even in the smallest corners of their worlds, there were secrets and wonders waiting to be uncovered.<br /><br />In this sunlit paradise, Sammy and Bella's garden was filled with joy.
      </p>

--- /code ---

You can add your own story to make the page your own!

--- /task ---

--- task ---

Change the `<img>` element.

--- code ---
---
language: html
filename: bella.html
line_numbers: true
line_number_start: 27
line_highlights: 
---

        <img id="butterfly" class="butterfly" src="butterfly.png" data-src="butterfly.png" alt="A cartoon butterfly" />

--- /code ---

--- /task ---

You should create a new JavaScript file with scripts required by this page.

--- task ---

Create a new JavaScript file that will contain the scripts relevant to `bella.html`.

+ **Click** the '+ Add file' button

![The 'Add file' button.](images/addFile.png)

+ Name your new file `bella.js` and click the 'Add file' button.

--- /task ---

--- task ---

Open the `sammy.js` file.

Copy the contents of `sammy.js` to `bella.js`.

--- /task ---

--- task ---

Alter `snailObserver` to create `butterflyObserver`.

--- code ---
---
language: js
filename: bella.js
line_numbers: true
line_number_start: 16
line_highlights: 16, 17, 19, 24
---

// Butterfly observer
const butterflyObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    entries[0].target.classList.add("startFly");
  }
},
{ threshold: 1 }
);
butterflyObserver.observe(document.querySelector("#butterfly"));

--- /code ---

--- /task ---

You need to link the `bella.js` file from `bella.html`.

--- task ---

Open the `bella.html` file.

Change the `src` attribute of the second `<script>` element from `src="sammy.js"` to `src="bella.js"`.

--- code ---
---
language: html
filename: bella.html
line_numbers: true
line_number_start: 31
line_highlights: 32
---

  <script type="text/javascript" src="scripts.js"></script>
  <script type="text/javascript" src="bella.js"></script>

--- /code ---

--- /task ---

--- task ---

Open the `style.css` file and copy the `.snail` selector, then paste it underneath the `.startCrawl` selector.

Rename it `.butterfly`.

Add the `animation` property. 

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 107
line_highlights: 112, 121
---

.startCrawl {
  opacity: 1;
  transform: translateX(25%);
}

.butterfly {
  opacity: 0;
  transform: translateX(-20%);
  transition: all 2s ease-out;
  height: 20vh;
  width: 20vh;
  margin-top: 80vh;
  position: relative;
  padding-left: 0;
  animation: fly 3s infinite;
}

/* NAV BAR */

--- /code ---

--- /task ---

--- task ---

Add a new selector called `.startFly`.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 124
line_highlights: 124 - 128
---

.startFly {
  opacity: 1;
  animation: fly 2s infinite;
}

/* NAV BAR */

--- /code ---

--- /task ---

Create a new animation for Bella.

--- task ---

Find the `/* ANIMATIONS */` comment.

Add a new `@keyframes` animation called 'fly' to suit the butterfly character.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 51
line_highlights: 53 - 76
---

/* ANIMATIONS */

@keyframes fly {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(-10px);
  }
  10% {
    transform: translateY(-20px);
  }
  30% {
    transform: translateY(-10px);
  }
  40% {
    transform: translateY(-5px);
  }
  60% {
    transform: translateY(-20px);
  }
  70% {
    transform: translateY(-15px);
  }
}

--- /code ---

--- /task ---

--- /collapse ---


--- collapse ---

---
title: Remove setTimeout
---

You can remove the `setTimeout` in `imageObserver`, as you don't want people to see the spinner image if they don't have to.

--- task ---

Open the `scripts.js` file.

Remove `setTimeout`.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 10
line_highlights: 16
---

// Image observer
const lazyImages = document.querySelectorAll("img");
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(
    (entry) => {
      if (entry.isIntersecting) {
        entry.target.src = entry.target.getAttribute("data-src");
        imageObserver.unobserve(entry.target);
      }
    }
  );
});
lazyImages.forEach((lazyImage) => imageObserver.observe(lazyImage));

--- /code ---

--- /task ---

--- /collapse ---

--- collapse ---

---
title: Use unobserve to improve browser performance
---

You have used the `unobserve` method in `imageObserver`.

Add the `unobserve` method to other intersection observer callbacks.

--- task ---

Open the `scripts.js` file.

Add the `unobserve` method to the callback in `bounceObserver`.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 1
line_highlights: 6
---

// Hide bounce observer
const bounceObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    console.log("BOUNCE TRIGGER IN VIEWPORT");
    document.querySelector("#bounce").style.opacity = 0;
    bounceObserver.unobserve(entries[0].target);
  }
});
bounceObserver.observe(document.querySelector("#hideBounce"));

--- /code---

--- /task ---

--- task ---

Open the `sammy.js` file.

Add the `unobserve` method to the callback in `riseObserver`.

--- code ---
---
language: js
filename: sammy.js
line_numbers: true
line_number_start: 1
line_highlights: 5
---

// Rising text observer
const riseObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    entries[0].target.classList.add("rise");
    riseObserver.unobserve(entries[0].target);
  }
});
riseObserver.observe(document.querySelector("p"));

--- /code---

--- /task ---

--- task ---

Add the `unobserve` method to the callback in `snailObserver`.

--- code ---
---
language: js
filename: sammy.js
line_numbers: true
line_number_start: 16
line_highlights: 20
---

// Snail observer
const snailObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    entries[0].target.classList.add("startCrawl");
    snailObserver.unobserve(entries[0].target);
  }
},
{ threshold: 1 }
);
snailObserver.observe(document.querySelector("#snail"));

--- /code---

--- /task ---

--- task ---

Open the `bella.js` file.

Add the `unobserve` method to the callback in `riseObserver`.

--- code ---
---
language: js
filename: bella.js
line_numbers: true
line_number_start: 1
line_highlights: 5
---

// Rising text observer
const riseObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    entries[0].target.classList.add("rise");
    riseObserver.unobserve(entries[0].target);
  }
});
riseObserver.observe(document.querySelector("p"));

--- /code---

--- /task ---

--- task ---

Add the `unobserve` method to the callback in `butterflyObserver`.

--- code ---
---
language: js
filename: bella.js
line_numbers: true
line_number_start: 16
line_highlights: 20
---

// Butterfly observer
const butterflyObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    entries[0].target.classList.add("startFly");
    butterflyObserver.unobserve(entries[0].target);
  }
},
{ threshold: 1 }
);
butterflyObserver.observe(document.querySelector("#butterfly"));

--- /code---

--- /task ---

--- /collapse ---

--- collapse ---

---
title: See the upgraded project
---

<iframe src="https://staging-editor.raspberrypi.org/en/embed/viewer/animated-story-upgraded" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

You can see the [upgraded project files here](https://editor.raspberrypi.org/en/projects/animated-story-upgraded){:target="_blank"}.

--- /collapse ---