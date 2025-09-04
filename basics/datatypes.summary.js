// PRIMITIVE

// 7 types : string , Number, Boolean, Undefined, Null, Symbol, BigInt

// REFERENCE TYPE / NON-PRIMITIVE

// Array , Objects, Functions

// SO JAVASCRIPT IS A DYNAMICALY LANGAUGE IT MEANS the type of a variable is determined at runtime, and you can reassign it to a different type later:

const score = 100;
const scoreValue = 200.1;

const siLoggedIn = false;
const outsideTem = null;

let userEmail; // like its define as a undefined value

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId);
