// Objects can be declared as literal and constructor 

/* singelton --> When we declare objects through literals then the object create 
can't be declared as singelton but it can be done by constructor */

// object literals
// Object.create constructor way of introducing objects 

const mySym = Symbol("key1")

const Jsuser = { 
    name : "Sumeet",
    age : 22 ,
    location : "Bangalore",
    [mySym] : "mykey1",
    email: "sumeetkumarraj2612@gmail.com",
    isLoggedIn : false,
    lastLogin : ["Monday" , "Tuesday"]
}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(typeof Jsuser["mySym"]);

Jsuser.email = "sumeet@gmail.com"
// Object.freeze(Jsuser)
Jsuser.email = "hitesh@chatgpt.com"
console.log(Jsuser);

// Jsuser.greeting = function () {
//     console.log("Hello User");
// }

// Jsuser.greetingTwo = function () {
//     console.log(`Hello Js user, ${this.name}`);
// }

// console.log(Jsuser.greeting());
// console.log(Jsuser.greetingTwo());
