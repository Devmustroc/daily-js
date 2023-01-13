/**
 * EXEAMPLE 1 - Create object and modify its properties
 */

let myObject;
myObject = {
    a : 10,
    b : "abc"
};

myObject.a = 15;
myObject.b = "def";
myObject.c = true;

delete myObject.b;

// console.log(myObject)


/**
 * Challenge 1
 * Create variable called "myPost"
 * Initial value should be {}
 * Add property called "postTitle" and value "Object is reference type
 * Add one more property "postLikes" with value 0
 * Add third property "shared" and set its value to 'false'
 * Increase value to the "postLikes" by 1
 * Delete property "shared"
 */

let myPost = {}

myPost.postTitle = "Object is reference type";
console.log(myPost);

myPost.postLikes = 0;
console.log(myPost);

myPost.shared = false;
console.log(myPost);

myPost.postLikes += 1;
console.log(myPost);

delete myPost.shared;
console.log(myPost);
