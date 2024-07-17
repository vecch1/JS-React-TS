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
console.log(m);
escopoAninhado(); 

// arrow function  /  forma de criar funtions, usada em frameworks
const testArrow = () => {
    console.log("Esta é uma arrow function")
};

testArrow();

const parOuimpar = (n) => {
    if(n % 2 === 0){
        console.log("par");
        return;
    }

    console.log("impar");
};

parOuimpar(5);
parOuimpar(10);

// Arrow function + resumida
// com {} e return
const raizQuadrada = (x) =>{
    return x * x
}
console.log(raizQuadrada(4));

// sem {} e return
const raizQuadrada2 = (x) => x * x
console.log(raizQuadrada2(5));
console.log(raizQuadrada2(12));

//  paramentro opcional
const multiplication = function (m, n){
    if (n === undefined){
        return m * 2;
    }else {
       return  m * n;
    }
}
console.log(multiplication(5));
console.log(multiplication(2, 4));

const greeting = (name) => {
    if(!name){
        console.log("ola")
        return
    }
        console.log(`ola ${name}`)
}

greeting ();
greeting("Lucas");

// Argumento default  / tem valor prévio

const customGreeting = (name, greet = "ola") => {
    return `${greet}, ${name} `
}
console.log(customGreeting("lucas"));
console.log(customGreeting("lucas", "bom dia"));


const repeatText = (text, repeat = 2) => {
    for(let i =  0; i < repeat; i++){
        console.log(text)
    }
};
repeatText("testando");
repeatText("agora repete 5 vezes", 5);

// closure
// funçoes onde temos reaproveitamento do escopo interno de uma funçao
function someFunction(){
    let txt = "alguma coisa"

    function display(){
        console.log(txt)
    }
    display();
}

someFunction();

// closures podem servir para salvar resultados ja executados

const multiplicationclosure = (n) => {
    return (n) => {
        return n * n;
    };
};

const c1 = multiplicationclosure(5);
const c2 = multiplicationclosure(10);

console.log(c1);
console.log(c2);

console.log(c1(5));
console.log(c2(10));

// recursão
// se autoinvocar continuamente/ especie de loop
const untilTen = (n,m) => {
    if(n < 10){
        console.log("A funçao parou de executar");
    }else {
        const x = n - m ;

        console.log(x);

        untilTen(x,m);
    }
};

untilTen(100, 7);



// faotrial

function factorial(x){
    if(x === 0){
        return 1
    } else {
        return x * FACTORIAL (x - 1)
    }
}
const num = 6

const result = factorial(num)

console.log(`o faotrial do numero ${num} é ${result}`)