## Add a new page

In this step, you will add a new web page and navigation bar to your website.

<iframe src="https://staging-editor.raspberrypi.org/en/embed/viewer/animated-story-step4" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

### Add a navbar

If you have completed the ***Welcome to antarctica*** project, then you will know how to create a navbar.

--- task ---

Open the `index.html` file.

Find the `<body>` tag.

Add the `<nav>` tags below it with an unordered list (`ul`) containing two list items (`li`) - one for each link to be shown in the navbar.

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 10
line_highlights: 11-16
---

  <body>
    <nav class="navigation">
      <ul>
        <li><a href="index.html">Intro</a></li>
        <li><a href="sammy.html">Sammy</a></li>
      </ul>
    </nav>
    <main>

--- /code ---

Click the **Run** button to see your changes. 

The navigation links will appear at the top.

--- /task ---

### Create a new webpage

--- task ---

**Click:** the '+ Add file' button.

![The 'Add file' button.](images/addFile.png)

Name your new file `sammy.html` and click the 'Add file' button.

--- /task ---

--- task ---

Add the html to `sammy.html`.

--- code ---
---
language: html
filename: sammy.html
line_numbers: true
line_number_start: 1
---

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sammy</title>
    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <nav class="navigation">
      <ul>
        <li><a href="index.html">Intro</a></li>
        <li><a href="sammy.html">Sammy</a></li>
      </ul>
    </nav>
    <main>
      <section class="garden">
        <div id="bounce">SCROLL DOWN</div>
      </section>
    </main>
  </body>
  <script type="text/javascript" src="scripts.js"></script>
</html>

--- /code ---

--- /task ---

### Position the navbar on the left

To make this website feel more like a book, you can place the navbar on the left.

--- task ---

Open the `style.css` file and find the `.navigation` selector

Add the `position` and `width` properties to the `.navigation` selector.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 72
line_highlights: 82-83
---

/* NAV BAR */

.navigation {
  background-color: #49d4cf;
  top: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  font-size: 3cqw;
  font-weight: 900;
  position: fixed;
  width: 20vw;
}

--- /code ---

**Click the Run button** to see your changes.

The navbar should be positioned on the left.

--- /task ---

The 'SCROLL DOWN' text is not centered any more because the navbar is styled to take up 20% of the width of the viewport (using the `width: 20vw` property).

--- task ---

Add a `padding-left` property to the `main` selector.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 14
line_highlights: 15
---

main {
  padding-left: 20vw;
}

--- /code ---

--- /task ---

You can change the width of an element so it stretches a percentage of the viewport width, rather than 100% of its parent element.

--- task ---

Change the width property of the `#bounce` selector to `80vw` (80% of the viewport width).

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 31
line_highlights: 32
---

#bounce {
  width: 80vw;
  position: fixed;
  bottom: 0;
  text-align: center;
  color: white;
  font-size: 5cqw;
  text-shadow: 0 0 10px black;
  animation: bounce 1s infinite;
}

--- /code ---

**Click the Run button** to see your changes.

The 'SCROLL DOWN' text should be positioned centrally.

--- /task ---

### Size the font with a container query

The font size is currently set to a fixed size of 50 pixels (`50px`).

You can use `cqh` instead of `px` to size elements.

--- task ---

Change the `font-size` property of the `p` selector to `3cqh`.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 60
line_highlights: 61
---

p {
  font-size: 3cqh;
  padding-left: 9vw;
}

--- /code ---

**Click the Run button** to see your changes.

Resize the **height** of the editor preview to see your font size change!

--- /task ---

--- collapse ---

---
title: What is cqh?
---

Container Query Height (cqh) are units that specify a size relative to the dimensions of an element's container element.

`1cqh` is 1% of the container's height. For example, if the container's height is 300px, then a value of `10cqh` on a property will be 30px.

One benefit of using `cqh` units rather than `px` (pixel units) for sizing elements is that elements will resize along with their container. This usually happens when you resize a browser window, or view a web page on a different screen.

--- /collapse ---

Your website is looking awesome! 

Next you will add a cool animation to the text to grab people's attention!