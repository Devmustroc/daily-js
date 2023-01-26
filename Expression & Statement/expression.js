/**
 * EXPRESSIONS
 */
10
"abc"
5 + 3


// Immediately Invoked Function Expression (IIFE)
// ;(function(a) {
//     console.log(a);
// }) // Function Expression embedded in ()

// Imediately Invoked Function Expression
;(function() {
    console.log("Hello from IIFE");
})() // Function call is expression

let a;
a = 10  // Assignment Expression

// 5 = true // SyntaxError: Invalid left-hand side in assignment

4 <= 10 <= 20 || 5 // true - Logical Expression