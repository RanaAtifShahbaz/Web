//When a function is defined inside another function, it captures a reference to the outer function's variables — this bundle of function + its captured environment is the closure.

function outerFunction() {
    let counter = 0; // This variable is captured by the inner function

    function innerFunction() {
        counter++; // Accessing and modifying the captured variable
        console.log(counter);
    }
    return innerFunction; // Returning the inner function, which forms a closure

}
const myClosure = outerFunction(); // myClosure now has access to the counter variable
myClosure(); // Output: 1
myClosure(); // Output: 2
myClosure(); // Output: 3