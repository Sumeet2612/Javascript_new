// if 

const isUserloggedin = true 
const temperature = 41

// if (isUserloggedin){
//     console.log("less than 50");
// }

// console.log("temperature is greater than 50");
// < , > , <= , >= , == , != , === [checks the type] , !==

// const score = 200
// if (score > 100){
//     var power = "fly"
//     console.log(`User power : ${power}`)
// }

// console.log(`User power: ${power}`);

const balance = 1000
// if (balance > 500) console.log("test"); 

if (balance < 500){
    console.log("less than");
}
else if (balance < 750){
    console.log("less than 750");
}
else if(balance < 900) {
    console.log(balance < 900);
}
else {
    console.log("less than 1200");
}

const userLoggedIn = true 
const debitCard = true 
const loggedInFromGoogle = false 
const loggedInfromEmail = true 

if (loggedInFromGoogle || loggedInfromEmail){
    console.log("User logged in");
}

if (userLoggedIn && debitCard ){
    console.log("Allow to buy course");  
}

