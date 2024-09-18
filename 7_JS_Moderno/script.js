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

// user.sayUserName()

// Filter  / metodo de array para filtrar dados
const arr = [1,2,3,4,5]

const highNumbers = arr.filter((n) => {
    if(n >= 3){
        return n;
    }
})
console.log(highNumbers);

const users = [
    {name: "Lucas", avaliable: true},
    {name: "Pedro", avaliable: false},
    {name: "Thiago", avaliable: false},
    {name: "Gabriel", avaliable: true},
    {name: "Diego", avaliable: false},
    {name: "Bruno", avaliable: true},
]

const avaliableUsers = users.filter((user) => user.avaliable)
console.log(avaliableUsers)

// Map / percorre elementos do array
const products = [
    {name:"Camisa", price: 10.99, category: "Roupas"},
    {name:"Churrasqueira", price: 150, category: "Churrasco"},
    {name:"Fogão", price: 499, category: "Eletro"},
    {name:"Calça", price: 87.99, category: "Roupas"}
]

products.map((product) => {
    if(product.category === "Roupas"){
        product.onSale = true
    }
})

console.log(products)

// template literals 
const userName = "Lucas"
const  userAge = 18
console.log(`o nome é ${userName} e a idade é ${userAge}` )



// Destructuring / desestrutura dados complexos
const fruits = ["Maça","Banana","Mamão"]
const[f1,f2,f3] = fruits
console.log(f1.f2)
const productDetails = {
    names: "Mouse",
    price: 39.99,
    category: "Periférico",
    color:"Azul"
}

const ( names: productName ,price,category,color) = productDetails
console.log(`o nome do produto é ${productName},ele custa R$${price} e é da cor ${color}`)

// spread operator / inserir novos valores em um array ou objeto
const a1 = [1,2,3]
const a2 = [4,5,6]
const a3 = [...a1,...a2]
console.log(a3)
const a4 = [0,...a3,7]
console.log(a4)

const carName = {name:"gol"}
const carBrand = {Brand:"VW"}
const otherInfos = {km: 1000000, price: 4999}

const car = [...carName,...carBrand,...otherInfos]