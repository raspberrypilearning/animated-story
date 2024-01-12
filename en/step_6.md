## Animate the story

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

HTML // below </section> :
      <div id="headerTrigger" class="headerTrigger"></div>

    // below </p> :
      <section class="garden"></section>
      <div class="bottomImage">
        <img
          id="snail"
          class="snail"
          src="snail.svg"
          data-src="snail.svg"
          alt=""
        />
      </div>

CSS

.snail {
  opacity: 0;
  transform: translateX(-20%);
  transition: all 2s ease-out;
  transition-delay: 0.4s;
  height: 20vh;
  margin-top: 80vh;
  position: relative;
  padding-left: 0;
}

.startCrawl {
  opacity: 1;
  transform: translateX(25%);
}

JS
  // Header observer
  const headerObserver = new IntersectionObserver(([entry]) => {
    document
      .querySelector("h1")
      .classList.toggle("enabled", !entry.isIntersecting);
  });
  headerObserver.observe(document.getElementById("headerTrigger"));

  // Snail observer
  const snailObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        console.log("SNAIL!");
        document.getElementById("snail").classList.add("startCrawl");
      }
    },
    { threshold: 1 }
  );
  snailObserver.observe(document.getElementById("snail"));

Can use:
**Test:**
**Choose:**
**Tip:**

--- /task ---

--- save ---