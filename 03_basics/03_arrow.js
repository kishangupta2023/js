const user = {
    username: "hitesh",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`); 
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username ="sam"
// user.welcomeMessage()

// console.log(this);


// we cant use this.something inside the function 
// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()


// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()


// Arrow function
const chai = () => {
    let username = "hitesh"
    console.log(this);
}
// chai()


// explicit return 
// const addTwo = (num1,num2)=>{
//     return num1+num2
// }
// const addTwo = (num1,num2)=> num1+num2

// implicit return 
// const addTwo = (num1,num2)=>  (num1+num2)
const addTwo = (num1,num2)=> ({username:"hitesh"})

console.log(addTwo(3,4));


// const myArray = [2,5,3,7,8]

// myArray.forEach()