/**
 * EXAMPLE 1
 * Simple function in JS
 */

function myFun() {}
console.log(myFun);
myFun();
const funcResult = myFun();
console.log(funcResult); // Undefined
console.log(myFun()); // Undefined

console.log(myFun(10, true)); // Undefined