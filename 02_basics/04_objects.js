// const tinderUser = new Object()  // Singelton Object

const tinderUser = {}

tinderUser.id = "1234"
tinderUser.name = "Sumeet"
tinderUser.isLoggedIn = false 

// console.log(tinderUser);

const regularUser = {
    email : "user@example.gmail.com",
    fullname : {
        userfullname : {
            firstname : "Sumeet",
            lastname : "Kumar Raj"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1 : "a" , 2 : "b"}
const obj2 = {3: "c" , 4: "d"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({} , obj1 , obj2)

const obj3 = {...obj1 , ...obj2}
// console.log(obj3);

const users = [
    {
        id : 1,
        email : "sumeet@mail.com" ,
    },
    {
        id : 2,
        email : "sumit@mail.com" ,

    }
]

// console.log(users[1].email);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))


const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}

const {courseInstructor : instructor} = course

console.log(instructor);


// {
//     "name ": "Sumeet",
//     "coursename ": "Js in hindi",
//     "price ": "free"
// }


[
    {},
    {},
    
]
