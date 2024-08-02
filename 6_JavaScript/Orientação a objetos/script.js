// Metodos / como propriedades mas contem uma funçao  (linha 4)
const animal = {
    nome:"flocky",
    latir: function(){
        console.log("Au,Au")
    }
};
console.log(animal.nome)
animal.latir();

const pessoa = {
    nome:"Lucas",
    idade: 18,
    getAge: function(){
        return this.idade;
    },
    setName: function(newName){
        this.nome = newName;
    },
};
console.log(pessoa.nome);
console.log(pessoa.getAge());

pessoa.setName("thiago");
console.log(pessoa.nome); // Isso vai imprimir "thiago"

// prototypes / herda recursos uns dos outros
const text = "asd"

console.log(Object.getPrototypeOf(text));

const bool = true

console.log(Object.getPrototypeOf(bool));

const arr = []

console.log(Object.getPrototypeOf(arr));

// mais sobre prototype
const myObject = {
    a: "b"
}
console.log(Object.getPrototypeOf(myObject));

const mySecondObject = Object.create(myObject)
console.log(mySecondObject);
