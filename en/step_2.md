## Observing elements

In this step, you will use the 'Intersection observer' to observe an element and use its position to affect a different element.

<iframe src="https://staging-editor.raspberrypi.org/en/embed/viewer/animated-story-step2" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

--- task ---

Open the [Animated story starter project](https://staging-editor.raspberrypi.org/en/projects/animated-story-starter){:target="_blank"}.

--- /task ---

Your starter project contains:
+ an HTML page with images and text
+ a CSS file that contains styling for some of the content
+ the images you will use in the project
+ a JavaScript file that you will develop throughout the project.

### Console log

The `console.log()` method is used to output messages that tell you what the JavaScript code is doing.

You can use `console.log()` for testing and debugging your code.

--- task ---

Open the Console.

**Tip:** Most browsers will let you right click on a page and 'Inspect' an element. 

This opens developer tools, including the Console.

Some helpful keyboard shortcuts:

+ Chrome: Ctrl + Shift + J (on Windows) or Cmd + Option + J (on a Mac)
+ Firefox: Ctrl + Shift + J (on Windows) or Cmd + Option + K (on a Mac)
+ Microsoft Edge: Control + Shift + I
+ Safari: First, enable the 'Develop menu'. To do this, click 'Safari' in the Mac menu bar and select 'Settings.' Click on 'Advanced', tick the checkbox next to 'Show features for web developers' and then close the window. You can now open the console using Cmd + Option + C.

--- /task ---

JavaScript can be used to watch ('observe') an array of HTML elements with a specific `id` or `class` attribute and output something to the Console when an observed element appears in the viewport.

<p style="border-left: solid; border-width:10px; border-color: #0faeb0; background-color: aliceblue; padding: 10px;">
A collection of items is called an <span style="color: #0faeb0">**array**</span>.
</p>

<p style="border-left: solid; border-width:10px; border-color: #0faeb0; background-color: aliceblue; padding: 10px;">
The <span style="color: #0faeb0">**viewport**</span> is the area of the web page that is currently visible in the browser.
</p>


### Create a new intersection observer called bounceObserver

Your `bounceObserver` is used to watch ('observe') an array of elements (`entries`).

--- task ---

Open the `scripts.js` file.

Create an observer called `bounceObserver`.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 1
line_highlights: 2-4
---

// Hide bounce observer
const bounceObserver = new IntersectionObserver((entries) => {

});

// Image observer

--- /code ---

**Tip:** Separate the different observers using a line break (in this case, on line 5).

--- /task ---

### Tell bounceObserver to observe

--- task ---

Call `bounceObserver` to `observe` all elements in the `document` (page) with the attribute `"id="hideBounce"`. 

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
  
});
bounceObserver.observe(document.getElementById("hideBounce"));

// Image observer

--- /code ---

**Tip:** The line break on line 3 will contain the callback.

<p style="border-left: solid; border-width:10px; border-color: #0faeb0; background-color: aliceblue; padding: 10px;"> The <span style="color: #0faeb0">**callback**</span> is the code that runs when the observer sees an element enter the viewport.
</p>

--- /task ---

### Create the callback

The callback will start by checking `if` the first element in the `entries` array (with the attribute `id="hideBounce"`) has entered the viewport. 

The `isIntersecting` method is used to check this.

**TODO ... For QA** Would an image help here (perhaps showing the page extending beyond bottom of the screen (viewport) with images below the viewport)?

--- task ---

Start the callback with a conditional statement.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 1
line_highlights: 3-5
---

// Hide bounce observer
const bounceObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {

  }
});
bounceObserver.observe(document.getElementById("hideBounce"));

// Image observer

--- /code ---
 
**Tip:** There is only one element in the entries array, so it is addressed directly using `entries[0]`.

--- /task ---

### Output something to Console

If the condition is met (the element with the attribute `id="hideBounce"` has entered the viewport), you can output a message to the Console for testing.

--- task ---

Add an action when the `if` condition is met that outputs a test message to the Console.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 1
line_highlights: 4
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
 
**Test:** 

+ Open the Console.
+ Click the **Run** button.
+ Scroll down and watch the Console.

The message "BOUNCE TRIGGER IN VIEWPORT" will appear in the Console.

--- /task ---

**Debug:**

+ Check your spelling of `IntersectionObserver`. It should have two capital letters.
+ There must be a semicolon at the end of lines 4, 6 and 7.
+ Close all your brackets and curly braces.

--- collapse ---

---
title: The structure of the bounceObserver intersection observer
---

On line 2, `entries` is a collection of all elements on the web page with the `id="hideBounce"` attribute. 

A collection of items is called an 'array'.

The `bounceObserver` is set to observe when the first (in this case: the only) item in the `entries` array comes into the viewport.

When it does, the observer 'callback' outputs a message to the Console.

--- /collapse ---

### Hide text

The index page has some bouncing text at the bottom telling you to 'SCROLL DOWN'.

--- task ---

**Test:** Scroll down. 

You will see that the 'SCROLL DOWN' text gets in the way of other content. 

--- /task --- 

You can do more than output messages to the Console.

You can hide the bouncing 'SCROLL DOWN' text, by changing the value of its `opacity` property.

--- task ---

Add an action when the `if` condition is met that changes the value of the `opacity` property of the bouncing text element, which has the attribute `id="bounce"`.

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

**Test:** 

+ Click the **Run** button.
+ Scroll down to see the bouncing text 'SCROLL DOWN' disappear!

--- /task ---

**Debug:**

+ There must be a semicolon at the end of line 5.

## Save your project

Your project is saved automatically. Return to the starter link in the same web browser to see your changes. 

Next you are going to improve browser performance by only loading images when they are needed.
