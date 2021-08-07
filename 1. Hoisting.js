// hoisting => A variable is defined below the line call it

console.log(x); 
// Error because x is not defined

console.log(y);
var y = 5;
// console will log undefined, not 5 
// because y is called before it is defined => hoisting

// when a hoisting happend
var y; // javascript will understand this line exist
console.log(y);
var y = 5;
