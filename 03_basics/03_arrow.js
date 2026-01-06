const user = {
    username : "Sumeet",
    price: 999,

    welcomeMessage : function() {
        console.log(`${this.username } , welcome to website  `);
        console.log(this);
        
    }
}

// user.welcomeMessage();
// user.username = "Sam";
// user.welcomeMessage();

// console.log(this);

// // function chai(){
//     let username = "Sumeet"
//     console.log(this.username);    
// }

// chai()

// const chai = () => {
//     let username = "Sumeet"
//     console.log(this.username);
    
// }

// chai()

// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }

// const addTwo = (num1 , num2) => (num1 + num2) // Implicit return 
const addTwo = (num1 , num2) => ({username : "Sumeet"})  // for returning object {} is used

console.log(addTwo(3,4))