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
const productsQuery = document.querySelectorAll (".product")
console.log(productsQuery)


const mainContainer = document.querySelector("#main-container")
console.log(mainContainer)

// insert before / cria um elemento antes de outro elemento
const p = document.createElement("p")

const header = title.parentElement;

header.insertBefore(p, title)


// appendchild / add elementro dentro de outro
const navLinks = document.querySelector("nav ul")

const li = document.createElement("li")

navLinks.appendChild(li)

// replace child / trocar elemento
const h2 = document.createElement("h2")

h2.textContent = "meu novo titulo"

header.replaceChild(h2, title)


// nós de textos  usando createTextoNode

const myText = document.createTextNode("Agora mais um titulo")
console.log(myText)

const h3 = document.createElement("h3")
h3.appendChild(myText)
console.log(h3)

mainContainer.appendChild(h3)


// ler - getattribute    alterar = setatributte
const firstLink = navLinks.querySelector("a")
console.log(firstLink)

firstLink.setAttribute("href", "https://google.com")
firstLink.setAttribute("target", "_blank")


console.log(firstLink.getAttribute("href"))

// altura e largura dos elementos / offsetwidth e offsetheight
// se queremos desconsiderar as bordas clientwidth e clientHeight
const footer = document.querySelector("footer")
console.log(footer.offsetHeight)
console.log(footer.offsetWidth)

console.log(footer.clientHeight)
console.log(footer.clientWidth)

// alterando estilos do elemento 
mainContainer.style.color = "red"
mainContainer.style.backgroundColor = "#333"
mainContainer.style.paddingBottom = "20px"

// estilizando varios itens - HTMLCollection
for(const li of listItens){
    li.style.backgroundColor = "red"
}