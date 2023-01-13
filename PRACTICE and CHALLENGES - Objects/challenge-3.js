/**
 * Example 3
 * Missing properties
 */
/*const myObject = {
    a : 3,
    b : true
};*/
// code execution is not stopped
// console.log(myObject.c); // undefined
// console.log(myObject.absentPropertyValue) // undefined

// code execution is stopped
// console.log(nonDeclaredVariable); // ReferenceError: nonDeclaredVariable is not defined

// IMPORTANT !!!!
// myObject.newPropertyValue = undefined;
// console.log(myObject.newPropertyValue); //Never assign undefined value for a variable { important } using null is better

/**
 * Challenge 3
 *
 * Create object "objectWithNestedObject" with initial value {}
 * Add property "nestedObject" with initial value {}.
 * add property "a" with value "null" to "nestedObject" Using dot notation.
 * Add property "b" with value "true" to "nestedObject" Using bracket notation.
 * Create a new variable with property name
 */

let objectWithNestedObject = {};
objectWithNestedObject.nestedObject = {}
console.log(objectWithNestedObject);

objectWithNestedObject.nestedObject.a = null
objectWithNestedObject.nestedObject["b"] = true;
objectWithNestedObject.nestedObject["property" + "name"] = 10;
console.log(objectWithNestedObject);

console.log(objectWithNestedObject);



