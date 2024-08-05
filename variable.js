
let a = 10; // Block-scoped, can be reassigned
const b = 30; // Block-scoped, cannot be reassigned
var c = 44; // Function or globally scoped, can be reassigned

console.log(a, b, c); // Output: 10 30 44

if (true) {
    let a = 20; // New block-scoped variable
    const b = 40; // New block-scoped constant
    c = 558; // Overwrites the global 'c' within this function scope

    console.log(a, b, c); // Output: 20 40 55
}

console.log(a, b, c); // Output: 10 30 55 (a and b are unchanged, c is overwritten globally)





