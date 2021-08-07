// // constructor function
// function Mouse(name) {
//     this.name = name;
// }
// Mouse.prototype.run = function () {
//     console.log(`${this.name} is running`);
// }


// 1. Class
class Mouse {
    constructor(name) {
        this.name = name;
    }

    run() {
        console.log(`${this.name} is running`);
    }

}
const mickey = new Mouse("Mickey");
mickey.run();

// 2. class inheritance
class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log("Eating...");
    }
}

// class bird inherit class Animal
class Bird extends Animal {
    fly() {
        console.log("Flying...");
    }
}
const bird = new Bird("Rio");
bird.fly();

// class Parrot inherit class Bird
class Parrot extends Bird {
    Speak() {
        console.log("Speaking...");
    }
}
const parrot = new Parrot("Rio");
parrot.Speak();

// 3. method overriding
class CoffeeMachine {
    makeCoffee() {
        console.log("making coffee...");
    }
}

// not override
class NotOverrideCoffeeMachine extends CoffeeMachine {

}
const notOverrideCoffeeMachine = new NotOverrideCoffeeMachine();
notOverrideCoffeeMachine.makeCoffee();

// override 
class OverrideCoffeeMachine extends CoffeeMachine {
    makeCoffee(cb) {
        console.log("making coffee...");
        cb();
    }
    // add a cb for method makeCoffee
}
const overrideCoffeeMachine = new OverrideCoffeeMachine();
overrideCoffeeMachine.makeCoffee(() => { console.log("call customer"); })