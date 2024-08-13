// setTimeout   /  nao oorre por ordem de linha / 2000 é 2seg
// console.log("Ainda nao executou")

// setTimeout(function(){
//     console.log("sincronizaçao assincrona")
// },2000)

// console.log("Ainda nao executou 2");


// // setInterval / semelhante ao settimeout mas nao para de ser executada

// console.log("Ainda nao executou  3")

// setInterval(function(){
//     console.log("intervalo  assincrona")
// },3000)

// console.log("Ainda nao executou 4")

// // promises
// const promessa = Promise.resolve(5+5)
// console.log("Algum resultado")
//     promessa.then(value =>{
//         console.log(`A soma é ${value}`)
//     })

// console.log("outro resultado");

// erro nas promise  / utilizamos a funaçao catch
// Promise.resolve(4 * "asd")
// .then(n) => {
//     if(Number.isNaN(n)){
//         throw new console.error("valores invalidos");
//     }
// }
// .catch(err) => console.log(`um erro ocorreu ${err}`)


// rejeitando promise / metodo reject
// function checkNUmber(n){
//     return new Promise((resolve, reject) => {
//         if(n > 10){
//             resolve("o numero é maior que 10")
//         } else {
//             reject(new Error("numero muito baixo"));
//         }
//     })
// }

// const a = checkNUmber(30)
// const b = checkNUmber(10)

// a.then((v) => console.log(`o resultado é ${v}`).catch(err) => console.log(`um erro ocorreu ${err}`)


// resolvendo promisses / metodo all executa varias promises
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(function () {
//         resolve(10)
//     }, 1000)
// });

// const p2 = Promise.resolve(10+10)

// const p3 = new Promise ((resolve, reject) => {
//     if (30 > 10){
//         resolve(30)
//     } else {
//         reject("erro")
//     }
// });

// Promise.all([p1, p2, p3]).then(values) => console.log((value))

// async functions / retornam promise
async function SomarComDelay (a,b){
    return a + b
}

SomarComDelay(2,4).then((value) => {
    console.log(`o valor da soma é ${value}`)
});

// assertion/ await serve para aguardar um resultado de uma async function
function ResolverComDelay(){
    return new Promise (resolve => {
        setTimeout(()=>{
            resolve("resolveu a Promise");
        },2000)
    })
}

async function ChamadaAsync(){
    console.log("chamando a promise e esperando resultado")
    const result = await ResolverComDelay()
    console.log(`o resultado chegou ${result}`)
}

ChamadaAsync();

// generators / semelhante promise/ acoes pausadas e continuadas depois
function* Generator() {
    yield 1;
    yield 2;
}

const gen = Generator()

console.log(gen.next().value)
console.log(gen.next().value)