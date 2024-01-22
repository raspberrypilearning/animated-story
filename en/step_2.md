## Observing elements

In this step, you will use the 'Intersection observer' to observe an element and use its position to affect a different element.

<iframe src="https://staging-editor.raspberrypi.org/en/embed/viewer/animated-story-step2" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

--- task ---

Open the [Animated story starter project](https://staging-editor.raspberrypi.org/en/projects/animated-story-starter){:target="_blank"}.

--- /task ---

Your starter project contains:
+ an HTML page with `img` and `<p>` elements
+ a CSS file that contains styling for some of the content
+ the images you will use in the project
+ a JavaScript file that you will develop throughout the project.

### Console log

`console.log()` is used to output messages that tell you what the JavaScript code is doing.

You can use `console.log()` for testing and debugging your code.

--- task ---

**Tip** To open the Console:

Most browsers will let you right click on a page and 'Inspect' an element. This brings up developer tools, including the Console.

Some helpful keyboard shortcuts:

+ Chrome: Cmd + Option + J (on a Mac) or Ctrl + Shift + J (on Windows)
+ Firefox: Cmd + Option + K (on a Mac) or Ctrl + Shift + J (on Windows)
+ Microsoft Edge: Control + Shift + I
+ Safari: First, enable the 'Develop menu'. To do this, click 'Safari' in the Mac menu bar and select 'Settings.' Click on 'Advanced', tick the checkbox next to 'Show features for web developers' and then close the window.
You can now open the console using Cmd + Option + C.

--- /task ---

### Watch for something entering the viewport

JavaScript can be used to watch ('observe') html elements with a specific `id=` or `class=` attribute and output something to the Console when an observed element appears in the viewport.

<p style="border-left: solid; border-width:10px; border-color: #0faeb0; background-color: aliceblue; padding: 10px;">
The <span style="color: #0faeb0">**viewport**</span> is the area of the webpage that is currently visible in the browser.
</p>

--- task ---

Open the `scripts.js` file.

Create an observer called `bounceObsever`. 

It checks if an element with the attribute `id=hideBounce` has entered the viewport (`isIntersecting`).

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 1
line_highlights: 2-7
---

// Hide bounce observer
const bounceObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    console.log("BOUNCE TRIGGER IN VIEWPORT");
  }
});
bounceObserver.observe(document.getElementById("hideBounce"));

// Image observer

--- /code ---
 
**Tip:** Separate the different observer functions using a space.

Open the Console.

Click the **Run** button to see the changes you have made. 

When you scroll down, the message "BOUNCE TRIGGER IN VIEWPORT" will appear in the console.

--- /task ---

**TODO** DEBUG STEPS

**TODO** Add collapse explaining the structure of the observer

### Hide text

The index page has some bouncing text at the bottom telling you to 'SCROLL DOWN'.

--- task ---

Scroll down. You will see that the 'SCROLL DOWN' text gets in the way of other content. 

--- /task --- 

The element with the `id=hideBounce` has been used to trigger a `console.log()` message. It can also be used to hide the bouncing 'SCROLL DOWN' text, which has the attribute `id=bounce`.

--- task ---

Add the JavaScript code to change the value of the `opacity` property of the bouncing text.

Setting the opacity value to `0` makes it invisible.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 1
line_highlights: 5
---

// Hide bounce observer
const bounceObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    console.log("BOUNCE TRIGGER IN VIEWPORT");
    document.getElementById("bounce").style.opacity = 0;
  }
});
bounceObserver.observe(document.getElementById("hideBounce"));

// Image observer

--- /code ---

Click the **Run** button to see the changes you have made. 

When you scroll down, the bouncing text 'SCROLL DOWN' will disappear!

--- /task ---

**TODO** DEBUG steps

## Save your project

Your project is saved automatically. Return to the starter link in the same web browser to see your changes. 

Next you are going to improve browser performance by only loading images when they are needed.
