## Observing elements

<div style="display: flex; flex-wrap: wrap">
<div style="flex-basis: 200px; flex-grow: 1; margin-right: 15px;">
You will use the 'Intersection observer' to observe an element and change the property of a different element.
</div>
<div>
Image, gif or video showing what they will achieve by the end of the step. ![](images/image.png){:width="300px"}
</div>
</div>

--- task ---

Open a [new Scratch project](http://rpf.io/scratch-new){:target="_blank"}. Scratch will open in another browser tab.

[[[working-offline]]]

--- /task ---

--- task ---

Code to Add:

HTML

CSS

JS

  const bounceObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      console.log("BOUNCE TRIGGER IN VIEWPORT");
      document.getElementById("bounce").style.opacity = 0;
    }
  });
  bounceObserver.observe(document.getElementById("hideBounce"));

Can use:
**Test:**
**Choose:**
**Tip:**

--- /task ---

--- save ---