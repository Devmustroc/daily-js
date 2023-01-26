// /**
// * EXAMPLE SCOPE 1
//  * Global scope
//  */
// var a = 10; // Global variable
// let b = true;  // let is block scoped
//
// console.log(a); // 10
// console.log(window.a); // 10
// console.log(window.b)  // undefined
//
// const c = "abc"; // const is block scoped
// console.log(c); // abc
// console.log(window.c); // undefined
//
// function foo(a) {
//     console.log(a); // 10
//     console.log(window.a); // 10
//     console.log(b); // true
//     console.log(window.b); // undefined
//     console.log(c); // abc
//     console.log(window.c); // undefined
// }
// console.log(foo);
// /**
//  * ƒ foo(a) {
//  *     console.log(a); // 10
//  * }
//  */
// console.log(window.foo);
// /**
//  * ƒ foo(a) {
//  *     console.log(a); // 10
//  * }
//  */
// foo();


// /**
//  * EXAMPLE SCOPE 2
//  *
//  * Function scope
//  */
// let e = NaN;
// const a = 5, b = 10;
//
// function foo(a, b ,e) {
//     const c = true;
//     console.log(a); //  undefined
//     console.log(b++); // undefined
//     console.log(c); // true
//     console.log(e); // Undefined
//     // console.log(d); // ReferenceError: d is not defined
// }
// foo(5 , 140, false)


/**
 * EXAMPLE SCOPE 3
 *
 * Scope chain
 */

// function sum(a, b) {
//     const c = 3;
//     function multiply(a, b) {
//         return a * b * c;
//     }
//     console.log(multiply(a, b));
//     return a + b;
// }
// const result = sum(5, 10);
// console.log(result); // 15

// /**
//  * EXAMPLE SCOPE 4
//  *
//  * Undeclared variables
//  */
// a = 10; // Global variable (not recommended) declared as a Var
// // console.log(a); // 10
//
// const myfun = function () {
//     b = 10;
//     console.log(b); // 20
// }
// myfun(); // 10
// console.log(b); // b is not defined

/**
 * EXAMPLE SCOPE 5
 *
 * Strict mode
 */
// "use strict";
// // a = 10; // ReferenceError: a is not defined
//
// function foo() {
//     b = 10; // ReferenceError: b is not defined
// }
// foo();

// /**
//  *
//  * EXAMPLE SCOPE 6
//  *
//  * Strict mode in function
//  */
//
// a = 10; // ReferenceError: a is not defined
//
// function foo() {
//     "use strict";
//     b = 10; // ReferenceError: b is not defined
// }
// foo();