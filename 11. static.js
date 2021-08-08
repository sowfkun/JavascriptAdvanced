class Foo {
    static someMethod() {
        console.log("some method");
    }

    anotherMethod() {
        console.log("another method")
    }
}

// static method can only be call by class itself
// instance of class can not call static method
Foo.someMethod();

const fooInstance = new Foo(); // an instance of class Foo
    //fooInstance.someMethod(); // => error

// normal method can only be call by Instance, class can not call
    //Foo.anotherMethod(); // => err
fooInstance.anotherMethod();