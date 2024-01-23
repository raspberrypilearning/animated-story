## Lazy-loading images

In this step, you will improve browser performance by only loading images when they are needed.

<iframe src="https://staging-editor.raspberrypi.org/en/embed/viewer/animated-story-step3" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

### Why lazy load?

Images can have large file sizes. 

When a web page loads, all images are loaded and this can use lots of bandwidth.

<p style="border-left: solid; border-width:10px; border-color: #0faeb0; background-color: aliceblue; padding: 10px;">
The amount of data (bits) that can be transferred over a computer connection is called the <span style="color: #0faeb0">**bandwidth**</span>. Using lots of bandwidth can cost people money, so reducing the use of bandwidth makes websites more user-friendly.
</p>

When the page loads, the only image that has to be loaded is `spinner.gif`.

This is because the `src` attribute for all image elements in `index.html` is set to to `spinner.gif`. 

### Add a new attribute to each image element

--- task ---

Open the `index.html` file.

For each `<img>` element, add a `data-src` attribute and set it's value to the correct image.

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

Click the **Run** button to see the changes you have made. 

All the images are still `spinner.gif`

--- /task ---

### Observe each image element

You can use JavaScript to observe each `<img>` element.

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

// Rising text observer

--- /code ---

The constant `lazyImages` holds an array of all `<img>` elements in the page (`document`).

--- /task ---

### Create the observer

Create an observer that observes all `<img>` elements in the `lazyImages` array and sees if they enter the viewport. 

If one of them does, the value of its `src` attribute (currently `spinner.gif`) is changed to the value of its `data-src` attribute (the image you want to load).

--- task ---

Create an observer called `imageObserver`. 

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 10
line_highlights: 12-23
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

// Rising text observer

--- /code ---

--- collapse ---

---
title: Why is there a setTimeout?
---

The imageObserver uses `setTimeout` with a value of `1000` (ms). This adds a one-second pause before the value of the `src` attribute is swapped for the value of the `data-src` attribute. 

If this was not there then the swap might happen too quickly for you to see!

--- /collapse ---

--- /task ---

### Call the observer

You need to observe all `<img>` elements stored in the `lazyImages` array.

--- task ---

Call `imageObserver` for each `<img>` entry in the `lazyImages` array.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 10
line_highlights: 24
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

// Rising text observer

--- /code ---

Click the **Run** button to see the changes you have made.

Scroll down and watch each image load when it enters the viewport (after a one-second pause).

--- /task ---

**Debug:**

Make sure it is `img`, not `<img>` in the brackets on line 11. 

Check there is a comma `,` after line 17. 

There is a semicolon `;` at end of lines 19, 22, 23 and 24.

### Stop observing

You should stop observing the image elements after their `src` attribute is changed to the value of their `data-src` attribute.

This avoids memory or performance issues.

--- task ---

Add the `unobserve()` method to the observer callback.

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

// Rising text observer

--- /code ---

--- /task ---

Next you are going to add a new web page to your website.