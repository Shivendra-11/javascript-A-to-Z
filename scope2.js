// how js passes the code e

// so as we know js is not interpereted language so difinetly  is hybrid (compiled+interpeted)


// so whenever we try to execute a js code js first passes the whole code in this parsing phase where it just assign the function scope and global scope to each and every function and variable and then it reads the code and execute it...

// every variable in js code will be used in one of the following ways :-

// 1)Either it will be getting a value assigned it is used as a target.. const w=122;


// 2)Or it will be used as a source.. e.g:-let a=10
//                                         let b=a+10
//                                         here a is used as a source and b is used as a target    



// let know the difference between undefined and undeclared variable    
// undefined:-variable is declared but not assigned any value
// undeclared:-variable is not declared using let const or var

var teacher="sanket";
function fun(){
    var teacher="pulkit";
    console.log(teacher,teachingassitant);
    teachingassitant="vibhav";

    // here trachingassistant is undeclared variable so it will be considered as a global variable

}

function gun(){
    console.log(subject);
    var subject="js";
    console.log(teacher)
    // here subject is declared but not assigned any value in phase-1 which is parsing phase so it will be considered as undefined

}

console.log(teacher);
fun();  
gun(); //give error because it is not declared in the global scope


// how assignment change 

function tun(){
    teachingassistant="vibhav"; //global declaration    
    console.log(teachingassistant);
    var teachingassistant="sanket";//local variable 

}

tun(); //output:-vibhav

// so in the above example teachingassistant first in parsing phase the teachingassistant ias declared as a global variable and then in the execution phase it is declared as a local variable so it will print the global variable value


var fun=10;
function gun(){
    console.log("fun");
   
}
fun();
gun();

// in this example fun is assigned as number value and when we call it as a function it give us an error which is type error in javascrirpt-fun is not a function.
