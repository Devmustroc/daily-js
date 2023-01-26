let a;
let b;

function foo() {
    let b; // This is a different b than the one in the global scope
    a = true; // This is the global a
    b = 10; // This is the local b
    console.log(b); // 10
}
//foo(); // impure function
console.log(a); // undefined
console.log(b); // undefined


foo()
console.log(a); // true
console.log(b); // undefined