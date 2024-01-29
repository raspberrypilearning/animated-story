
--- question ---

---
legend: Question 3 of 3
---

How does the Intersection Observer react when an observed element enters or exits the viewport?

--- choices ---

- ( ) By changing the viewport width and height.

  --- feedback ---

  The Intersection Observer does not manipulate the viewport size directly. It handles visibility changes by reacting with one or more actions.
 
  --- /feedback ---

- ( ) By changing the CSS styles of the observed element.

  --- feedback ---

  Not quite. The Intersection Observer does not modify CSS styles directly; instead, it runs a specific action to allow you to handle the visibility changes.

  --- /feedback ---

- (x) By invoking a callback function.

  --- feedback ---
  
  Correct! The Intersection Observer notifies changes by invoking a callback function that you write when setting up the observer. This callback is triggered when the observed element enters or exits the viewport.
 
  --- /feedback ---

--- /choices ---

--- /question ---