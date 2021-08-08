// value type
let a1 = 1;
let a2 = 1;
console.log(a1 === a2); // => true
    // => store value 

// reference type
let obj1 = {a: 1};
let obj2 = {a: 1};
console.log(obj1 === obj2); // => false
    // => store address of the value

let a3 = a2;
a3 = 2;
console.log(a2); // => still 1;
    // just copy value from a2 to a3
    // change a3 not make any effect to a2

let obj3 = obj2;
obj3.a = 2;
console.log(obj2) // => obj2 change to 2
    // both obj2 and obj3 are reference to 1 address
    // obj3 change, obj2 change too 