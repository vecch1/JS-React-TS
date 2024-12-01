// add eventlistener
const btn = document.querySelector("#Button");

btn.addEventListener("click", function(){
    console.log("clicou aqui");
})

// remove elementos
const btn2 = document.querySelector("#Button2");

function imprimirMensagem(){
    console.log("teste");
}

btn2.addEventListener("click", imprimirMensagem);

const Btn3 = document.querySelector("#Button3")

Btn3.addEventListener("click", () => {
    console.log("evento removido")
    btn2.removeEventListener("click", imprimirMensagem)
})

// objeto do evento
const myTitle = document.querySelector("#my-title")

myTitle.addEventListener("click", (event) => {

    console.log(event)
    console.log(event.offsetX)
    console.log(event.pointerType)
    console.log(event.target)

})


// propagação
const containerBtn = document.querySelector("#btn-container")
const btninsidercontainer = document.querySelector("#div-btn")

containerBtn.addEventListener("click", () => {
    console.log("Evento 1")
})

btninsidercontainer.addEventListener("click", (e) => {
    e.stopPropagation()
    console.log("Evento 2")
})


// Evento padrão / cancelou link do google e saiu no console como pedido
const a = document.querySelector("a")

a.addEventListener("click", (e) => {

    e.preventDefault()
    console.log("Não alterou a pagina")

})


// eventos de tecla  / diz tecla q vc utilizou
document.addEventListener("keyup", (e) => {
    console.log(`Soltou a tecla  ${e.key}`)
})

document.addEventListener("keydown", (e) => {
    console.log(`Arpertou a tecla ${e.key}`)
})

// outros eventos de mouse   //   mousedown - pressionou botao do mouse
//   dblclick - clique duplo  //   mouseup - soltou botão do mouse

const mouseEvents = document.querySelector ("#mouse")
mouseEvents.addEventListener("mousedown", () =>{
    console.log("pressionou o botão");
})

mouseEvents.addEventListener("mouseup", () =>{
    console.log ("Soltou o botão");
})

mouseEvents.addEventListener("dblclick", () =>{
    console.log ("Duplo clique");
})

// movimentação do mouse - mousemove
// document.addEventListener("mousemove", () => {
//     console.log("O mouse esta se movendo")
// })


// Debounce -  tecnina para evento disparar menos vezes/ poupa memoria 
const debounce = (f, delay) => {
    let timeout
    return(...arguments) => {
        if(timeout){
            clearTimeout(timeout)
        }

        timeout = setTimeout( () => {
            f.apply(arguments)
        }, delay)

    }
}

window.addEventListener("mousemove", debounce(() => {
        console.log("Executando a cada 400ms")
} , 400)
)