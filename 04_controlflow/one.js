// control flow

// if 

const isUserLoggedIn= true
const temperature = 41

// if(temperature < 50){
//   // true condition then it execute else not execute
//   console.log("less than 50");
// } else{
//     console.log("temperature is greater than 50");
// }

// comparison operator ->  <,>,<=,>=,==,!=,===,!==


// const score =200
// if(score > 100){
//     const power = "Fly"
//     console.log(`User power: ${power}`);
// }


const balance = 1000

// we can write like this 
// if(balance > 500) console.log("test");
// dont write code like this not a good practice 
// if(balance > 500) console.log("test"),
// console.log("test2");

// if(balance < 500){
// console.log("less than 500");
// }
// else if (balance < 750){
//  console.log("less than 750");
// } else if(balance < 900){
//  console.log("less than 750");
// }
// else{
//  console.log("less than 1200");
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
   console.log("Allow to buy course");
}
if(loggedInFromEmail || loggedInFromGoogle){
   console.log("user logged in");
}

