function SetUsername(username){
    // complex DB calls 
    this.username = username
    console.log("Called");
    
}

function createUser(username,email,password){
    // call function call the above function use this for current function reference 
    SetUsername.call(this, username)
    this.email = email
    this.password = password
}

const chai = new createUser("kishan","chai@fang.com",123);
console.log(chai);

