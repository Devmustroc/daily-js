// function declaration

function greet(firstName = 'John', lastName = 'Doe') {

    return "Hello " + firstName + " " + lastName;
}

//console.log(greet("Samir", "Khan"));

// function expression

const square = function(x = 3) {
    return x * x;
};
//console.log(square(8));

// Immediately invokable function expression - IIFEs

/*
(function() {
    console.log("IIFE Ran...");
})();*/

/*
(function(name) {
    console.log("Hello " + name);
})("Samir");*/

// Property methods

const todo = {
    add: function() {
        console.log("Add todo...");
    },
    edit: function(id) {
        console.log(`Edit todo ${id}`);
    }
}
todo.delete = function() {
    console.log("delete todo...");
}
todo.delete()
todo.add()
todo.edit(22)
console.log(todo);