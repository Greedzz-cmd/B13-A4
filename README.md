1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: getElementById gives us an element by its ID. getElementByClassName gives us all the elements with a class name. And querySelector us the first the element with the mentioned CSS selector whereas instead of the first element querySelectorAll gives us all the elements.

2. How do you create and insert a new element into the DOM?

Ans: At first, we create a new element with the help of ".createElement()". Then we Add a content or an attribute. After that we append it to the element with the help of ".append()" or ".appendChild()"

3. What is Event Bubbling? And how does it work?

Ans: Event bubbling is when an event starts on the element you clicked and then bubbles up to its parent elements. Suppose we clicked on a button inside a div which is inside of the body. When the button is clicked, the event starts there and then bubbles up to the div and then to body and finally to the document.

4. What is Event Delegation in JavaScript? Why is it useful?

Ans: Event delegation is when we attach an event listener to a parent element instead of adding listeners to multiple child elements. It works because of event bubbling, the event bubbles up to the parent, and we handle it there.

5. What is the difference between preventDefault() and stopPropagation() methods?

Ans: preventDefault() stops the default browser behaviour whereas stopPropagation() stop an event from bubbling to parent element.
