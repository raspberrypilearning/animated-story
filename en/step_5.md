## Animate text

<div style="display: flex; flex-wrap: wrap">
<div style="flex-basis: 200px; flex-grow: 1; margin-right: 15px;">
Add an introductory sentence. What will learners achieve by the end of this step?
</div>
<div>
Image, gif or video showing what they will achieve by the end of the step. ![](images/image.png){:width="300px"}
</div>
</div>

--- task ---

Another step of tasks to complete.

--- /task ---

--- task ---

Code to Add:

HTML // under </section>

      <h1 id="hideBounce" class="header">Sammy <br />The<br />Snail</h1>
      <p id="rise">
        On a bright and sunny day in the garden, Sammy the Snail woke up feeling
        curious. <br /><br />His shiny shell glistened as he slowly ventured
        beyond his usual path. Sammy wanted to see what lay beyond the familiar
        leaves and flowers. <br /><br />As he glided along, the tiny garden
        world seemed to unfold before him. <br /><br />Sammy discovered a patch
        of dew-kissed grass, sparkling like diamonds in the morning sun.
        Excitement filled him as he explored tiny tunnels and secret hideaways.
        <br /><br />The little snail's adventure brought a smile to his face.
        Sammy realized that even in the smallest corners of the garden, there
        were secrets to be found. <br /><br />Sammy continued his exploration,
        eager to uncover more wonders in his wonderful world.
      </p>

CSS
.garden {
  background-image: url("garden.jpeg");
  background-size: cover;
  background-attachment: fixed; //Add this
  background-position-y: bottom;
}

.rise {
  animation: rising 2s ease;
}

@keyframes rising {
  from {
    transform: translateY(20%);
  }
  to {
    transform: translateY(0%);
  }
}

JS
  // Rising text observer
  const riseObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        console.log("RISE TRIGGER IN VIEWPORT");
        console.log(entry);
        entry.target.classList.add("rise");
      }
    },
    { rootMargin: "100% 0% 0% 0%" }
  );
  riseObserver.observe(document.getElementById("rise"));


Can use:
**Test:**
**Choose:**
**Tip:**

--- /task ---

--- save ---