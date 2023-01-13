/**
 * Challenge 2
 * Create variable "myObject" & add property "a" - 10.
 * "copyOfMyObject" and it's value should be myObject
 * add new property "b" with value false to the "copyOfMyObject".
 * print to the console "myObject" and "copyOfMyObject" & interpret result.
 */

let myObject = {};
myObject.a = 10;
console.log(myObject);
let copyOfMyObject = myObject;
copyOfMyObject.b = false;
console.log(myObject);
console.log(copyOfMyObject);
copyOfMyObject.c = 'pointers effect';
console.log(copyOfMyObject);
console.log(myObject);
delete copyOfMyObject.c;
console.log(copyOfMyObject);
console.log(myObject);