import { useState } from "react"

const Data = () => {
    let someData = 10;

const [anotherNumber, setAnotherNumber] = useState(15)


const Name = "lucas"

const [anotherName, setAnotherName] = useState("lucas")
  return (
    <div>
        <div>
            <p>Valor: {someData} </p>
            <button onClick={() => someData = 15}>Mudar Variavel</button>
        </div>
        <div>
            <p>valor: {anotherNumber} </p>
            <button onClick={() => setAnotherNumber(20) }>mudar variavel</button>
        </div>
        <div>
            <p>Meu nome é: {anotherName} </p>
            <button onClick={() => setAnotherName("pedro")}>Mudar nome</button>
        </div>
    </div>
  )
}

export default Data