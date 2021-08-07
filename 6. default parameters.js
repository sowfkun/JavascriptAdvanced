// Default parameter for function
// If call function without params, use default params

function greeting(name = "friend") {
    return `Hi, ${name}`;
}
console.log(greeting()); // Default => Hi, friend
console.log(greeting("Truong")); // => Hi, Truong
