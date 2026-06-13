function outerFunction() {
//     let counter = 0; // This variable is captured by the inner function

//     function innerFunction() {
//         counter++; // Accessing and modifying the captured variable
//         console.log(counter);
//     }
//     return innerFunction; // Returning the inner function, which forms a closure

// }
// const myClosure = outerFunction(); // myClosure now has access to the counter variable
// myClosure(); // Output: 1
// myClosure(); // Output: 2
// myClosure(); // Output: 3


// // Example 2: A closure can also be used to create private variables and functions.

// function createCounter() {
//     let count = 0; // This variable is private to the closure
//     return function() {
//         count++;
//         return count;
//     };
// }
// const counter = createCounter();
// console.log(counter()); // Output: 1
// console.log(counter()); // Output: 2
// console.log(counter()); // Output: 3