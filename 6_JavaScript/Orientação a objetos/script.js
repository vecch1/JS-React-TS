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

// classes / prototypes sao originados de uma classe / js ja possui classes mas podemos criar as nossas
const cachorro = {
    raça: null,
    patas: 4
}
const pastorAlemao = Object.create(cachorro)
pastorAlemao.raça = "Pastor Alemão"
console.log(pastorAlemao)

console.log(pastorAlemao.patas)

const bulldog = Object.create(cachorro)
bulldog.raça = "Bulddog"
console.log(bulldog)

// Funçoes como classe 
function criarCachorro (nome,raça){
    const cachorro = {}

    cachorro.nome = nome
    cachorro.raça= raça

    return cachorro
}
const bob = criarCachorro("Bob", "Vira-lata");
console.log(bob)
console.log(Object.getPrototypeOf(bob))

// funçoees como construtoras / semelhante ao anterior com palavra "new" para instaciar ovos obj
function Cachorro(nome,raça){
    this.nome = nome
    this.raça = raça
}
const husky = new Cachorro("Ozzy", "Husky")
console.log(husky)

// metodos de funçoes construtoras
Cachorro.prototype.uivar = function() {
    console.log("Auuu")
}

husky.uivar();

// classes em js / nas versoes atuais do js abandonamos functions e utilizamos classes
class CachorroClasse {
    constructor(nome,raça){
        this.nome = nome
        this.raça = raça
    }
}
const slinky = new CachorroClasse ("Slinky", "Labrador");
console.log(slinky)

// mais sobre classes 
class Caminhão {
    constructor (eixos, cor){
        this.eixos = eixos
        this.cor = cor
    }

    descreverCaminhão(){
        console.log(`este caminhao tem ${this.eixos} eixos e é da cor ${this.cor}`)
    }
}
const scania = new Caminhão (6, "vermelha")
console.log(scania)

scania.descreverCaminhão();

const c2 = new Caminhão(4, "preta")
console.log(c2)

// substituindo propriedades pelo prototype
class Humano {
    constructor (nome,idade){
        this.nome = nome
        this.idade = idade
    }
}
const Lucas = new Humano("Lucas",18)
console.log(Lucas)

Humano.prototype.idade = "Não definido"
console.log(Lucas.idade)
console.log(Humano.prototype.idade)

// symbol com classes / possivel criar propriedade unica e imutavel
class Aviao {
        constructor(marca,turbina){
            this.marca = marca
            this.turbina = turbina
        }
}
const asas = Symbol()
Aviao.prototype[asas] = 2

 const Aviao1 = new Aviao ("marca1","3")
 console.log(Aviao1)
 console.log(Aviao1[asas])

//  getter e setter / get exibe valor de propriedade / set altera valor
class Post {
    constructor(titulo,descricao,tags){
        this.titulo = titulo 
        this.descricao = descricao 
        this.tags = tags
    }
get exibirTitulo(){
    return `voce esta lendo ${this.titulo}`
  }
set adicionarTags(tags){
    const tagsArray = tags.split(",")
    this.tags = tagsArray
}
}
const myPost = new Post ("algum post", "é um post sobre programaçao")
console.log(myPost)
console.log(myPost.exibirTitulo)

myPost.adicionarTags = "programaçao, Javascript , Js"
console.log(myPost);

// herança / uma classe pode herdar propriedades "extends" para add e "super" ára enviar valores
class Mamifero{
    constructor(patas){
        this.patas = patas
    }
}
class lobo extends Mamifero {
    constructor(patas,nome){
        super(patas,patas)
        this.nome = nome
    }
}

const Lobo1 = new lobo(4, "Lobo1")
console.log(Lobo1)

// instanceof  / verifica se objeto é pai de outro
console.log(Lobo1 instanceof lobo)
console.log(lobo instanceof Mamifero)