## Upgrade your project

<div style="display: flex; flex-wrap: wrap">
<div style="flex-basis: 200px; flex-grow: 1; margin-right: 15px;">

If you have time, you can: 
+ add another page for a second character from the index.html intro page
+ remove the setTimeout from imageObserver
+ improve browser performance by using unobserve.

</div>
<div>
![](images/image.png){:width="300px"}
</div>
</div>

### Add a new page

--- task ---

**Click:** the '+ Add file' button

![The 'Add file' button.](images/addFile.png)

Name your new file `bella.html` and click the 'Add file' button.

--- /task ---

--- task ---

Open the file `sammy.html` and copy all the html (Ctrl + C) 

Open the `bella.html` file and paste the html into it.

--- /task ---

--- task ---

Change the nav bar on **all three** pages to include a new link:

--- code ---
---
language: html
filename: 
line_numbers: false
line_number_start: 
line_highlights: 
---

      <ul>
        <li><a href="index.html">Intro</a></li>
        <li><a href="sammy.html">Sammy</a></li>
        <li><a href="bella.html">Bella</a></li>
      </ul>

--- /code ---

--- /task ---

--- task ---

Open `bella.html`

 Change the `<h1>` text:

--- code ---
---
language: html
filename: 
line_numbers: false
line_number_start: 
line_highlights: 
---

<h1 id="hideBounce" class="heading">Bella <br />The<br />Butterfly</h1>

--- /code ---

--- /task ---

--- task ---

Add story text about Bella the Butterfly. 

Create a new story to make the page your own!

--- code ---
---
language: html
filename: 
line_numbers: false
line_number_start: 
line_highlights: 
---

<p id="rise">
In a sunlit garden, Bella the Butterfly danced from bloom to bloom, her wings painted in dazzling colors of blue, orange, and pink.<br /><br />Each graceful flutter spread joy as she explored hidden corners, discovering the beauty that filled her tiny world.<br /><br />Encountering fellow butterflies, Bella joined in a butterfly ballet, creating a living masterpiece in the sky.<br /><br />The garden embraced her, transforming each moment into a celebration of life.<br /><br />Like Sammy the Snail, Bella realized that even in the smallest corners of their worlds, there were secrets and wonders waiting to be uncovered.<br /><br />In this sunlit paradise, Sammy and Bella's garden was filled with joy.
</p>

--- /code ---

--- /task ---

--- task ---

Add the image of Bella.

--- code ---
---
language: html
filename: 
line_numbers: false
line_number_start: 
line_highlights: 
---

<img id="butterfly" class="butterfly" src="butterfly.png" data-src="butterfly.png" alt="A cartoon butterfly" />

--- /code ---

--- /task ---

You should create a new JavaScript file with scripts required by this page.

--- task ---

Create a new JavaScript file that will contain the scripts relevant to `bella.html`.

+ **Click:** the '+ Add file' button

![The 'Add file' button.](images/addFile.png)

+ Name your new file `bella.js` and click the 'Add file' button.

--- /task ---

--- task ---

Open the `sammy.js` file.

Copy the contents of `sammy.js` to `bella.js`.

--- /task ---


--- task ---

Change `snailObserver` to `butterflyObserver`.

--- code ---
---
language: js
filename: bella.js
line_numbers: true
line_number_start: 15
line_highlights: 15, 16, 18, 23
---

// Butterfly observer
const butterflyObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    entries[0].target.classList.add("startFly");
  }
},
{ threshold: 1 }
);
butterflyObserver.observe(document.getElementById("butterfly"));

--- /code ---

--- /task ---

You need to link the `bella.js` file from `bella.html`.

--- task ---

Open the `bella.html` file.

Change the src attribute of the second script element from `src="sammy.js"` to `src="bella.js"`.

--- code ---
---
language: html
filename: bella.html
line_numbers: false
line_number_start:
line_highlights: 
---

  <script type="text/javascript" src="scripts.js"></script>
  <script type="text/javascript" src="bella.js"></script>

--- /task ---

--- task ---

Open the `style.css` file and copy the `.snail` selector, then paste it underneath the `.startCrawl` selector.

Rename it `.butterfly`.

Add two animation properties. 

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 106
line_highlights: 111, 120, 123
---

.startCrawl {
  opacity: 1;
  transform: translateX(25%);
}

.butterfly {
  opacity: 0;
  transform: translateX(-20%);
  transition: all 2s ease-out;
  transition-delay: 0.4s;
  height: 20vh;
  margin-top: 80vh;
  position: relative;
  padding-left: 0;
  animation-duration: 3s;
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
  transform: translateX(25%);
}

/* NAV BAR */

--- /code ---

--- /task ---

Create a new animation for Bella.

--- task ---

Find the `/* ANIMATIONS */` comment.

Add a new keyframes animation called 'fly' to suit the butterfly character.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 50
line_highlights: 52 - 75
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

### Remove setTimeout

You can remove the setTimeout in imageObserver, as you don't want people to see the spinner image if they don't have to.

--- task ---

Open the `scripts.js` file.

Remove setTimeout.

--- code ---
---
language: js
filename: scripts.js
line_numbers: false
line_number_start:
line_highlights:
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

// Rising text observer

--- /code ---

--- /task ---

### Further improve performance

**TODO** Add the `unobserve` method to other intersection observer callbacks.

unobserve(entry.target);

--- collapse ---

---
title: Upgraded project
---

You can view the [upgraded project here](https://editor.raspberrypi.org/en/projects/animated-story-upgraded){:target="_blank"}.

--- /collapse ---