import { Children, useState } from 'react'
import './App.css'

// img em assets
import imgNight from "./assets/night.jpg";

// impr hooks usestate
import Data from './components/data';

// impot ListRender
import ListRender from './components/ListRender';

// import render condicional
import ConditionalRender from './components/ConditionalRender';

// Props
import Props from './components/Props';


// desestruturando props
import CarDetails from './components/CarDetails';

// renderizaçao de listas com loops
const cars = [
  {id: 1 , brand: "Ferrari", color: "branco", km:0},
  {id: 2 , brand: "KIA", color: "Azul", km:2000},
  {id: 3 , brand: "Renault", color: "Preto", km:32000},
];

// importando fragmet (<>) 
import Fragment from './components/Fragment';

// importando children
import Container from './components/Container';

// importanto executeFuntion 
import ExecuteFunction from './components/ExecuteFunction';

// import Statelift
import Message from './components/Message';

// changeMessage
import ChangeMessage from './components/ChangeMessage';

function App() {
  const [count, setCount] = useState(0)

  // funçao em prop (ExecuteFunction)
  function ShowMyFunction(){
    console.log("Evento do componente pai")
  }

  // StateLift
  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg);
  };



  return (
    <>
      <div className="App" style={{paddingBottom: "500px"}}>
        <h1>teste</h1>
        {/* img em public */}
        <img src="/img.jpg" alt="alguma img" />
        {/* img em assets */}
        <img src={imgNight} alt="outra img" />
        {/* usestate */}
        <Data/>
        {/* ListRender */}
        <ListRender/>  
        {/* render condicional */}
        <ConditionalRender/>
        {/* props */}
        <Props name="Lucas" />
        {/* desesttruturando props */}
        {/* numeros no react são entre chaves */}
        <CarDetails Brand="VW" Km={999} color="Verde" />

        {/* reaproveitamento de componenetes */}
        <CarDetails Brand="Fiat" Km={12300} color="Azul" />
        <CarDetails  Km={500} Brand="BMW"  color="Prata" />
        {/* renderizaçao com loops */}
        {cars.map((car) => (
          <CarDetails  
          key={car.id} 
          Brand={car.brand} 
          Color={car.color} 
          Km={car.km} 
          />
        ) )}
        {/* fragments */}
        <Fragment/>
        {/* children */}
        <Container>
          <p>alguma coisa</p>
        </Container>
        <Container>
          <div>
            <h2>teste</h2>
            <p>estrutura</p>
          </div>
        </Container>
        {/* ExecuteFunction */}
        <ExecuteFunction MyFunction={ShowMyFunction} />
          {/* StateLift */}
          <Message msg={message} />
          {/* Change Message */}
          <ChangeMessage handleMessage={handleMessage} />
      </div>   
    </>
  )
}

export default App
