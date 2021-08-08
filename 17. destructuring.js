// 1. destructuring array
const arr = [1, 2, 3, 4, 5];
var [a, b, c, d, e] = arr;
console.log(a, b, c, d, e);
// <=> a = 1, b = 2, c = 3, d = 4, e = 5

var [a, b] = arr;
console.log(a, b);
// <=> a = 1, b = 2

var [a, , , d] = arr;
console.log(a, d);
// <=> a = 1, d = 4

var [a, ...b] = arr;
console.log(a, b);
// <=> a = 1, b is array of all rest item except a

const arr2 = [1];
var [a, b = 20] = arr2;
console.log(a, b);
// <=> default b = 20

// 1. destructuring Object
const obj = {
    a: 1,
    b: 2,
    c: 3
}
var {a: x, b: y, c: z} = obj;
console.log(x, y, z);
// check a, b, c in obj and assign them for x, y, z

var {a: x, b: y, c: z} = obj;
console.log(x, y, z);