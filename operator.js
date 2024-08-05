console.log(2+3);
console.log(3-2);
console.log(10/2);
console.log(10%2);
console.log(3*2);


// Assigment operator
console.log(`Assignement operator`)
let x =12;
x +=2;
console.log(x)
x -=2;
console.log(x)
x *=4
console.log(x)
x /=2;
console.log(x)
x %=3
console.log(x)

// if i want the floor value of decimal then i have two way...

console.log(Math.floor(7/2));  //3 output  
console.log( parseInt(7/2) ); //3 output


// Logicla operator 
let v = true && true;   // true
let y = true && false;  // false
let z = false && false; // false

console.log(v); // Output: true
console.log(y); // Output: false
console.log(z); // Output: false

// Example with variables
let a = 5;
let b = 10;
console.log(a > 0 && b > 0); // Output: true
console.log(a > 0 && b < 0); // Output: false




let m = true || true;   // true
let n = true || false;  // true
let o = false || false; // false

console.log(m); // Output: true
console.log(n); // Output: true
console.log(o); // Output: false

// Example with variables
let q = 5;
let e = -10;
console.log(q > 0 || e > 0); // Output: true
console.log(q < 0 || e < 0); // Output: true

// 0 is treated as false 
// 1 is treated as true 
console.log(4 && 0);
console.log(4 || 0);
console.log(0 || 4);

// Bitwise Operators


let t = 5;  // binary: 0i01
let i= 3;  // binary: 0011

console.log(t & i);  // 1, because 0101 & 0011 is 0001
console.log(t | i);  // 7, because 0101 | 0011 is 0111
console.log(t ^ i);  // 6, because 0101 ^ 0011 is 0110
console.log(~t);     // -6, because ~0101 is 1010 (in two's complement form)
console.log(t << 1); // 10, because 0101 << 1 is 1010
console.log(t >> 1); // 2, because 0101 >> 1 is 0010
console.log(t >>> 1);// 2, because 0101 >>> 1 is 0010

// String Concetanation 

console.log("hello"+"world"); //helloworld
console.log("hello"+2) //hello2

console.log(5+5+5+"5"+5+5); //15555

// Ternary Oerator
let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // Output: Yes
  










