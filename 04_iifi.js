// Immediately invoked function expression (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();


// first parentheis for definition of function second parenthesis for calling 

// ()()

// why use iife 
// the problems which are due to global scope so the global scopes var , or the declaration  pollution removal of it we use iife 

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('hitesh')

//
// Javascript Execution Context 
// -> Global execution context 
// -> Function execution context
// -> eval Execution context 