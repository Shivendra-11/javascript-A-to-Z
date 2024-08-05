// closure:- A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

// clsoure:-closure iss when a function remebers its lexical scope even after the function is executed outside that lexical scope.

// example:-

function outer() {
    let outerVar = "I am the outer variable";    // outer variable   
    function inner() {
        let innerVar = "I am the inner variable";    // inner variable
        console.log(outerVar);
        console.log(innerVar);
    }   // inner function   
    return inner;
}   // outer function
let innerFn = outer();

innerFn();

// The return value of outer() (which is the inner function) is assigned to innerFn. When innerFn is called, it logs the value of outerVar and innerVar to the console. This is an example of a closure because the inner function (inner) has access to the outer variable (outerVar) even after the outer function (outer) has finished executing.

// in this case the inner function is able to access the outer variable even after the outer function is executed.

function todo(task){
   console.log("todo Srarted");
    setTimeout(function log(){
        console.log("complete :",task)
    }, 5000);
    console.log("todo ended")
}

console.log("Started");
todo("assignements");
console.log("Ended");


function todo(task){
    console.log("todo Srarted");
     setTimeout(function log(){
         console.log("complete :",task)
     }, 5000);
     let task="assignement_2";
     console.log("todo ended")
 }
 
 console.log("Started");
 todo("assignements");
 console.log("Ended");  
// in this case the log function is able to access the task variable even after the todo function is executed.


