const name = "Sumeet"
const repoCount = 4

// console.log(name + repoCount + " value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); 
// String Interpolation modern methods 

const gamename = new String('Sumeets-shc')

console.log(gamename[0]);
// console.log(gamename.__proto__);

// console.log(gamename.length);
// console.log(gamename.toUpperCase());
// console.log(gamename.charAt(5));
console.log(gamename.indexOf('t'));

// const newString = gamename.substring(0 , 4)
// console.log(newString);


// const anotherString = gamename.slice(-10 , 4)
// console.log(anotherString);

const newStringOne = "   Sumeet   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sumeet.com/sumeet%20kumar"

console.log(url.replace('%20','-'))

console.log(url.includes('sumeet'))
console.log(url.includes('sundar'))

console.log(gamename.split('-'));