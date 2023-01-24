// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//     console.log('Hello World');
//     // e.preventDefault();
// })

document.querySelector('.clear-tasks').addEventListener('click', onClick);
function onClick(e) {
    // console.log('Clicked');
    let val;
    val = e;
    // Event target element
    val = e.target;
    val = e.target.id;  // get id
    val = e.target.className;   // class name
    val = e.target.classList;   // class list

    e.target.innerText = "hello";

    // Event type
    val = e.type;   // click

    // Timestamp
    val = e.timeStamp;  //  157.00000000000003

    // Coords event relative to the window
    val = e.clientY;    //  100
    val = e.clientX;    //  100

    // Coords event relative to the element
    val = e.offsetY;    //  100
    val = e.offsetX;    //  100

    e.preventDefault()
    console.log(val);
}