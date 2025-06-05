// let myName = "Kishan   "

// console.log(myName.truelength);
// we want a method for truelength 


let myHeros = ["thor","spiderman"]

let heroPower = {
    thor:"hammer",
    spiderman:"sling",
    getSpiderPower:function(){
        console.log(`spidy power is ${this.spiderman}`);
    }

}

Object.prototype.hitesh = function()
{
    console.log(`hitesh is present in all object `);
    
}

Array.prototype.heyHitesh = function(){
    console.log(`hitesh says hello`);
    
}

// heroPower.hitesh()
myHeros.hitesh()
myHeros.heyHitesh()
// heroPower.heyhitesh()


// Inheritance 

const user = {
    name:"chai",
    email:"chai@google.com"
}
const Teacher = {
    makeVideo:true
}
const TeachingSupport = {
    isAvailable:false
}
const TASupport = {
    makeAssignment:'JS assignment',
    fullTime:true,
    __proto__:TeachingSupport
}
Teacher.__proto__ = user

// modern syntax 
Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherUsername = "ChaiAurCode     "
String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}

anotherUsername.truelength()
"hitesh".truelength()
"icetea".truelength()