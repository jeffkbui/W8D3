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

const banana = "a yummy fruit" ;

banana = "mango" ; //=> Cannot reassign a constant var.
// must assign a value to a constant when you declare it.

let fruit = "banana" ;

fruit = "mango" ; //=> JS allows you to reassign let variables as you please.
// let also allows you to initialize a variable without assigning it.

// let and const are block scope. That means you can only have one variable of
// that name in that block.

function howToConst() {
  const username = "Harold" ;

  if (true) {
    const username = "Suzy" ;
    console.log(username) ;
  }

  console.log(username) ;
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
  let secret = "I'm secretly a cat." ;

  if (true) {
    secret = "I'm secretly a banana" ;
    console.log(secret) ;
  }
  console.log(secret) ;
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
  var username = "Harold" ;
  if (true) {
    var username = "Suzy" ;
    console.log(username) ;
  }
  console.log(username) ;
}

// Will log Suzy twice. Var is function scoped. Var lets you overwrite vars
// that occur above it.
// You can use var if you're a 'master' of these properties.

// Just don't use global variables. They're no bueno.