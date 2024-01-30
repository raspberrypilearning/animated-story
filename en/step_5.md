## Animate text

In this step you will add a cool animation to the text to grab people's attention!

<iframe src="https://staging-editor.raspberrypi.org/en/embed/viewer/animated-story-step5" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

### Fix the garden image position

--- task ---

Add the `background-attachment: fixed` property to the `.garden` selector.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 68
line_highlights: 72
---

.garden {
  background-image: url("garden.jpeg");
  background-size: cover;
  background-position-y: bottom;
  background-attachment: fixed;
}

--- /code ---

**Click the Run button** to see your changes.

Scroll down to see the fixed garden image as a background with other content scrolling in front of it.

--- /task ---

### Add a heading

--- task ---

Open the `sammy.html` file.

Find the closing `</section>` tag.

Add the html for an h1 heading.

--- code ---
---
language: html
filename: sammy.html
line_numbers: true
line_number_start: 17
line_highlights: 21
---

    <main>
      <section class="garden">
        <div id="bounce">SCROLL DOWN</div>
      </section>
      <h1 id="hideBounce" class="heading">Sammy <br />The<br />Snail</h1>
    </main>

--- /code ---

**Click the Run button** to see your changes.

Scroll down to see the heading.

--- /task ---

### Add some story text

--- task ---

Add the story text after the h1 heading.

--- code ---
---
language: html
filename: sammy.html
line_numbers: true
line_number_start: 17
line_highlights: 22-24
---

    <main>
      <section class="garden">
        <div id="bounce">SCROLL DOWN</div>
      </section>
      <h1 id="hideBounce" class="heading">Sammy <br />The<br />Snail</h1>
      <p id="rise">
        On a bright and sunny day in the garden, Sammy the Snail woke up feeling curious. <br /><br />His shiny shell glistened as he slowly ventured beyond his usual path. Sammy wanted to see what lay beyond the familiar leaves and flowers. <br /><br />As he glided along, the tiny garden world seemed to unfold before him. <br /><br />Sammy discovered a patch of dew-kissed grass, sparkling like diamonds in the morning sun. Excitement filled him as he explored tiny tunnels and secret hideaways.<br /><br />The little snail's adventure brought a smile to his face. Sammy realized that even in the smallest corners of the garden, there were secrets to be found. <br /><br />Sammy continued his exploration, eager to uncover more wonders in his wonderful world.
      </p>
    </main>

--- /code ---

**Click the Run button** to see your changes.

Scroll down to see the story text.

--- /task ---

### Animate the text 

Create an animation to apply to the story text.

--- task ---

Open the `style.css` file.

Find the `/* ANIMATIONS */` comment.

Add a keyframes animation called `rising`.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 45
line_highlights: 47-55
---

/* ANIMATIONS */

@keyframes rising {
  from {
    transform: translateY(20%);
  }
  to {
    transform: translateY(0%);
  }
}

@keyframes bounce {

--- /code ---

--- /task ---

Next, create a new selector to style the `<p>` element when it appears in the viewport.

--- task ---

Create the `.rise` selector.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 45
line_highlights: 47-50
---

/* ANIMATIONS */

.rise {
  animation: rising 2s ease;
}

@keyframes rising {

--- /code ---

The selector has one `animation` property set to call the keyframes animation `rising` you created earlier. 

The animation is set to last for two seconds (`2s`) and use the `ease` transition.

**Tip:** You can add this anywhere in the css file, but it makes sense to add it close to the code for the keyframes animation.

--- /task ---

### Use JavaScript to trigger the animation

This animation will not be required on `index.html`.

You should create a new JavaScript file with scripts required by this page.

--- task ---

Create a new JavaScript file that will contain the scripts relevant to `sammy.html`.

+ **Click:** the '+ Add file' button

![The 'Add file' button.](images/addFile.png)

+ Name your new file `sammy.js` and click the 'Add file' button.

--- /task ---

You need to link your new file from the `sammy.html` page.

--- task ---

Open the `sammy.html` file.

Find the `<script>` element.

Add a new script element with the attribute `src="sammy.js"`

--- code ---
---
language: html
filename: sammy.html
line_numbers: true
line_number_start: 27
line_highlights: 28
---

  <script type="text/javascript" src="scripts.js"></script>
  <script type="text/javascript" src="sammy.js"></script>

--- /code ---

--- /task ---

In `sammy.html`, the `p` element has the `id="rise"` attribute.

You will now create a JavaScript intersection observer with a callback that adds the `rise` class to an element with the attribute `id="rise"` if it enters the viewport.

The JavaScript intersection observer will use this attribute to target the `p` element, so when it enters the viewport the `.rise` class can be added to it.

--- task ---

Open the file `sammy.js` you created earlier.

Add an intersection observer called `riseObserver`.

--- code ---
---
language: js
filename: sammy.js
line_numbers: true
line_number_start: 1
line_highlights:
---

// Rising text observer
const riseObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    entries[0].target.classList.add("rise");
  }
});
riseObserver.observe(document.getElementById("rise"));

--- /code ---

**Tip:** This intersection observer is similar to `bounceObserver` that you created in an earlier step. There are two main differences:
+ `riseObserver` watches for elements with the attribute `id="rise"`
+ `riseObserver` adds the `class=rise` to intersecting elements.

**Click the Run button** to see your changes.

**Test:** Scroll down to see the rising animation when the `p` text enters the viewport.

--- /task ---

Next you will add an animation to the heading and a different animation to an image.