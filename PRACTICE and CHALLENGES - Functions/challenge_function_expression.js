/**
 * Example 1
 *
 * Declaring function expression "Declaring
 */

// it is not possible to use a function expression standalone
/* function () {}*/ // Uncaught SyntaxError: function statement requires a name

/**
 * Example 2
 * Assign function expression to the variable
 */
/*

const myFunc = function () {};
console.log(myFunc()); // undefined
console.log(myFunc); // [Function: myFunc] f () {}

*/

/*
* Example 3
* Callback Function
*
*/
/*
setTimeout(function () {
    console.log("Delayed message");
}, 3000);
*/

/**
 * Example 4
 *
 * call back function
 */

/*
let i  = 1;
setInterval(function() {
    console.log("Message logged each 1 second" + i);
    i++;
}, 1000);
*/

/**
 * JS-BASICS/CORE/CHALLENGE 01: SOLUTION - Function Expressions
 *
 * Use following built-in functions:
 * setTimeout
 * setInterval
 * clearInterval
 * Should print to the console ONLY 5 messages with interval 2 seconds
 * "Here is message number : 1"
 * "Here is message number : 2"
 * "Here is message number : 3"
 * "Here is message number : 4"
 * "Here is message number : 5"
 */
let i = 1;
const myInterval = setInterval(function (){
    console.log("Here is message number : " + i);
    i++;
}, 2000);
console.log(myInterval);
setTimeout(function() {
    clearInterval(myInterval);
}, 12000);
