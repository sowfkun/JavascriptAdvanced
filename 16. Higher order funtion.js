function debug(name) {
    return function (str) {
        console.log(`[${name}] ${str}`);
    }
}
const log = debug("Mouse");
log("Error happened");
// => debug function is higher order function

function waitAndRun(ms, func) {
    setTimeout(func, ms);
}

function run() {
    console.log("Running...")
}
waitAndRun(2000, run)
