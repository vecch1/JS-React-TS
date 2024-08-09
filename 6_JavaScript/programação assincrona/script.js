// setTimeout   /  nao oorre por ordem de linha / 2000 é 2seg
console.log("Ainda nao executou")

setTimeout(function(){
    console.log("sincronizaçao assincrona")
},2000)

console.log("Ainda nao executou 2")


// setInterval / semelhante ao settimeout mas nao para de ser executada

console.log("Ainda nao executou  3")

setInterval(function(){
    console.log("intervalo  assincrona")
},3000)

console.log("Ainda nao executou 4")