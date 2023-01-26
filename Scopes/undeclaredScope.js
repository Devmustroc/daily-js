// function foo() {
//     a = true;
//     console.log(a); // true
// }
//  //foo();
// console.log(a); // ReferenceError: a is not defined
// foo();
// console.log(a); // true

// Strict mode
"use strict";

function foo() {

    a = true;
    console.log(a); // ReferenceError: a is not defined
}
foo();
console.log(a); // ReferenceError: a is not defined