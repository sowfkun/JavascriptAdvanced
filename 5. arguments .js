// arguments
// Array-like object

// 1. Array-like object
// normal array
const friends = ["a", "b", "c"];
for (let i = 0; i < friends.length; i++) {
    console.log(friends[i]);
}

// Array-like object
const obj = {
    0: "a",
    1: "b",
    2: "c",
    length: 3
};
// Key is index of value
// "length" property is number of items in obj
for (let i = 0; i < obj.length; i++) {
    console.log(obj[i]);
}


// 2. arguments 
function sum(a, b) { // function has 2 arguments
    return a + b;
}

function sum2() {
    console.log(arguments);

    // sum use loop
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
    // // transform argument into array
    // let numbers = Array.from(arguments);
    // return numbers.reduce(function(sum, num) {
    //     return sum + num;
    // }, 0) // sum start with 0
}

console.log(sum2(1, 2, 3, 4));
console.log(sum2(1, 2, 3, 4, 5));

// arguments is not defined but it is default inside function (not arrow function)
// arguments is array-like object
// arguments is include all parameters are pass into
// use for function not limit number of parameter

