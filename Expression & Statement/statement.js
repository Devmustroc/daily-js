/**
 * Statements
 */
let a; // Declaration Statement - variable declaration
a = 10; // Assignment Statement

function foo(a) {
    // Quick check that "return is a statement" (not an expression)
    // console.log(return b); // SyntaxError: Unexpected token 'return'
    return a;
} // Function Declaration Statement

foo(10); // Function Call Statement
console.log(foo(10)); // Function Call Statement

if (true) {
    console.log('Hello from if statement');
}  // If Statement

// Quick check that "if is a statement" (not an expression)

// console.log(if (true) {
//     console.log('Hello from if statement');
// })      // SyntaxError: Unexpected token 'if'
