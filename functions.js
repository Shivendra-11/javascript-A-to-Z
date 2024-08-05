  function fuc (x){
    console.log(x+10);
    return x*10;
}

let x=fuc(10);
console.log(fuc(10));


// In js if you dont return anything then after it return undefinfed 

// console.log() - it is a function 
//   unlike i java using void we cang return anything but in this case if we use void function tyoe then it return undefined 

// example 
console.log(console.log(5));
let p=console.log;
p(3);

// it will give undefined

console.log(console.log(console.log(10))) 

