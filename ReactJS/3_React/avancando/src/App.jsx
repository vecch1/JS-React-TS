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
      </div>
        
        
    </>
  )
}

export default App
