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

### Lazy load

You can use JavaScript to observe each `<img>` element and, when it enters the viewport, change the value of its `src` attribute (currently `spinner.gif`) to the value of its `data-src` attribute (the image you want to load).

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

The constant `lazyImages` is set to an array of all `<img>` elements in the page (`document`).

--- /task ---

Create an observer that checks all `<img>` elements in the array enters the viewport,  stored in the `lazyImages` array

--- task ---

Create an observer called `imageObserver`. 

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 10
line_highlights: 11-27
---

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

// Rising text observer

--- /code ---

Click the **Run** button to see the changes you have made.

When you scroll down, the message "BOUNCE TRIGGER IN VIEWPORT" will appear in the console.

--- /task ---

**TODO** DEBUG STEPS

**TODO** ...


You need to observe all `<img>` elements stored in the `lazyImages` array

--- task ---


**TODO** Get the order right.

Call `imageObserver` for each `<img>` entry in the `lazyImages` array.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 10
line_highlights: 27
---

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

--- /code ---

--- /task ---