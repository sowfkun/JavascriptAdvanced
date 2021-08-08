// closure 
function sum(a, b) {
    const c = a + b;
    console.log(c);
    return c;
}

sum(1, 2);
// c will be released when function done

function sum2(a, b) {
    const c = a + b;

    return function () {
        console.log(c);
    };
}
sum2(1, 2);  // return function, c is calculated but not log
sum2(1, 2)(); // call function, log value of c

function debug(name) {
    return function (str) {
        console.log(`[${name}] ${str}`);
    }
}
const log = debug("Mouse");
log("Error happened");

