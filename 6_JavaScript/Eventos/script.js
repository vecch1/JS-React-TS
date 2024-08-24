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