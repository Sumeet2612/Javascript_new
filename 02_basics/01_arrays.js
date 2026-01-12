// array
// Defining Arrays 
const myArr = [0 , 1 , 2 , 3 , 4 , 5]
const myHeroes = ["Superman" , "Batman"]

const myArr2 = new Array(1,2,3,4) // defining a new array 

// console.log(myArr[0]);
// console.log(myArr2);
// console.log(myHeroes);

// Array methods
/* JavaScript arrays are not associative arrays and so, array elements cannot 
be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes*/
// myArr.push(6)
// myArr.push(7)
// myArr.pop() // just pops out the last element 

// console.log(myArr);

// myArr.unshift(9)

// console.log(myArr);
// console.log(myArr2)
myArr.shift() // removes the first element of the array 
// console.log(myArr);
// console.log(myArr.includes(3));
// console.log(myArr.indexOf(10)); 
// console.log(myArr);

const newArr = myArr.join()  /*The join() method of Array instances creates and returns a 
new string by concatenating all of the elements in this array, separated by commas or a specified separator string */

// console.log(myArr);
// console.log(newArr);

// console.log(typeof newArr); 

// slice , splice 

// console.log("A" , myArr);

const myn1 = myArr.slice(1,3) /* he slice() method of Array instances returns a shallow copy of a portion of an array into a new array 
object selected from start to end (end not included) where start and end represent the index of items in that array. */
console.log(myn1);
console.log("B ",myArr);



const myn2 = myArr.splice(1,3) // manipulates the original array 
console.log("C ",myArr);
console.log(myn2);

















