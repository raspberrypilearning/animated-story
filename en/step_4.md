## Add a new page

In this step, you will add a new web page and navigation bar to your website.

<iframe src="https://staging-editor.raspberrypi.org/en/embed/viewer/animated-story-step4" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

### Add a navbar

If you have completed the welcome-to-antarctica project, then you will know how to create a navbar.

--- task ---

Another step of tasks to complete.

--- /task ---

--- task ---

Code to Add:

HTML // Add to index.html

    <nav class="navigation">
      <ul>
        <li><a href="index.html">Intro</a></li>
        <li><a href="sammy.html">Sammy</a></li>
      </ul>
    </nav>

    // Create sammy.html and then add to sammy.html :

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Animation test</title>
    <script type="text/javascript" src="scripts.js"></script>
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
</html>

CSS
.navigation {
  background-color: #49d4cf;
  top: 0;
  display: flex;
  flex-direction: column;
  position: fixed; // This one
  height: 100%;
  width: 20vw; // This one
  font-size: 3cqw;
  font-weight: 900;
}

main {
  padding-left: 20vw;
}

#bounce {
  padding: 0px;
  width: 80vw; // This one
  position: fixed;
  bottom: 0;
  text-align: center;
  color: white;
  font-size: 5cqw;
  text-shadow: 0 0 10px black;
  animation-duration: 1s;
  animation: bounce 1s infinite;
  opacity: 1;
}

p {
  font-size: 3cqh;
}


JS

Can use:
**Test:**
**Choose:**
**Tip:**

--- /task ---

--- save ---