## Upgrade your project

<div style="display: flex; flex-wrap: wrap">
<div style="flex-basis: 200px; flex-grow: 1; margin-right: 15px;">

If you have time, you can add another page for a second character from the index.html intro page.

</div>
<div>
![](images/image.png){:width="300px"}
</div>
</div>

### Add a new page

**Click:** the '+ Add file' button

![The 'Add file' button.](images/addFile.png)

Name your new file `bella.html` and click the 'Add file' button.

Change the nav bar on all pages to include a new link:

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

Open the `style.css` file and copy the snail selector underneath the `.startCrawl` selector.

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

Find the `/* ANIMATIONS */` comment.

Add a new keyframes animation called 'fly' to suit the butterfly character.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 50
line_highlights: 52 - 67
---

/* ANIMATIONS */

@keyframes fly {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(30px);
  }
  60% {
    transform: translateY(-15px);
  }
}

--- /code ---



### Remove setTimeout

You can remove the setTimeout in imageObserver, as you don't want people to see the spinner image if they don't have to.

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

### Further improve performance

**TODO** Add the `unobserve` method to other intersection observer callbacks.

unobserve(entry.target);

--- collapse ---

---
title: Upgraded project
---

You can view the [upgraded project here](https://editor.raspberrypi.org/en/projects/animated-story-upgraded){:target="_blank"}.

--- /collapse ---