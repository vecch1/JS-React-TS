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