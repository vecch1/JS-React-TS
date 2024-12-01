// strict 

"use strict";       
// criar variavel sem const,let,var. no console da erro pelo strict acima
//opa = "teste";

// forma correta
const opa = "teste";

// console.log
let a = 1
let b = 2
if(a == 1){
    a = b + 2
}
console.log(a);

for(let i = 0; i < b; i++){
    a = a + 2;
    console.log(a);
}


// debugger 
let c = 1
let d = 2
if(c == 1){
    c = d + 2
}
debugger;
for(let i = 0; i < b; i++){
    c = c + 2
}

// tratamento de dados
function checkNumber(n){
    const result = Number(n)
    if(Number.isNaN(result)){
        console.log("valor incorreto!")
        return;
    }
    console.log("valor correto")
    return result;
}

checkNumber(5)
checkNumber("10")
checkNumber({})
checkNumber("teste")

// exception / sao erros que nos geramos no programa/ isso faz o programa nao continuar
let x = 10


if(x =! 11){
    throw new Error("O valor de x nao pode ser difirente de 11")
}

// try/catch / tentar executar algo em try e se ocorrer ero cai no bloco catch
try {
    const soma = x + y
} catch(error){
    console.log(`erro no programa: ${error}`)
}


// finally  / dps do bloco  try/catch / executada independente se houve erro ou nao em try
try {
    const value = checkNumber("asd")
    if(!value){
        throw new Error ("valores invalidos ")
    }
} catch(error){
    console.log(`aconteceu um erro ${error}`)
}finally{
    console.log("o codigo foi executado")
}

// assertions/ qnd tratamentoo de dados gera erro/ ajuda no desenvolvimento do programa
function checkArray(arr){
    if(arr.length === a ){
        throw new Error("o array prescisa ter elementos")
    } else {
        console.log(`o array tem ${arr.length} elementos`)
    }
}
checkArray([1,2,3])