// arrow function expression
// fat arrow

function sum(a, b) {
    return a + b;
}
console.log(sum(1, 1));

var sum2 = function (a, b) {
    return a + b;
}
console.log(sum2(2, 1));

var sum3 = (a, b) => {
    return a + b;
}
console.log(sum3(3, 1));

var sum4 = (a, b) => a + b; // function have only 1 row
console.log(sum3(4, 1));

var square = (a) => a*a;
console.log(square(3));

var square2 = a => a*a; // only 1 parameter, () can be ignore
console.log(square2(3));

// different between normal function and arrow function
var a = {
    name: "AAA",
    run: function() {
        var run2 = function(){
            console.log(this.name)
        }; // can use "}.bind(a);" or "}.bind(this)" here
        run2(); // no context or context is global context
        // can use run2.bind(a) or run2.bind(this) here
    }
};
a.run(); // => undefined because this now is global context

var b = {
    name: "BBB",
    run: function() {
        var run2 = () => {
            console.log(this.name)
        };
        run2();
    }
};
b.run();

// arrow function don't have context
// "this" is the context of the nearest function before arrow function

