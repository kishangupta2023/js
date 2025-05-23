// singleton 
// Object.create 

// object literals 
 
const mySym = Symbol("key1")


const JsUser = {
    name: "kishan",
    "full name": "kishan gupta",
    [mySym]:"mykey1",
    age: 18,
    location: "lucknow",
    email:"hitesh@gmail.com",
    isLoggedIn:false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]); //   no other way to access full name 
// console.log(JsUser[mySym]); 
// console.log(typeof JsUser[mySym]);

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@tgpt.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello js User");
}

console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello js User, ${this.name}`);
}

console.log(JsUser.greetingTwo());

