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