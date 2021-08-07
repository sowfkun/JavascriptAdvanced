// var, let, const

// 1. Declaration
var a = 1;
let b = 2;
const c = 3;
console.log(a, b, c); // => 1 2 3

// Re-declaration
var a = 2;
console.log(a) // => 2 not 1

// // let and const can not re-declaration
// let b = 3; 
// const c =4;
// // => Error

// 2. Hoisting
function run() {
    console.log(x);
    var x = 1; // => hoisting

    // let x = 1;
    // const x = 1;
    // => Error, not hoisting
}

// 3. Block scope (if, for)
// let and const have Block scope
if (true){
    var y = 10;
}
console.log(y) // => 10
// declaration with var, variable can use outside block scope

if (true){
    let z = 10;
    const w = 10;
}
console.log(z, w) // => Error
// declaration with let and const, variable can only use inside block scope
// the same with for loop