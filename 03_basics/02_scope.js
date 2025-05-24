// var c = 300
// outside if statement global scope 
let a = 300
if(true){

    // inside if block scope 
    let a = 10
    const b =20
    console.log("INNER:",a);
}


for (let i = 0; i < array.length; i++) {
    const element = array[i];
}

console.log(a);
// console.log(b);
// console.log(c);