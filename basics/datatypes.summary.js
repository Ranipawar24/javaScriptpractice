// PRIMITIVE

// 7 types : string , Number, Boolean, Undefined, Null, Symbol, BigInt

// SO JAVASCRIPT IS A DYNAMICALY LANGAUGE IT MEANS the type of a variable is determined at runtime, and you can reassign it to a
//  different type later:

const score = 100;
const scoreValue = 200.1;

const siLoggedIn = false;
const outsideTem = null;

let userEmail; // like its define as a undefined value

const id = Symbol("123");
const anotherId = Symbol("123");
// console.log(id === anotherId);

// REFERENCE TYPE / NON-PRIMITIVE

// Array , Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; // example of Arrays

let myObj = {
  // example of Objects
  name: "Rani",
  age: 26,
};

const myFunction = function () {
  // example of Functions
  console.log("Hello world");
};

// console.log(typeof myFunction);

// ***********************************************8 MEMORIES TYPES

// STACT (PRIMITIVE) , HEAP (NON-PRIMITIVE)

let myYoutubeName = "ranidotcom";
let anotherName = myYoutubeName;
console.log(anotherName);
