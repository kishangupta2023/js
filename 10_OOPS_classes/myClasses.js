// ES6 

class User {
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPasswrod(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }


}

const chai = new User("kishan","chai@gmail.com",123)

console.log(chai.encryptPasswrod());
console.log(chai.changeUsername());



// behind the seen 

// function User(username,email,password){
//     this.username = username;
//     this.email = email;
//     this.password = password;
// }

// User.prototype.encryptPasswrod = function(){
//      return `${this.password}abc`
// }

// User.prototype.changeUsername = function(){
//         return `${this.username.toUpperCase()}`
//     }
// const tea = new User("tea","tea@gmail.com",123)

// console.log(tea.encryptPasswrod());
// console.log(tea.changeUsername());