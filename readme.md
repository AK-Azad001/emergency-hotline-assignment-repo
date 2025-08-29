1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
 Ans:
  The difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll is below:
    1.getElementById is used to get that element has specific id.
    2.getElementsByClassName is used to get those elements have same class.
    3.querySelector is used to get the first element in the document that matches the provided CSS selector.
    4.querySelectorAll returns all elements in the document those matches the provided CSS selector.


2.How do you create and insert a new element into the DOM?
 Ans:
 suppose i create a new div for search section & it's id is:"search"
<!-- at first get where to use -->
 const searchElement=document.getElementById('search');
<!-- Create a new <div> element -->
 const newDiv = document.createElement('div');
 <!-- Add some content to the new element -->
newDiv.textContent = 'Hello, I am a new div!';
newDiv.style.color = 'green';
<!-- Append the new <div> to search section -->
searchElement.appendChild(newDiv);



3.What is Event Bubbling and how does it work?
 Ans:

4.What is Event Delegation in JavaScript? Why is it useful?
 Ans:

5.What is the difference between preventDefault() and stopPropagation() methods?
 Ans: