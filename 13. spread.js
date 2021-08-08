// 1. spread array
const a = [1, 2, 3];
const b = [0, ...a, 4];
const c = [0, a, 4];

console.log(b);
// spread get each item in a and make them become item in b

console.log(c);
// without spread, a is original array inside c

function sum(...numbers) {

}
sum(...a) // <=> sum(1, 2, 3)

// 2. spread object
const obj1 = {
    a: 1,
    b: 2,
    c: 3,
    d: { e: 10 }
}

// shallow clone
let obj2 = obj1;
// when obj2 is changed, obj1 is changed too

let obj3 = {};
for (let key in obj1) {
    obj3[key] = obj1[key];
}
obj3.b = 5;
console.log(obj3);
console.log(obj1);
// obj3 is changed, there is no effect to obj1
// but
obj3.d.e = 11;
console.log(obj3);
console.log(obj1);
// the obj inside obj1 is changed when obj3 is changed
// this is shallow clone

// use spread to deep clone
let spreadObj = {
    a: 1,
    b: 2,
    c: 3,
    d: { e: 10 }
}

let spreadObjClone = {
    ...spreadObj, // clone all property in spreadObj
    z: 100 // add new property
}
console.log(spreadObj);
console.log(spreadObjClone);
    // original object not changed