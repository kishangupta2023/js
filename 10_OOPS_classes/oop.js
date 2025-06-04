const user = {
    username:"kishan",
    loginCount: 8,
    signedIn:true,

    getUserDetails: function(){
        //  console.log("Got user details from database");

        // console.log(`Username: ${this.username}`);

        console.log(this);
        
    }
} 

console.log(user.username);
console.log(user.getUserDetails());


function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }


    // it happened implicitily that return this 
    // return this
} 

const userOne =new User("hitesh",12,true) 
const userTwo =new User("Chai aur Code",11,false)
console.log(userOne.constructor);
// console.log(userTwo);





// here new is construction function 
// const promiseOne = new Promise()
// const date  = new Date()