1.  What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

'getElementById()' and 'querySelector()' are return a single element.Both return null if find nothing. For 'getElementById()' id must be unique, only one item can identify by getElementById().

Same class can be set in different place of code, but when we want to pick element from that class by use 'querySelector()' it will return only the first element.

'getElementsByClassName()' returns a HTML collection. It is like an array, can loop over collection. do not support forEach(),to work with forEach need to convert ir into an array.It updates automatically when any changes happen in DOM and provide the live result.

'querySelectorAll()' selects multiple items with one css selector. Return a NodeList and can loop over the list. It supports forEach loop and does not changes or updates DOM automatically.

2.  How do you create and insert a new element into the DOM?

step-1:
First select a parent tag where the created element will be inserted
const main = document.querySelector('main')

step2-: Create the element
const element = document.createElement('tagName')
element.innerHTML = `

<h2>Hello! Programming hero</h2>
`
step-3:
Insert the created element into parent element:
main.appendChild(element)

3.  What is Event Bubbling? And how does it work?

Event bubbling is the process where an event triggered on a target element and reach
to root level by checking immediate parent node from target phase.

Working process:
1.When a button click first it takes a capture from top-bottom of the code (capturing phase)
2.Then it reach to the target phase directly (target phase)
3.Finally, code works from bottom to top by checking one by one immediate node (bubbling phase)

4. What is Event Delegation in JavaScript? Why is it useful?

Event delegation is a process where an event controlled from the parent node of all children.In a event delegation a parent handle events for his child using event bubbling.

It is useful, becaus eit helps to reduce code. We do not need to handle multiple listener, many events can possible from a handler by tracing target phase.

5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() stops the default behavior of the browser where stopPropagation() stops the event from bubbling.
