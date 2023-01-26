/**
 * Task 1
 *
 * Is it expression or statement?
 */

const myObject = {
    x: 10,
    y: true
};
// delete myObject.x;  // Expression Statement
// console.log(delete myObject.x); // Expression Statement // true
// console.log(delete myObject.y); // Expression Statement // true
// console.log(delete myObject.z); // Expression Statement //true


/**
 * Task 2
 *
 * What will be logged to the console?
 */
// function fn() {
//     console.log("Hello from fn");
//     return function (a) {
//         console.log(a);
//     }
// }
// fn() // Hello from fn
// (true) // true
//
// fn(); // Hello from fn
// (true) // No output

/**
 * Task 3
 *
 *  Explain why semicolon is added after the function expression
 */


function firstFunction(a , b) {
    return a + b;
} // Function Declaration
const secondFunction = function (a , b) {
    return a + b;
};  // Statement

const first = firstFunction(5,6); // Expression
const second = secondFunction(5,6); // Expression
console.log(first, second); // 11 11