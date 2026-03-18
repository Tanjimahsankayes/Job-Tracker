## Questions and Answers

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer :-

getElementById : selects a single element by its unique ID.

getElementsByClassName : selects all elements with a given class and returns a live collection that updates with the DOM.

querySelector : selects the first element matching a CSS selector.

querySelectorAll : selects all matching elements and returns a static list.


### 2. How do you create and insert a new element into the DOM?
Answer :-

To add a new element, you first create it, then set its content or attributes, and finally insert it into the desired place in the DOM.

### 3. What is Event Bubbling? And how does it work?
Answer :-

Event bubbling occurs when an event on an element propagates upward through its parent elements in the DOM, triggering any event listeners on those ancestors.

### 4. What is Event Delegation in JavaScript? Why is it useful?
Answer :-

Event delegation is a technique where a parent element handles events for its child elements. It is useful because it reduces the number of event listeners and works with dynamically added elements.

### 5. What is the difference between preventDefault() and stopPropagation() methods?
Answer :-
preventDefault() : stops the browser’s default behavior for an event.

stopPropagation() :preventDefault() stops the browser’s default behavior for an event.

stopPropagation() prevents the event from bubbling up to parent elements. prevents the event from bubbling up to parent elements.
