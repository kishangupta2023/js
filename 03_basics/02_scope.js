// var c = 300
// outside if statement global scope 
let a = 300
if(true){

    // inside if block scope 
    let a = 10
    const b =20
    // console.log("INNER:",a);
}


// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
// }

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "kishan"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}

// one()

if(true){
    const username = "kishan"
    if(username === "kishan"){
        const website = " youtube"
        // console.log(username+ website);
    }
    // console.log(website);

}

// console.log(username);


//  +++++++++++++++++ interesting ++++++++++++

console.log(addone(5))
function addone(num){
    return num + 1
}

// we cant call the function before function declaration for variable 
const addTwo = function(num){
    return num+2
}
addTwo(5)