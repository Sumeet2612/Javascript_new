// Primitive 

// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt

// Javascript is dynamically typed language type checking occurs during runtime 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null 

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id == anotherId);



// Reference (Non primitive)
// Array , Objects , Functions 

const heros = ["ben10" , "rollno21" , "pokemon"]
let myObj = {
    name: "Sumeet",
    age : 22,
}

const myFunction = function(){
    console.log("Hello World");
}

myFunction();

console.log (typeof myFunction);