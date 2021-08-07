// call, apply
// function.call(this, argument1, argument2,...)
// function.apply(this, [argument1, argument2,...])

// 1. Call
function greeting() {
    console.log(`Hi! ${this.name}. I am ${this.age}`);
}

const cat = {
    name: 'Tom',
    age: '100'
}

greeting.call(cat);

// bind return a function
// call return value

// 2. Apply
function sum() {
    console.log(arguments)
    const numbers = Array.from(arguments);
    return numbers.reduce((sum, num) => sum + num, 0)
}

function average() {
    // don't know number of input Params
    const sumResult = sum.apply(null, arguments); // don't use context, so first param is null
    return sumResult / arguments.length;
}

console.log(average(1, 2, 3));