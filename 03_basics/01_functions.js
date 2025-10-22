function sayMyName(){
    console.log("S");
    console.log("U");
    console.log("M");
    console.log("E");
    console.log("E");
    console.log("T");
}
// sayMyName By this it doesn't execute the function it just states the presence of it */
// sayMyName() This executes the function 


// function addTwoNumbers(number1 , number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1 , number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3,5)
// console.log("Result: ", result);

function loginUserMessage(username){
    if (username === undefined){
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in `
}

// console.log(loginUserMessage ())


// function calculatecartPrice(num1){
//     return num1
// } 

function calculatecartPrice(val1 , val2, ...num1){
    return num1  // Use of rest operator  
}


// console.log(calculatecartPrice(200 , 400 , 500))

const user = {
    username: "Sumeet",
    price: 200
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username : "Sam" ,
    price : 400
})

const myNewArray = [200 , 200 , 100, 600]

function returnSecondValue(getArray){
    return getArray[2]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]));

