function fun(x,fn){


    for(let i=0;i<x;i++){
        console.log(i);
    }   
    fn();
}   




fun(10,function dog(){
    console.log("print karo");
})

// map function 
var arr=[1,2,3,4,5];

var x=arr.map(function process(v,i){
    console.log(v,i);
    return v*2;
})
console.log(x);
console.log(arr);

// Map always return a new array    
// Filter always return a new array
// Reduce always return a single value
// map is hifher order function


let g=function process(){
    console.log("inside g");

}
function donr(){
    console.log("inside gun");
}

donr(2,g());

// in this case g() is called first and then donr() is called


// SetTime Out -JS

let id1=setTimeout(function execute(){

    console.log("i ma printed ")
},5000);


let id2=setTimeout(function execute2(){

    console.log("i ma printed 2");
    clearTimeout(id1);  
},1000);
// Settimeout return a unique id which can be used to clear the timeout
// now function execute is never called as we e=remove this by using cleartimeout
// clearTimeout is used to clear the timeout.
function greet() {
    console.log("Hello, world!");
}

// Call the greet function every 1000 milliseconds (1 second)
let intervalId = setInterval(greet, 10000);
// setinteral return a unique id which can be used to clear the interval
// steinterval take tow argument first is function and second is time in milliseconds
// clearInterval is used to clear the interval
 
setTimeout(function() {
    clearInterval(intervalId);
    console.log("Interval cleared");
}, 10000);

// in this case the greet function is called every 1 second and after 5 second the interval is cleared


