// Document getElementsByClassName

// const items = document.getElementsByClassName('collection-item');
// console.log(items); // all the elements with class collection-item
// /*console.log(items[0]);*/
// items[0].style.color= 'red';
// items[3].textContent = 'Hello'
//
// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
//
// console.log(listItems) // Only the elements with class collection-item inside ul

// Document getElementsByTagName

// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[4]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';
//
// // Convert HTML Collection into array
// lis = Array.from(lis);
//
// lis.reverse(); // reverse the order of the elements
//
// lis.forEach(function(li, index){
//     console.log(li.className);
//     li.textContent = `${index}: Hello`;
// })
// console.log(lis);

// Document querySelectorAll
const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function(item, index){
    item.textContent = `$index: Hello`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li, index){
    li.style.background = "grey";
});
liEven.forEach(function(li,index){
    li.style.background = "#f4f4f4";
});
/*for (let i = 0; i < liEven.length; i++) {
    liEven[i].style.background = "#f4f4f4";
}*/

console.log(items);