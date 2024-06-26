// In JavaScript, scope refers to the context in which variables, functions, and objects are accessible within your code. It determines the visibility or accessibility of variables and other resources in different parts of your code


// we have three types of scope -global scope
                            // -local scope
                            //  -function 

                             
// 1.Global scope :-

// if a variable is present in a gloabal scope then it is accesible everywhere 

// Declaring a global variable
var globalVar = "I am a global variable";

function displayGlobalVar() {
  // Accessing the global variable inside a function
  console.log(globalVar); // Output: I am a global variable
}

displayGlobalVar(); // Calling the function to display the global variable

// Accessing the global variable outside the function
 console.log(console.log(globalVar))  // Output: I am a global variable


 function greet() {
    var x = 10;

    function fun() {
        console.log("can be accessed because it is function scoped:", x);
    }

    // Call the inner function 'fun' within 'greet'
    fun();
}

// Call the 'greet' function
greet();

// Block scope --we can write the curly bracket in the js for writing the block scope 

// {
// it is block 
// }

// Block scope in JavaScript refers to the scope of variables declared within a block statement, such as those inside curly braces {}. Variables declared with let or const inside a block are only accessible within that block. This contrasts with var, which does not provide block-level scope and is instead function-scoped.


// difference between function and  global scope 
// 1.if we declare the variale before declaring it then function scope give undefined but we have ti use the global scope insdide the declaration 
if(true){

    var x=22;
    console.log(x);
}

// or 

function fun(){
    // var x=55;
    console.log(x);

}

{
    var t=100;  //it become global due to var 

}


// Var scope in js with example

function func_1(){
    console.log(x); // undefined :-due to lexical scope 
    var x=33;

    console.log("Inside the function",x);
}
func_1();

console.log(x); //undefuned print var

// it is an example of function scope :-
if (false){
    var e=20;
}
console.log(e); //it give undefined due to lexical scoping 


// Let scope in js 

// i is declared with let inside the for loop.
// i is only accessible within the loop block.
// Trying to access i outside the loop results in a ReferenceError.
//  let doesnot allows us to redeclare
function leta(){
    let k=30;
    // console.log(x); print the x 
}
leta();
// console.log(k); not defined error 

