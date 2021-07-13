// The let keyword was introduced in ES6 (2015).
// Variables defined with let cannot be Redeclared.
// Variables defined with let must be Declared before use.
// Variables defined with let have Block Scope.

// Before ES6 (2015), JavaScript had only Global Scope and Function Scope.
// ES6 introduced two important new JavaScript keywords: let and const.
// These two keywords provide Block Scope in JavaScript.

// Variables declared inside a { } block cannot be accessed from outside the block:
{
  let x = 2;
}
// x can NOT be used here

// Variables declared with the var keyword can NOT have block scope.
// Variables declared inside a { } block can be accessed from outside the block.
{
  var x = 2;
}
// x CAN be used here


// Redeclaring a variable using the var keyword can impose problems.
// Redeclaring a variable inside a block will also redeclare the variable outside the block:
var x = 10;
// Here x is 10

{
var x = 2;
// Here x is 2
}

// Here x is 2
// Redeclaring a variable using the let keyword can solve this problem.
// Redeclaring a variable inside a block will not redeclare the variable outside the block:
let x = 10;
// Here x is 10

{
let x = 2;
// Here x is 2
}
// Here x is 10

//---------------------------
// The const keyword was introduced in ES6 (2015).
// Variables defined with const cannot be Redeclared.
// Variables defined with const cannot be Reassigned.
// Variables defined with const have Block Scope.

// JavaScript const variables must be assigned a value when they are declared:
// Correct
const PI = 3.14159265359;
// Incorrect
// const PI;
// PI = 3.14159265359;

// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];
// You can change an element:
cars[0] = "Toyota";
// You can add an element:
cars.push("Audi");


// But you can NOT reassign the array:
const cars = ["Saab", "Volvo", "BMW"];
cars = ["Toyota", "Volvo", "Audi"];    // ERROR

// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};
// You can change a property:
car.color = "red";
// You can add a property:
car.owner = "Johnson";

// But you can NOT reassign the object:
const car = {type:"Fiat", model:"500", color:"white"};
// car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR