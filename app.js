// Assignment 1: Array Operations

let fruits = [];

fruits.push("apple", "banana", "orange");
fruits.splice(0, 1);
fruits.push("grape")
fruits[1] = "pear"
console.log(fruits);

// Assignment 2: Object Operations

let person = {};
person.name = "John";
person.age = 30;
person.city = "New York";
delete person.age;
person.job = "Engineer";
person.city = "San Francisco";
console.log(person);

// Assignment 3: Array of Objects Operations

let cars = [];
cars.push(
    {make: "Toyota", model: "Campry", year: 2018},
    {make: "Toyota", model: "Campry", year: 2018},
    {make: "Toyota", model: "Campry", year: 2018}
);
cars.splice(0, 1);
cars[1].model = "Accord";
console.log(cars);
