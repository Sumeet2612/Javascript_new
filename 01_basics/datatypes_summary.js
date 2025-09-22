// Primitive : Call by value : Original data is not provided copied (from reference) value is provided 

// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt

// Reference (not primitive) : Refrence is directly allocated to user no copied value is provided 
// Javascript is dynamically typed language type checking occurs during runtime 
// Array , Objects , functions 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null 

let userEmail; // will be considered as null 

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id == anotherId);



// Reference (Non primitive)
// Array , Objects , Functions 

const heros = ["ben10" , "rollno21" , "pokemon"] // Arrays 
let myObj = {
    name: "Sumeet",
    age : 22,
} // objects => datatype can be anything 

const myFunction = function(){
    console.log("Hello World");
} // declared in the form of variable 

// myFunction();

// console.log (typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive) , Heap  (Non-Primitive)

let myyoutubename = "SumeetKumardotcom"

let anotherName = myyoutubename
anotherName = "chaiaurcode"

console.log(myyoutubename);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "sumeet@google.com"

console.log(userOne.email);
console.log(userTwo.email);
