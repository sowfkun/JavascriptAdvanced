function log(a, ...rest) {
    console.log(a);
    console.log(rest);
}

log(1, 2, 3, 4, 5);

// rest is an array of Params except param "a"
// similar to arguments, 
// but argument include param "a" and argument is an array-like object

function sum(...nums) {
    return nums.reduce((sum, num) => sum + num, 0);
}
console.log(sum(1, 2, 3));

function concat(seperator, ...rest) {
    return rest.join(seperator);
}
console.log(concat("/", "a", "b", "c")) // => a/b/c