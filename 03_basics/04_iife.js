// Immediately Involked Function Expressions (IIFE)

// (function chai(){
    // console.log('DB CONNECTED');
// }) ()
//  Writing one-off scripts
// Avoiding global leaks in browser scripts
// Creating temporary scope
// Working with legacy code

// IIFE is NOT just about avoiding global pollution.
// It is about creating a private execution context immediately.
// ( () => {
//     console.log('DB CONNECTED');
// })()

(function chai(){
    // named IIFE 
    console.log('DB CONNECTED');
})();

( (name) => {
    // Parameter paasing 
    console.log(`DB CONNECTED TWO ${name}`);
} )('Sumeet');

