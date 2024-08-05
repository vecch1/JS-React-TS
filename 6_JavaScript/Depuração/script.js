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