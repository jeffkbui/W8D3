// Javascript does not have implicit returns.
// You have to declare your variables.
// Use semicolons!
// user camelCase instead of snake_case
// == and === You should pretty much always use ===
// There is no negative indexing in JS
// JS has 7 falsey values; null, undefined, 0, NaN, "", -0, false

// You can write JS in a browser in dev tools.
// cmd+k opens the js window. 

// == explained:
// == tries to change the arguments into strings before comparing them.
// === works just like == in Ruby.

// == does type conversion beforehand whereas === does not.

// must declare variable using {const, let, var, global}
// Global probably doesn't need to be used.
// const declares a constant. You cannot change it after it is assigned.

const banana = "a yummy fruit";

banana = "mango"; //=> Cannot reassign a constant var.
// must assign a value to a constant when you declare it.

let fruit = "banana";

fruit = "mango"; //=> JS allows you to reassign let variables as you please.
// let also allows you to initialize a variable without assigning it.

// let and const are block scope. That means you can only have one variable of
// that name in that block.

function howToConst() {
  const username = "Harold";

  if (true) {
    const username = "Suzy";
    console.log(username);
  }

  console.log(username);
}

// outputs => Suzy Harold

// If you don't declare Suzy, you will print Harold twice.
// Scopes can look out but not in. It's called 'Lexical Scoping'
// avoid globally scoping variables.

function howToConst() {

  if (true) {
    const username = "Suzy";
    console.log(username);
  }

  console.log(username);
}

// This will print Suzy then throw an error.

function howToLet() {
  let secret = "I'm secretly a cat.";

  if (true) {
    secret = "I'm secretly a banana";
    console.log(secret);
  }
  console.log(secret);
}

// This prints banana twice
// If let had appeared inside the if statement, then it would have printed
// I'm secretly a banana then I'm secretly a cat.

function howToLet() {
  let secret = "I'm secretly a cat.";

  if (true) {
    secret = "I'm secretly a banana";
    console.log(secret);
    let secret = "Nope, definitely a cat"
  }
  console.log(secret);
}

// This will break because js will assume you're trying to use the variable
// before it's been initialized.
// This is called the temporal deadzone

// Look up hoisting in javascript.

function howToVar() {
  var username = "Harold";
  if (true) {
    var username = "Suzy";
    console.log(username);
  }
  console.log(username);
}

// Will log Suzy twice. Var is function scoped. Var lets you overwrite vars
// that occur above it.
// You can use var if you're a 'master' of these properties.

// Just don't use global variables. They're no bueno.

// DATATYPES

// primitives
// objects

// primitives are data types that don't have any methods associated with them.
// there are 7 primitives in JS.
// Boolean, 
// Null, 
// Undefined, 
// Number, 
// String, 
// Symbols(in ES6), 
// BigInt

// primitives are immutable.

// When you call a method on an object, JS will temporarily convert it to an 
// object so you can do things with it.

// OBJECTS
// Different than a ruby object.
// essentially just a big hash map
// are called Plain Old JavaScript Object (POJO)
// can have functions as values (called methods)
// can access object attributes with [] or . notation
// Example: Array

let myArray = [10, 20, 30];
myArray;
//=> (3) [10, 20, 30]
// 0: 10
// 1: 20
// 2: 30
// length: 3
// __proto__: Array(0) => will go back to this later.
myArray.length;
//=> 3
myArray["length"];
//=> 3
myArray[0];
//=> 10
// myArray.0 ;
//=> not a real thing.

console.dir(myArray);
//=> will show the properties of the array.

// FUNCTIONS
// Type of Object
// We can:
// Pass them around
// return them from other functions
// assign them to variables
// store them in data structures
// Types of functions
// Named Functions
// Variable Assignment Functions/Ananymous Functions
// Constructor Functions
// Constructor Function
// Used to create new functions
// similar to class definitions in ruby
// instance methods are added to the prototype of the object.

// DEMO

// Must have a script tag in HTML

// named function example
console.log(square(100))
// functions using the function keyword are hoisted
// this means that it get put at the top of the scope,
// so can be called anywhere.
function square(num) {
  return num * num;
}

// JS code will show up in the console in the browser.

const feedMe = function (food) {
  return `Thanks for the ${food}`; // This is called backticks, not interp.
}; // we don't need semicolons after curly braces unless you're assigning a function to a var. As such, you need it for this function, but not the one above it.

// need to be careful with variable assigned functions, because they will get
// hoisted weirdly.

// ES6 Arrow Function

const feedMe2 = (food) => {
  return `Thanks for the ${food}`
};

// Arrow functions allow for implicit return
// the stuff after the arrow acts like a Ruby block
const feedMe3 = (food) => `Thanks for the ${food}`; // if we add curly braces, 
// it will no longer have an implicit return.

// Constructor Function
// should always start with a capital letter

function User(username, age) {
  // before using this, (e.g. right here) a blank POJO will be created.
  // sets the properties of the function, similar to instance vars in ruby.
  this.username = username;
  this.age = age;
  // this is not the preferred way to add functions to these.

  // this.greet = function() {
  //   return "Hello, World!" ;
  // } ;

  // avoid doing this because we're making each instance have its own version
  // of the greet function. We can attach them to the prototype instead.
  // think of the prototype as a way to add instance methods.
}

// The following will add a function to the prototype, so this is basically
// creating an instance method. Do not use an arrow function here - it won't
// work. At least not well. 
User.prototype.greet = function () {
  return `Hello, ${this.username}`;
};

const Harold = new User("Harold", 10);
//=> creates an object with two properties.

// This

// How do we invoke functions?
// and what the heck is this!?

// 3 ways to invoke a function
// method style - has a receiver.
// car.drive() ;
// function style
// findsquareroot(36) ;
// construction style
// let harold = new User("Harold", 10) ;

// this
// like Ruby's self
// never implicit
// value of this referred to as the function's context and sometimes as the receiver.

// Demo 2

let harold = new User("Harold", 10);

// the receiver is the thing on the left side of the dot. (e.g. harold)
harold.greet();

// function square(num) {
//   return num * num;
// }

// The above is invoked using function style.
// this is the thing in the params of square
console.log(square(10));

// Callbacks

// funtion that is passed as an argument to another function (similar to a ruby proc)
// can be as simple as passing a function to forEach

// Demo 3

// forEach allows you to enumerate through an entire array, etc.

// function callBack(el) {
//   console.log(el + '!');
// }

// function screamEl(el) {
//   console.log(el + '!');
// }

const screamEl = (el) => {
  console.log(el + '!');
}


let a = [1, 2, 3];

// the argument in forEach MUST be a function.
// the function in the forEach callback MUST have an element for an arg.
// a callback is an argument type function
// a.forEach(callBack) ;

// a.forEach(screamEl);

a.forEach(el => console.log(el + '!'));

// to define our own function that requires a callback:

// this allows us to pass a function in to do whatever math we want on the nums.
// func is the callback in this function.
function doMath(num, func) {
  return func(num);
}

// this is how you pass in a callback to the doMath function.

let result = doMath(10, (num) => {
  return num * num;
});
// the above and below functions are the same, functionally.
let result2 = doMath(10, square);

console.log(result);
//=> 100

let res2 = doMath(10, (num) => {
  return num + num;
});

console.log(res2);

// Closures

// a function which accesses variables that were neither passed in nor
// defined inside that function.

// a function that captures free variables and 'closes' over them
// used to create a private state

// Demo 4

function feed() {
  const foodItems = ["banana"];
  // the below function is the closure
  return function (food) {
    foodItems.push(food);

    return `I have eaten ${foodItems.join(" and ")}`;
  };
}

const closure = feed(); // the return value is a function. The closure function
// gets returned.

console.log(closure("mango")); // closes around all of the vars in the surrounding scope.

// now closure will return => "I have eaten banana and mango"

const counter = () => {
  let count = 0;
  // the return value of the outer function is the inner function.
  return () => {
    count++;
    return `currently at ${count}`;

  };
};

// this was invoked in chrome:

const myCounter = counter();

// this will count as long as myCounter exists/is being used.