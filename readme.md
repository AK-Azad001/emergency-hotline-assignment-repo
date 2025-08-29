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
newDiv.innerHtml = `
    <div class="bg-slate-200  rounded-xl p-4 mt-3">
            <div>
                <h2 class=" font-bold">Bangladesh</h2>
            <p>Bangladesh is a beautiful country.I love my country very much. </p>
            </div> `
<!-- Append the new <div> to search section -->
searchElement.appendChild(newDiv);

3.What is Event Bubbling and how does it work?
 Ans:Event bubbling to go to root by triggered target element.
 suppose, below is a HTML file.if we click button,it will go to it's parent div,then div go to it's parent div,then div go to it's parent section,then section go to it's parent main,main go to it's parent body,body goes to html,html goes to document,document goes to window .
 If any parent element (or ancestor) has an event listener for that type of event, it will also be triggered. 
 <!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
</head>
<body>
<main>
    <section>
    <div>
  <h1></h1>
  <p></p>
    <div>
    <button></button>
    </div>
    </div>  
    </section>
</main>

</body>
</html>

4.What is Event Delegation in JavaScript? Why is it useful?
 Ans:Event delegation means adding event listener on parent elements.such as body,main section.
 then find the target element by using includes className.
 it is very powerful and useful for large number of elements.
 it improves both the performance and maintainability of our code.

5.What is the difference between preventDefault() and stopPropagation() methods?
 Ans:
    The difference between preventDefault() 
 and stopPropagation() methods:

 preventDefault() controls the default action of an event on the target element.

 stopPropagation() stops the event from propagating  through the DOM tree.