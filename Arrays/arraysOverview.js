// arrays
//  arrays a special type of object that are used to store multiple values in a single variable.
// const myArray = [1, 2, 3, 4, 5];
// console.log(myArray); // [1, 2, 3, 4, 5]
//
// const myArray2 = new Array(1, 2, 3, 4, 5); //   new Array(5) => [empty × 5]

// console.log(myArray2)//   new Array(5) => [empty × 5]

//  array vs object
const myArray = [1, 2, 3, 4, 5]; // ==> 0:1, 1: 2, 2: 3, 3: 4, 4: 5 , length: 5, __proto__: Array(0)
const myObject = { a: 1, b: 2, c: 3, d: 4, e: 5, length: 4 }; // ==> a: 1, b: 2, c: 3, d: 4, e: 5, length: 4, __proto__: Object

// Difference between array and object is that __proto__ of array is Array(0) and __proto__ of object is Object

// Read Array Values

const myArray2 = [1, 2, 3, 4, 5];
console.log(myArray2);  // [1, 2, 3, 4, 5]
console.log(myArray2[0]); // 1
console.log(myArray2[1]); // 2
console.log(myArray2.length); // 5

//  Modify Array Values & Add Array Values

const myArray3 = [1, 2, 3, 4, 5];
console.log(myArray3); // [1, 2, 3, 4, 5]
console.log(myArray3[0]); // 1

myArray2[0] = 10;
myArray2[1] = 'New York';
console.log(myArray2); // [10, "New York", 3, 4, 5]
console.log(myArray2[1]); // New York
myArray2[3] = true;
console.log(myArray2[3]); // true
myArray3.push('Texas', 'California');
console.log(myArray3); // [10, "New York", 3, true, 5, "Texas", "California"]
console.log(myArray3.pop()); // California
console.log(myArray3); // [10, "New York", 3, true, 5, "Texas"]
