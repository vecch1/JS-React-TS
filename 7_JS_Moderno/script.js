// var let e const
var x = 10;
var y = 15;

if(y > 15){
    var x = 5;
    console.log(x);
}
console.log(x);

let a = 10
let b = 15

if(b > 15){
    let a = 5
    console.log(a)
}

console.log(a)

function logName(){
    const name = "Lucas"
    console.log(name)
}
const name = "Pedro"
logName()
console.log(name)

// arrow function
const sum = function (a,b) {
    return  a + b
}

const arrowSum = (a,b) => a + b
console.log(sum(5,5))
console.log(arrowSum(5,5))

const greeting = (name) => {
    if(name){
        return `Hello ${name}`
    }else {
        return "Hello"
    }
}
console.log(greeting("Lucas"))
console.log(greeting())

const user = {
    name: "Pedro" ,
    sayUserName(){
        setTimeout (function(){
            console.log(this)
            console.log(`Username: ${this.name}`)
        }, 1000)
    },
    sayUserName(){
        setTimeout(() => {
            console.log(this)
            console.log(`Username: ${this.name}`)
        },2000)
    }
}

user.sayUserName()
