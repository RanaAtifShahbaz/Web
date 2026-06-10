//Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code.
// Example 1

// console.log(a);
// var a = 10;
// console.log(a);

// Example 2
// console.log(a);
// let a = 10;
// console.log(a);

// Example 3
// console.log(a);
// const a = 10;

//  It will Also through an error because of the temporal dead zone (TDZ) which is a behavior in JavaScript where variables declared with let and const are not accessible until they have been initialized. This means that if you try to access a variable declared with let or const before it has been initialized, you will get a ReferenceError.

// Example 4
// greet();

// function greet() {
//   console.log("Hello");
// }
// Example 5
 greet();

var greet = function () {
  console.log("Hello");
};

// In this example, the function expression assigned to the variable greet is not hoisted, so when we try to call greet() before it is defined, it will result in a TypeError because greet is undefined at that point in the code.