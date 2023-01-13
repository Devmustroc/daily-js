/**
 * EXAMPLE 1
 * Simple function in JS
 */

/*
function myFun() {}
console.log(myFun);
myFun();
const funcResult = myFun();
console.log(funcResult); // Undefined
console.log(myFun()); // Undefined

console.log(myFun(10, true)); // Undefined
*/

/**
 * EXAMPLE - 2
 *
 * Parameters of the function
 */
function myFunc2 (a , b) {
    let c;
    c = a;
    a = b;
    b = c;
    console.log(a);
    console.log(b);
}

myFunc2(12, 5); // 5 12


myFunc2(true, null); // true null
myFunc2(); // undefined, undefined
console.log(myFunc2(4, 3)); // undefined