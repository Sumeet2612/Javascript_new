// var c = 300

let a = 300 // within Global scope 

if (true){
    let a = 10
    const b = 20
    // console.log("INNER: ",a); // within block scope
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "Sumeet"

    function two(){
        const website = "youtube"
        console.log(username);  
    }
    // console.log(website)

    two()
}
// one()

if (true){
    const username = "hitesh"
    if (username === "hitesh"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website) 
}

// console.log(username)

// +++++++++++++++++++++ intersting ++++++++++++++++++++++++

console.log(addone(5))

function addone (num){
    return num + 1
}

const addTw o = function (num){
    return num +2 
}

addTwo(5)