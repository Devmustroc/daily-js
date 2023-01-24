// Replacing elements

// Create Element
const newHeading = document.createElement('h2');    // Create element
// Add id

newHeading.id = 'task-title';   // Add id
// New text node
newHeading.appendChild(document.createTextNode('Task List'));   // Add text node

// Get the old heading
const oldHeading = document.getElementById('task-title');   // Get old heading

// Parent
const cardAction = document.querySelector('.card-action');  // Get parent

cardAction.replaceChild(newHeading, oldHeading);    // Replace

// console.log(newHeading);

// Remove element
const lis = document.querySelectorAll('li');    // Get all li
const list = document.querySelector('ul');  // Get ul

// Remove list item
lis[0].remove();    // Remove first li

// Remove Child element
list.removeChild(lis[3]);   // Remove 4th li

// Classes & Attributes
const firstli = document.querySelector("li:first-child");   // Get first li
const link = firstli.children[0];   // Get first li's child
//  Classes
let val;    // Declare variable
val = link.className;   // Get class name
val = link.classList;   // DOMTokenList
val = link.classList[0];    // first class
link.classList.add('test'); // add class
link.classList.remove('test');  // remove class
val = link;

// Attributes
val = link.getAttribute('href');    // get attribute
val = link.setAttribute('href', 'https://google.com');  // set attribute
link.setAttribute('title', 'google');   // set attribute
val = link.hasAttribute('title');   // check attribute
link.removeAttribute('title');  // remove attribute
val = link;   // log



console.log(val);