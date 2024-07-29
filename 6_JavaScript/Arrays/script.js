// arrays sao listas/ valores  entre [] /valor separado por uma virgula 
const lista = [1,2,3,4,5];

console.log(lista);
console.log(typeof lista);

const itens = ["lucas", true , 2, 4.12, [] ];
console.log(itens);

// acessar elemento por posição
const letters = ["a","b","c","d","e"];
console.log(letters[0]);   
console.log(letters[2]);

// propriedades
const numbers = [5,6,7];
console.log(numbers.length);
console.log(numbers["length"]);

const myName = "Lucas";
console.log(myName.length);

// Metodos / são como funçoes e usamos () para invocar
const othernumbers1 = [1,2,3];
const othernumbers2 = [4,5,6];

const allnumbers = othernumbers1.concat(othernumbers2);

console.log(allnumbers);

const text = "Algum texto";

console.log(text.toUpperCase());
console.log(typeof text.toUpperCase);

console.log(text.indexOf("g"));

// Objetos / nome literal é objetc literals / fica entre {}
const person = {
    name: "Lucas",
    age: 18,
    job: "Programador",
};

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.name.length);

// criando e deletando propriedades  / doors e delete
const car = {
    engine: 2.0,
    brand: "Volkswagen",
    model: "Tiguan",
    Km: 20000,
};
console.log(car);

car.doors = 4;

console.log(car);

delete car.Km;
console.log(car);

// arrays sao lista de itens
// obejetos sao para descrever item
// possivel ter um array de objetos

// copiar todas propriedades de um objeto para outro  / metodo assign
// objeto ou array com const pode ser modificado
const objeto = {
    a: "teste",
    b: true,
};

console.log(objeto instanceof Object);

const objeto2 = {
    c: [],
};

Object.assign(objeto2, objeto);
console.log(objeto2);

// podemos verificar propriedades do objeto pelo metodo keys
// metodo entries recebemos arrays dos nomes das propriedades

console.log(Object.keys(objeto));
console.log(Object.keys(objeto2));

// mutaçao
const a = {
    name: "Lucas"
};

const b = a;

console.log(a);
console.log(b);
console.log(a===b);

a.age = 18;
console.log(b);
console.log(a);

delete b.age ;
console.log(b);
console.log(a);

// loope em arrays
const user = ["matheus","joao","pedro","thiago"];
for(let i = 0; i < user.length; i++){
    console.log(`listando o usuario ${user[i]}`);
};

// push add um item  ao fim do array/ pop remove elemento do fim 
const array = ["a","b","c"];
array.push("d");
console.log(array);
console.log(array.length);
array.pop();
console.log(array);
console.log(array.length);

const itemRemovido = array.pop();
console.log(itemRemovido);
console.log(array);

// shift remove primeiro elemento e unshift  add itens ao incio
const letras = ["a","b","c"];

const letter = letras.shift()

console.log(letter);
console.log(letras);

letras.unshift("p","q");
console.log(letras);

// indexof encontra indice do elemento e lastindexof qnd ha repetiçao de elemento
const myelements = ["morango", "banana", "abacate","maça"]

console.log(myelements.indexOf("banana"));
console.log(myelements.indexOf("morango"));
console.log(myelements[2]);
console.log(myelements[myelements.indexOf("abacate")]);

console.log(myelements.lastIndexOf("abacate"));

// slice extarir um elemento menor de um array maior
const testeslice = ["a","b","c","d","e"]
const subarray = testeslice.slice(2,4 + 1)

console.log(subarray)
console.log(testeslice)

// foreach  parecido com for e while mas é um metodo
const foreach = [1,2,3,4,5]
foreach.forEach((numero) => {
    console.log(`o numero é ${numero}`);
})

const posts =[
    {title: "primeiro post", category: "php"},
    {title: "segundo post", category: "java"},
    {title: "terceiro post", category: "python"},
];
posts.forEach((post) => {
    console.log(`exibindo ${post.title}, da categoria ${post.category}`);
})

// includes verifica se array tem um elemento 
const brands = ["bmw","vw","fiat"]
console.log(brands.includes("fiat"))

// reverse inverste elementos de um array
const reverse = ["carro","caminhão","trator","moto"]

console.log(reverse.reverse())

// trim remove tudo q n é texto em uma string
const trimTest = "    testando \n    ";
console.log(trimTest);
console.log(trimTest.trim());

// padstart insere texto no inicio da string
const Testpadstart = "1";

const newnumber = Testpadstart.padStart(4, "0");
console.log(Testpadstart);
console.log(newnumber);


const TestePadEnd = newnumber.padEnd(10, "0")
console.log(TestePadEnd)

// split divide string em um array
const frase = "O rato roeu a roupa do rei de roma"

const arrayDaFrase = frase.split("");
console.log(arrayDaFrase)

// join une array em uma string

const fraseDeNovo = arrayDaFrase.join("");
console.log(fraseDeNovo);

const itensParaCompar = ["mouse", "teclado"]

const FraseDeCompra = `prescisamos comprar: ${itensParaCompar.join(", ")}.`
console.log(FraseDeCompra);

// repeat repete texto n vezes
const palavra = " Testando "
console.log(palavra.repeat(5));

// rest operator é simbolo para receber indefnidos argumento de uma funçao
const somaInfinita = (...args) => {
    let total = 0
    for(let i = 0; i < args.length; i++){
        total += args[i];
    }
    return total
};

console.log(somaInfinita(1,2,3,8));

// FOR OF/ seelhante e + simples q o FOR
const somaInfinita2 = (...args) =>{
    let total = 0

    for(num of args){
        total += num;
    }
    return total;
};

console.log(somaInfinita2(1,2,3,4,4));

// destructing em objetos/ desestruturar algum dado
const userDetail = {
    firstName: "Lucas",
    lastName: "Vecchi",
    job:"Programador"
}

const {firstName,lastName,job} = userDetail
console.log(firstName,lastName,job);

// destructing em arrays/ desestruturar um array

const myList = ["avião", "submarino", "carro"];
const [veiculo,veiculo2,veiculo3] = myList;

console.log(veiculo,veiculo2,veiculo3);


// Json / comunicaçao entre API e FrontEnd
const myJson = '{"name": "lucas", "age": 31, "skills": ["php","java"]}'
// conversão de jsonpara obj e obj para json
const myObject = JSON.parse(myJson)
console.log(myObject)
console.log(myObject.name)
console.log(typeof myObject)

// JSON INVALIDO
// const badJson '{"name": lucas, "age": 18}';
// const badObject = JSON.parse(badJson);

myObject.isOpentoWork = true;
console.log(myObject)


const newJson = JSON.stringify(myObject)
console.log(newJson)
console.log(typeof newJson)
