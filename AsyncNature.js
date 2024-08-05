// Javascript Async and Sync nature

// Async nature of Javascript is due to the event loop.
// Event loop is a mechanism that allows Javascript to perform non-blocking I/O operations.

// example :-
// console.log("start");
// setTimeout(() => {
//     console.log("We are in the timeout");   
// }, 5000);
// console.log("End");


// Sync nature of Javascript is due to the call stack.
// Call stack is a mechanism that allows Javascript to perform synchronous operations.
// example

console.log("start");
for(let i=0; i<10000; i++){
    // do nothing
    console.log(1)
}
console.log("End");


// mixed code

function process(){
    console.log("start");
    setTimeout(() => {
        console.log("We are in the timeout");   
    }, 5000);
    for(let i=0; i<10000; i++){
    }
    console.log("End");
}

process();
console.log("TaTa")

// The  setimeout is sent to event queue and once the call stack is empty then it execute the settimeout function
//  2) The settimeout function is executed after 5 seconds and it is sent to the call stack and executed.
// 3) The for loop is executed and then the end is printed.
// 4) The process function is executed and then the tata is printed.
// 5) The end is printed.
// 6) The we are in the timeout is printed.
// now settimeout is print at the lasif there any global code or task then it printed and at the end when call stack got empty then settimout is printed.

function process(){
    console.log("start");
    setTimeout(() => {
        console.log("We are in the timeout");   
    }, 0);
    for(let i=0; i<10000; i++){
    }
    console.log("End");
}

process();
console.log("TaTa")
// even after having the settimeout 0 sec the settimeout is printed at the end because the settimeout is sent to the event queue and once the call stack is empty then it execute the settimeout function
function fun(){
    SetTimeout(function(){
        console.log("1st")
    },7000);
    SetTimeout(function(){
        console.log("2nd")
    },5000);

    console.log("end");
    
}
for(let i=0;i<100000000000;i++){
    
}

setTimeout(() => {
    console.log("3rd")
}, 0);