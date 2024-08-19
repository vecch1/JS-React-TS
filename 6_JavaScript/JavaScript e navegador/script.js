// movendo  DOM
console.log(document.body)

console.log(document.body.childNodes)

console.log(document.body.childNodes[1].childNodes)

console.log(document.body.childNodes[1].childNodes[1].textContent)

// selecionar elementos 

// getElementByTagName
const listItens = document.getElementsByTagName("li")

console.log(listItens)

//getElementsByID
const title = document.getElementById("title")

console.log(title)

//getElementsByClassName
const products = document.getElementsByClassName("products")

console.log(products)

// por regras de css  (queryselectorall) e (queryselector)
const productstQuery = document.querySelectorAll (".product")
console.log(productstQuery)


const mainContainer = document.querySelector("#main-container")
console.log(mainContainer)
