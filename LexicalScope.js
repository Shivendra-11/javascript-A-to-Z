var teacher="Sanket";
function fun(){
    var teacher="Sanket1";
    console.log(teacher);
}
fun();
// whenever we declare the variable using let const and var then js will looks for a formal declaration of the variable in the current scope if it finds it then it will use that variable otherwise it will go to the parent scope and look for the variable if it finds it then it will use that variable otherwise it will go to the global scope and look for the variable if it finds it then it will use that variable otherwise it will throw an error   

var teacher="Sanket";
function fun(){
    var teacher="Pulkit";
    teachingassistant="vibhav"
    console.log(teacher);
    console.log(teachingassistant);
}

fun();
console.log(teacher);
console.log(teachingassistant);


// teachingassistant has global scope because we have not used let const or var to declare it so it will be declared in the global scope

// Auto global variable:-in js we keep om searching the scope of the variable in outer scope and no where it, use automatically consider it in global so 
function example() {
    // This variable is implicitly global because it was not declared with var, let, or const
    implicitGlobal = "I'm global!";
  }
example();

// Autogloabal variable is not a good practice because it can lead to bugs in the code so always use let const or var to declare the variable
// In strict mode it will throw an error if we use the variable without declaring it using let const or var
// In non strict mode it will not throw an error and it will automatically consider it as a global variable

// In the above example teachingassistant is an auto global variable because we have not used let const or var to declare it so it will be declared in the global scope

// globalscope is assigned in execution phase
// autoglobal only work with targer variables
console.log("first+::")
var teacher="Sanket";
function fun(){
    var teacher="Pulkit";
    teachingassistant="vibhav"
    console.log(teacher);
    console.log(teachingassistant);
}
console.log(teachingassistant);
fun();
console.log(teacher);

// now global scope is assigned in the execution phase so it will not throw an error (Reference Error)and it will print undefined because it will not find the variable in the global scope

var teacher="sanket";
function fun(){
    var teacher="pulkit";
    console.log(teacher,teachingassitant);
    teachingassitant="vibhav";

}

function gun(){
    console.log(subject);
    var subject="js";
    console.log(teacher)

}

console.log(teacher);
fun();  
gun();