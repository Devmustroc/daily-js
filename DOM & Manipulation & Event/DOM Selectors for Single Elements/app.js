// Document.getElementById()
/*console.log(document.getElementById('task-title'));*/
// Get things from the element
/*console.log(document.getElementById('task-title').id);*/
/*console.log(document.getElementById('task-title').className);*/

const taskTitle = document.getElementById('task-title');

// Change styling
taskTitle.style.background = 'black';
taskTitle.style.color = 'white'
taskTitle.style.padding = '5px';
taskTitle.style.borderRadius = '5px';
// document.getElementById('task-title').style.display = 'none';


// Change content
taskTitle.textContent = 'Todo List';
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = '<span style="color:White">Task List</span>';


// Document.querySelector()
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';
document.querySelector('li:nth-child(3)').style.color = 'Green'
document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';
document.querySelector('li:nth-child(odd)').style.background = "#ccc";
document.querySelector('li:nth-child(even)').style.background = "#f4f4f4";