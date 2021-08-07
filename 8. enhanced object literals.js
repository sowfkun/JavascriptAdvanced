// 1. normal defined object

// constructor function
function Mouse(name) {
    this.name = name;
}
Mouse.prototype.run = function () {
    console.log(`${this.name} is running`);
}

const mickey = new Mouse("Mickey");
mickey.run();

// Object literals
const jerry = {
    name: 'Jerry',
    run: function () {
        console.log(`${this.name} is running`);
    }
};
jerry.run();

// 2. enhanced object literals
const objName = 'Tom';
const age = 10;
const cat = {
    objName,
    age,
    run() {
        console.log(`${this.objName} is running`);
    }
};
cat.run();

// key and value is the same "objName: objName", become => objName