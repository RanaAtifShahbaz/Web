//Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code.
// Example 1

console.log(a);
var a = 10;
console.log(a);

// Example 2
console.log(a);
let a = 10;
console.log(a);