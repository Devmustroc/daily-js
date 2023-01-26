let  val;
const list = document.querySelector('ul.collection');  // ul with class collection
const listItem = document.querySelector('li.collection-item:first-child');  // li with class collection-item

val = listItem;
val = list;

// Get child nodes
val = list.childNodes;
val = list.childNodes[0];  // text node
val = list.childNodes[0].nodeName;  // #text
val = list.childNodes[3].nodeType;  // 1

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// Get children element nodes
val = list.children;  // HTMLCollection
val = list.children[1];  // li
val = list.children[1].textContent = "hello"; // change the text content of the second child
// Children of children
val = list.children[3].children[0].id = 'test-link';    // id of the link

// First child
val = list.firstChild; // text node
val = list.firstElementChild; // first element


// Last child
val = list.lastChild; // text node
val = list.lastElementChild; // last element

// Count child elements
val = list.childElementCount;   // 5

// Get parent node
val = listItem.parentNode // ul
val = listItem.parentElement; // same as above
val = listItem.parentElement.parentElement; // div

// Get next sibling
val = listItem.nextSibling; // text node
val = listItem.nextElementSibling; // next li
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling; // next li

// Get previous sibling
// val = listItem.previousSibling; // text node
// val = listItem.previousElementSibling; // null
// val = listItem.previousElementSibling.previousElementSibling; // null
console.log(val);