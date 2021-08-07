// global context
// function context
// bind

var mouse = {
    name: "Mickey",
    sayHi: function(){
        console.log("Hi, my name is", this.name)
    }
}
mouse.sayHi(); // => Hi, my name is  Mickey
// Context of function sayHi is mouse
// this inside sayHi is mouse

var say = mouse.sayHi;
say();  
// context of this function is global context
// this inside function is not mouse anymore
// => log result is undefined

var sayWithBind = mouse.sayHi.bind(mouse);
sayWithBind(); // => Hi, my name is  Mickey
// the parameter of bind function will become the context for function (this)

var cat = {
    name: "Tom"
};
var sayWithBind = mouse.sayHi.bind(cat);
sayWithBind(); // => Hi, my name is  Tom