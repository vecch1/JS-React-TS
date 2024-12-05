import { useState } from 'react'
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
import CarDetails from './components/CarDetails';

// desestruturando props
import CarDetails from './components/CarDetails';

function App() {
  const [count, setCount] = useState(0)

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
      </div>
        
        
    </>
  )
}

export default App
