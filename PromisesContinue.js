console.log("start of the file");

setTimeout(function timer1() {
    console.log("timer 1 done");    
}, 0);
for(let i=0;i<1000000000;i++){

}

let x=promise.resolve("sanket's promise");
x.then(function processPromise(value){
    console.log("whose promise ?",value);
});
setTimeout(function timer2(){
    console.log("timer 2 is done ");

},0);

console.log("end if the file");

//promise callback goes to microtask queue and setTimeout goes to callback queue and then to event loop and then to call stack and then to console.  
//promise is always executed first and then the setTimeout is executed.
// microtask queue is always executed first and then the callback queue is executed.(microtask queue has always given priority over callback queue)

function dummypromise(){
    return new promise (function f(resolve,reject){
        setTimeout(function () {
            resolve("timer's  promise ");
            
        }, 10000);
    })
}

console.log("start of the console");  //1
setTimeout(function timer1()  {
    console.log("Timer 1 done");  //4
    let y=dummypromise(); 
    y.then(function PromiseY(value){
        console.log("whose promise ?",value);  //5
    });
    
}, 0);

let p= x=promise.resolve("sanket's promise");
p.then(function processPromise(value){
    console.log("whose promise ?",value);  //3
});
setTimeout(function timer2(){
    console.log("timer 2 is done ");  //6

},0);
console.log("end of the file");  //2

//promise callback goes to microtask queue and setTimeout goes to callback queue and then to event loop and then to call stack and then to console.

function dummypromise(){
    return new Promise(function f(resolve, reject){
        setTimeout(function () {
            resolve("timer's promise");
        }, 0);
    });
}

console.log("start of the console");  //1
// 1. "start of the console" is logged immediately, call stack is empty after this.

setTimeout(function timer1() {
    console.log("Timer 1 done");  //4
    let y = dummypromise(); 
    y.then(function PromiseY(value){
        console.log("whose promise?", value);  //6
    });
}, 0);
// 2. timer1 is scheduled and placed in the task queue.

let p = x = Promise.resolve("sanket's promise");
p.then(function processPromise(value){
    console.log("whose promise?", value);  //3
});
// 3. Promise.resolve is resolved immediately and its .then handler is placed in the microtask queue.

setTimeout(function timer2(){
    console.log("timer 2 is done");  //5
}, 0);
// 4. timer2 is scheduled and placed in the task queue.

console.log("end of the file");  //2
// 5. "end of the file" is logged immediately, call stack is empty after this.

// Event loop execution order:
// Call stack: [main script]
// Microtask queue: [processPromise]
// Task queue: [timer1, timer2]

// 6. Event loop checks microtask queue first.
// "whose promise?" "sanket's promise" is logged from processPromise.

// Microtask queue is now empty.
// Task queue: [timer1, timer2]

// 7. Event loop moves to the task queue and executes timer1.
// "Timer 1 done" is logged.

// 8. dummypromise function is called and schedules a setTimeout with 0ms.
// Task queue: [timer2, timer (from dummypromise)]

// 9. The promise returned by dummypromise resolves and its .then handler is placed in the microtask queue.
// Microtask queue: [PromiseY]
// Task queue: [timer2, timer (from dummypromise)]

// 10. Event loop checks microtask queue.
// "whose promise?" "timer's promise" is logged from PromiseY.

// Microtask queue is now empty.
// Task queue: [timer2, timer (from dummypromise)]

// 11. Event loop moves to the task queue and executes timer2.
// "timer 2 is done" is logged.

// Call stack is empty, microtask queue is empty, task queue is empty. Execution is complete.





