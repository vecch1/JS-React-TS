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