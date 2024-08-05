// A function expression is a way to define a function in JavaScript and other programming languages. Unlike a function declaration, a function expression can be stored in a variable, passed as an argument to another function, or returned from another function. Here's a basic example of a function expression in JavaScript:
// Function Expression
const add = function(a, b) {
    return a + b;
};

console.log(add(2, 3)); // Outputs: 5
// In this example, the function expression is stored in a variable called add. The function takes two arguments, a and b, and returns their sum. The add variable can now be used as a function, just like a regular function declaration.

// function expression are of two types:-
// 1. Named Function Expression
// 2. Anonymous Function Expression
// Anonymous function:1)it is hard to debug.

// e.g:-
function (){
    // body of function
}

// Nmaed function expression:-
// e.g:-
// Named Function Expression
const multiply = function multiply(a, b) {
    return a * b;
};

console.log(multiply(2, 3)); // Outputs: 6

/