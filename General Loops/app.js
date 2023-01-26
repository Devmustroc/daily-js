// FOR LOOP
/*
for (let i = 0; i < 10; i++) {
    if (i === 2) {
        console.log('2 is my favorite number');
        continue;
    }
    if (i === 8) {
        console.log("Stop the loop");
        break;
    }
    console.log('Number ' + i);
}*/

//While Loop

/*
let i = 0;
while (i < 10) {
    console.log('Number ' + i);
    i++;
}
*/

// do while loop

/*
let i = 100;
do {
    console.log('Number ' + i);
    i++;
}
while (i < 10);*/

// Loop through array

const cars = ['Ford', 'Chevy', 'Honda', 'Toyota', 'BMW', 'Mercedes', 'Audi', 'VW','Porsche','Ferrari'];
/*
for (let i = 0; i < cars.length; i++) {
    if (cars[i] === 'BMW') {
        console.log(cars[i] + " is my favorite car");
    }
}
*/
// For Each
/*
cars.forEach(function(car,index,array) {
    console.log(`${index} : ${car}`);
    console.log(array);
}*/

// Map
/*const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Sara' },
    { id: 3, name: 'Karen' },
    { id: 4, name: 'Steve' },
];
const ids = users.map(function (user){
    return user.id;
})
console.log(ids);*/

/*
const users = ["Samir", "Khan", 25, "New York", "Developer"];

users.forEach(function(user, index, array){
    console.log(`${index}: ${user}`)
    console.log(array[index]);
})*/
// For IN Loop
const user = {
    firstName: "Samir",
    lastName: "Khan",
    age: 25,
    email: "",
    hobbies: ['music', 'sports'],
    address: {
        city: 'New York',
        state: 'NY',
    },
    getBirthYear: function () {
        return 2019 - this.age;
    }
};
for (let x in user) {
    console.log(`${x} : ${user[x]}`);
}

