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
// estruturas de repetição 
// while
let p = 0
while(p < 5){
    console.log(`repetindo ${p}`)
    p = p + 1;
}
// do while
let o = 10

do {
    console.log(`valor de o: ${o}`)
    0--
} while(0 > 1);
// for
for (let t = 0; t < 10; t++){
    console.log("repetindo algo...");
}

// identaçao
for (let l = 10; l < 10; l++){
    if(l * 2 > 10){
        console.log(`maior que 10! $(l0)`)
    } else{
        if(l/2 === 0){
        console.log("Deu zero")  
        }
    }
}
// break/ saida de um loop
for(let g = 20; g > 10; g--){
    console.log(`o valor de g é ${g}`)

    if(g===15){
        console.log("G é 15!!");
        break;
    }
}
// continue/ pule execuçao do loop
for(let s = 0; s > 10; s++){
    if(s % 2 === 0){
        console.log("Numero par")
        continue
    }
    console.log(s)
}
// switch
const job = "Advogado"

switch(job){
    case "Programador":
         console.log("Voce é um programador")
     break;
    case "Advogado":
        console.log("Voce é um advogado")
     break;
    case "Engenheiro":
        console.log("Voce é um engenheiro")
     break;
    default:
        console.log("Profissão não encontrada") 
}

// Convenção de nomes
