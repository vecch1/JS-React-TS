// variaveis

// let é possivel alterar o valor
let nome = "Lucas";
console.log(nome)

nome = "Lucas Vecchi Barcelos"
console.log(nome)

// nao altera valor
const idade = 18;
console.log(idade)

// variavel inicando com numero ou @ é invalido 

let a = 10, 
    b = 20,
    c = 30;
console.log(a,b,c);

// Case sensitive
const nomecompleto = "Lucas Vechi Barcelos"
const NomeCompleto = "Lucas Vechi Barcelos"
console.log(nomecompleto)
console.log(NomeCompleto)

// simbolos permitidos para variaveis

let _teste = "ok"
let $teste = "ok"
console.log(_teste,$teste) 

// funçao prompt
const age = prompt("Digite sua idade:");

console.log(`Você tem ${age} anos.`);

// funçao alert
const z = 10
alert(`O numero é ${z}`);

// objeto math
console.log(Math.max(5,2,1,10))
console.log(Math.floor(5.14))
console.log(Math.ceil(5.14))
// objeto console
console.log("Teste!");
console.error("Erro!");
console.warn("Aviso!");
// Estruturas de controle  if/else
const n = 10;
if (n > 5){
    console.log("N é maior que 5!")
}

const user = "Lucas"
if (user === "Lucas"){
    console.log("Olá Lucas!")
}else{
    console.log("Olá User")
}
// else if
const userage = 18;
const username = "Lucas";

if (username === "Pedro"){
    console.log("Seja bem vindo Pedro!")
}else if (username === "Lucas" && userage === 18){
    console.log("Olá Lucas, você tem 18 anos")
}else {
    console.log("Nenhuma condição aceita")
}