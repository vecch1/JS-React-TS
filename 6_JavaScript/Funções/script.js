// Function
function minhaFuncao(){
    console.log("Testando")
}

minhaFuncao();

// Funçao com variavel
const minhaFuncaoEmVariavel = function (){
    console.log("Funçao em variavel");
};

minhaFuncaoEmVariavel();

// Funçao com paramentro 
function FuncaoComParamentro(txt){
    console.log(` imprimindo: ${txt}`);
}
FuncaoComParamentro("Imprimindo alguma coisa");
FuncaoComParamentro("Outra função");


// Retornando valores
const a = 10
const b = 20
const c = 30
const d = 40

function somar (n1,n2){
    return n1 + n2;
}
const resultado = somar ( a,b)
console.log(resultado);

console.log(somar(c,d));

// escopo das funçoes
// escopo dentro da function nao interfere no que esta fora da function
let y = 10

function testantoEscopo(){
    let y = 20
    console.log(`testanto ${y}`);
}

console.log(`testando ${y}`);

testantoEscopo();

// escopo aninhado
let m = 10
function escopoAninhado(){
    let m = 20
    if(true){
        let m = 30

        if(true){
            let m = 40

            console.log(m)
        }   
        console.log(m)     
    }
    console.log(m)
}

escopoAninhado(); 