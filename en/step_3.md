## Lazy-loading images

In this step, you will improve browser performance by only loading images when they are needed.

<iframe src="https://staging-editor.raspberrypi.org/en/embed/viewer/animated-story-step3" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

### Why lazy load?

Images can have large file sizes and can use most data when you access a web page.

When you open a web page, **all** the images on the page are loaded. This can use lots of bandwidth.

<p style="border-left: solid; border-width:10px; border-color: #0faeb0; background-color: aliceblue; padding: 10px;">
The amount of data (bits) that can be transferred over a computer connection is called the <span style="color: #0faeb0">**bandwidth**</span>. Using lots of bandwidth can make pages load slowly for people with poor connectivity, or cost more money. Reducing the use of bandwidth makes websites more accessible and user-friendly.
</p>

### Add a new attribute to each image element

The `src` attribute for all image elements in `index.html` is set to `spinner.gif`. 

This means that when the page loads, the only image that has to be loaded is `spinner.gif`.

--- task ---

Open the `index.html` file.

In each `<img>` element, add a `data-src` attribute and set its value to the relevant image.

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 10
line_highlights: 18, 22, 26, 30, 34
---

  <body>
    <main>
      <section class="garden">
        <div id="bounce">SCROLL DOWN</div>
      </section>
      <p id="hideBounce">
        Slowly but steadily, Sammy glides along, leaving behind a shiny trail as he explores the wonders of the garden.
      </p>
      <img src="spinner.gif" data-src="snail.svg" />
      <p>
        Meet Buzz Bee, a little explorer with yellow and black stripes who loves buzzing around flowers, collecting sweet nectar to make delicious honey.
      </p>
      <img src="spinner.gif" data-src="bee.png" />
      <p>
        Fluttering nearby is Bella, with her vibrant wings painted beautiful colours, she dances from flower to flower, bringing joy wherever she goes.
      </p>
      <img src="spinner.gif" data-src="butterfly.png" />
      <p>
        Then there's Lucy, a tiny red ladybug with black spots, who loves playing hide-and-seek in the garden.
      </p>
      <img src="spinner.gif" data-src="ladybug.png" />
      <p>
        Last but not least, there's Iggy, a mysterious friend who is always ready for a new adventure.
      </p>
      <img src="spinner.gif" data-src="insect.png" />
      <p>
        Together, they create a delightful group of friends, ready to embark on exciting journeys!
      </p>
    </main>
  </body>

--- /code ---

**Test:** 

+ Click the **Run** button.
+ Scroll down. Do you see the images you added?

All the images are still `spinner.gif`. This is because the `src` property sets the image to display.

--- /task ---

### Observe each image element

You can use JavaScript to observe every image on the page.

--- task ---

Open the `scripts.js` file.

Create a constant (`const`) called `lazyImages`.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 10
line_highlights: 11
---

// Image observer
const lazyImages = document.querySelectorAll("img");

--- /code ---

The constant `lazyImages` holds an array of all `<img>` elements in the page.

In the code, the page is called the `document`.

**Tip:** Separate the different observers using a line break (in this case, on line 12).

--- /task ---

### Create a new intersection observer called imageObserver

`imageObserver` is used to watch ('observe') an array of elements (`entries`).

--- task ---

Open the `scripts.js` file.

Create an observer called `imageObsever`.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 10
line_highlights: 12-14
---

// Image observer
const lazyImages = document.querySelectorAll("img");
const imageObserver = new IntersectionObserver((entries) => {

});

--- /code ---

**Tip:** The line break on line 13 will contain the callback.

--- /task ---

### Tell imageObserver to observe

Call `imageObserver` to `observe` each `<img>` element in the `document`.

--- task ---

Use a `forEach` loop to observe each image element (held in the `lazyImages` array).

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 10
line_highlights: 15
---

// Image observer
const lazyImages = document.querySelectorAll("img");
const imageObserver = new IntersectionObserver((entries) => {
  
});
lazyImages.forEach((lazyImage) => imageObserver.observe(lazyImage));

--- /code ---

--- /task ---

--- collapse ---

---
title: What is a forEach loop?
---

In JavaScript, a `forEach` loop is used to go through every item in an array and do something with each one.

--- /collapse ---

### Create the callback

The callback needs to check every image it has observed.

--- task ---

Use a `forEach` loop to call the action relevant to each image that the observer has 'observed'.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 10
line_highlights: 13-17
---

// Image observer
const lazyImages = document.querySelectorAll("img");
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(
    (entry) => {
      
    }
  );
});
lazyImages.forEach((lazyImage) => imageObserver.observe(lazyImage));

--- /code ---
 
 **Tip:** Unlike bounceObserver, imageObserver needs to check every entry in the array, so a `forEach` loop is required.

 **Tip:** The line break on line 15 will contain the action to be carried out on each observed image (`entry`).

--- /task ---

The `isIntersecting` method is used to check if an `<img>` element (`entry`) has entered the viewport. 

--- task ---

Create a conditional statement to check if an observed entry in the array is in the viewport.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 10
line_highlights: 15-17
---

// Image observer
const lazyImages = document.querySelectorAll("img");
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(
    (entry) => {
      if (entry.isIntersecting) {
        
      }
    }
  );
});
lazyImages.forEach((lazyImage) => imageObserver.observe(lazyImage));

--- /code ---

**Tip:** The line break on line 16 will contain the action to be carried out on an image (`entry`) that has entered the viewport.

--- /task ---

If an image in the array is in the viewport, the value of its `src` attribute (currently `spinner.gif`) is changed to the value of its `data-src` attribute (the image file you want to load).

--- task ---

Create the action to change the value of `src` to the value of `data-src`.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 10
line_highlights: 16-19
---

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
      }
    }
  );
});
lazyImages.forEach((lazyImage) => imageObserver.observe(lazyImage));

--- /code ---

--- collapse ---

---
title: Why is there a setTimeout?
---

The imageObserver uses `setTimeout` with a value of `1000` (ms). This adds a one-second pause before the value of the `src` attribute is swapped for the value of the `data-src` attribute. 

If this was not there then the swap might happen too quickly for you to see!

--- /collapse ---

**Test:** 

+ Click the **Run** button.
+ Scroll down and watch each image load when it enters the viewport (after a one-second pause).

--- /task ---

**Debug:**

+ Make sure it is `img`, not `<img>` in the brackets on line 11. 
+ Check there is a comma `,` after line 17. 
+ There is a semicolon `;` at end of lines 19, 22, 23 and 24.

### Stop observing

You should stop observing the image elements after their `src` attribute is changed to the value of their `data-src` attribute.

This avoids memory or performance issues.

--- task ---

Add the `unobserve()` method to the callback.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 10
line_highlights: 20
---

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

--- /code ---

**Tip:** On line 20, the `.target` property of the `entry` refers to the element being observed. It is the element that enters or exits the viewport and the one you want to stop tracking.

--- /task ---

Next you are going to add a new web page and navigation bar to your website.