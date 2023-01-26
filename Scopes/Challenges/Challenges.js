// /**
//  * Task 1
//  *
//  * Function Scopes
//  */
// const b = 2;
// d = 15;
// function myFn1(a) {
//     let b;
//     let d = 10;
//     myFn2(b);
// }
//
// function myFn2(a){
//     let c = 5;
//     console.log(a, b , c, d)
// }
//
// myFn1(); // undefined, 2, 5, 15


/**
 * Task 2
 *
 * Strict Mode
 */
//
// "use strict";
// let a;
// function myFn1() {
//     a = 2;
//     return a;
// }
// myFn1(); // 2


/**
 * Task 3
 *
 * Callback functions
 */
setTimeout(function myfn() {
    console.log('Hello from myfn');
}, 2000);

myfn(); // ReferenceError: myfn is not defined