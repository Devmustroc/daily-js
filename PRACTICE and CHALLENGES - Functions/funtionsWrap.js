/**
 * Function Declarations: These are functions that are declared using the function keyword,
 * followed by the function name, and the function body. Example:
 */

function myFunction1() {
    // function code here
};


/**
 * Function Expressions: These are functions that are assigned to a variable.
 * The function can be anonymous or named. Example:
 */
const myFunction = function2() {
    // function code here
};


/**
 * Arrow Functions: These are a shorthand version of function expressions, introduced in ECMAScript 6.
 * They use the => operator to define the function. Example:
 */
const myFunction3 = () => {
    // function code here
};


/**
 * Async/Await: These are function that are declared as async, which allows them to use the 'await' keyword to wait for
 * the completion of a promise before continuing the execution. Example:
 */
async function myFunction4() {
    // function code here
};


/**
 * Generator Functions: These are special functions that can be paused
 * and resumed multiple times using the yield keyword. Example:
 */
function* myGenerator() {
    yield 1;
    yield 2;
    yield 3;
};

/*
 * Class Method : These are functions that are defined inside a class and can be
 *  called on an instance of the class. Example:
*/
class MyClass {
    myMethod() {
        // method code here
    }
};
